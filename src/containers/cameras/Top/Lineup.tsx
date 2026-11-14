'use client';

import { MouseEventHandler, useEffect, useMemo, useRef } from 'react';
import { useAtomValue } from 'jotai';
import cx from 'clsx';

import { CameraType, GRADE, GradeTypes, MOUNT } from '@/types/cameras';
import { cameraId } from '@/utils/cameras';
import { selectedMakerAtom } from '../states';

import styles from './Lineup.module.scss';

// A maker's line-up as a timeline, like the Wikipedia camera templates: years across, grades down,
// one block per body from its year until the next body in the same row (or its successor).
// Built from the camera data, so it follows every edit.

const GRADE_LABELS: Record<GradeTypes, string> = {
  [GRADE.FLAGSHIP]: '플래그십',
  [GRADE.PROFESSIONAL]: '프로',
  [GRADE.ADVANCED]: '상급기',
  [GRADE.MIDRANGE]: '중급기',
  [GRADE.ENTRYMID]: '중하급기',
  [GRADE.ENTRY]: '입문기',
  [GRADE.VALUE]: '저렴이',
};
const GRADE_ORDER = Object.values(GRADE);

// Mounts that share one system line are shown as one group.
const MOUNT_GROUP: Partial<Record<string, string>> = {
  [MOUNT.CanonEF]: 'Canon EF / EF-S',
  [MOUNT.CanonEFS]: 'Canon EF / EF-S',
  [MOUNT.CanonRF]: 'Canon RF / RF-S',
  [MOUNT.CanonRFS]: 'Canon RF / RF-S',
};

const SENSOR_CLASS: Record<string, string> = {
  'Full Frame': 'ff',
  'APS-H': 'apsh',
  'APS-C': 'apsc',
  '4/3': 'mft',
  '1"': 'small',
};
const sensorClass = (size?: string) => {
  if (!size) return 'unknown';
  if (SENSOR_CLASS[size]) return SENSOR_CLASS[size];
  if (/645/.test(size)) return 'mf';
  return /crop|"/.test(size) ? 'small' : 'unknown';
};
const LEGEND = [
  ['mf', '중형'],
  ['ff', '풀프레임'],
  ['apsh', 'APS-H'],
  ['apsc', 'APS-C'],
  ['mft', '포서드'],
  ['small', 'APS-C 미만'],
];

interface Block {
  camera: CameraType;
  start: number;
  end: number; // exclusive
}

interface Row {
  grade: GradeTypes;
  lanes: Block[][];
}

interface Group {
  name: string;
  rows: Row[];
}

const buildGroups = (cameras: CameraType[], lastYear: number): Group[] => {
  const byName = new Map(cameras.map((c) => [c.name, c]));
  const groups = new Map<string, CameraType[]>();
  [...cameras]
    .sort((a, b) => a.year - b.year)
    .forEach((c) => {
      const key = MOUNT_GROUP[c.mount] ?? c.mount;
      groups.set(key, [...(groups.get(key) ?? []), c]);
    });

  return [...groups.entries()].map(([name, list]) => {
    const rows = GRADE_ORDER.map((grade) => {
      const items = list.filter((c) => c.grade === grade);
      const lanes: Block[][] = [];
      items.forEach((camera) => {
        const successorYear = camera.successor ? byName.get(camera.successor)?.year : undefined;
        const end = successorYear && successorYear > camera.year ? successorYear : camera.year + 1;
        const block = { camera, start: camera.year, end };
        // Keep a model line in one lane (A7R -> A7R II -> ...), else take the first free lane.
        const fits = (l: Block[]) => l[l.length - 1].end <= camera.year;
        const isLine = (l: Block[]) => {
          const prev = l[l.length - 1].camera;
          return prev.successor === camera.name || camera.predecessor === prev.name;
        };
        // A lane is kept for its line while the successor in this row is still to come.
        const reserved = (l: Block[]) => {
          const next = l[l.length - 1].camera.successor;
          return Boolean(next) && items.some((c) => c.name === next && c.year >= camera.year && c !== camera);
        };
        const lane = lanes.find((l) => fits(l) && isLine(l)) ?? lanes.find((l) => fits(l) && !reserved(l));
        if (lane) lane.push(block);
        else lanes.push([block]);
      });
      // A body without a known successor runs until the next body in its lane, or for a few years
      // (until today for recent bodies).
      lanes.forEach((lane) =>
        lane.forEach((b, i) => {
          const next = lane[i + 1]?.start;
          const hasSuccessor = b.end > b.start + 1 || Boolean(b.camera.successor);
          // Recent bodies run to today; others at most 3 years (no data on when they were dropped).
          const cap = b.start >= lastYear - 2 ? lastYear + 1 : b.start + 3;
          if (!hasSuccessor) b.end = Math.min(next ?? cap, cap);
          if (next && b.end > next) b.end = next;
        }),
      );
      return { grade, lanes };
    }).filter((r) => r.lanes.length > 0);
    return { name, rows };
  });
};

interface Props {
  cameras: CameraType[];
}

const Lineup = ({ cameras }: Props) => {
  const selectedMaker = useAtomValue(selectedMakerAtom);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const data = useMemo(() => {
    if (selectedMaker === 'ALL') return null;
    const list = cameras.filter((c) => c.maker === selectedMaker);
    if (list.length === 0) return null;
    const first = Math.min(...list.map((c) => c.year));
    const last = Math.max(new Date().getFullYear(), ...list.map((c) => c.year));
    return { first, last, groups: buildGroups(list, last) };
  }, [cameras, selectedMaker]);

  useEffect(() => {
    // Open at the newest years; older years are a scroll to the left.
    const el = scrollerRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, [data]);

  if (!data) return null;
  const { first, last, groups } = data;
  const years = Array.from({ length: last - first + 1 }, (_, i) => first + i);
  const col = (year: number) => year - first + 2; // column 1 is the label

  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Same as the sibling links on the cards: hash without a Next navigation, then scroll.
    e.preventDefault();
    const id = e.currentTarget.dataset.target ?? '';
    window.history.pushState(null, '', `#${id}`);
    window.dispatchEvent(new CustomEvent('hashchange'));
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section
      className={styles.lineup}
      aria-label='라인업'
      style={{ ['--lineup-cols' as string]: `64px repeat(${years.length}, 44px)` }}
    >
      <div className={styles.scroller} ref={scrollerRef}>
        <div className={styles.inner}>
          <div className={styles.lane}>
            <div className={styles.grade} />
            {years.map((y) => (
              <div key={y} className={styles.year} style={{ gridColumn: col(y) }}>
                {String(y).slice(2)}
              </div>
            ))}
          </div>
          {groups.map((group) => (
            <div key={group.name} className={styles.group}>
              <div className={styles.groupName}>{group.name}</div>
              {group.rows.map((row) =>
                row.lanes.map((lane, li) => (
                  <div key={`${row.grade}-${lane[0].camera.name}`} className={cx(styles.lane, { [styles.firstLane]: li === 0 })}>
                    <div className={styles.grade}>{li === 0 ? GRADE_LABELS[row.grade] : ''}</div>
                    {lane.map((b) => {
                      const id = cameraId(b.camera.maker, b.camera.name);
                      return (
                        <a
                          key={id}
                          href={`#${id}`}
                          data-target={id}
                          onClick={onClick}
                          rel='nofollow'
                          title={`${b.camera.name} (${b.camera.year})${b.camera.desc ? ` — ${b.camera.desc}` : ''}`}
                          className={cx(styles.block, styles[sensorClass(b.camera.sensor?.size)])}
                          style={{ gridColumn: `${col(b.start)} / ${col(Math.min(b.end, last + 1))}` }}
                        >
                          {b.camera.name}
                        </a>
                      );
                    })}
                  </div>
                )),
              )}
            </div>
          ))}
        </div>
      </div>
      <ul className={styles.legend}>
        {LEGEND.map(([key, label]) => (
          <li key={key}>
            <span className={styles[key]} />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Lineup;
