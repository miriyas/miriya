// Ops status JSON, version 1 (spec: ~/work/charr/docs/ops-status.md).
// Every project (charr, the miriya server, ...) returns this shape for miriya.net/ops.

export type OpsLevel = 'ok' | 'warn' | 'error';

export interface OpsMetric {
  key: string;
  label: string;
  value: number;
  unit: string;
  hint?: string;
  level?: OpsLevel;
}

export interface OpsRun {
  job: string;
  source: string;
  startedAt: string; // UTC ISO
  finishedAt: string | null; // null = still running
  ok: boolean | null;
  summary: string | null;
  error: string | null;
}

export interface OpsJob {
  name: string;
  label: string;
  schedule: string | null;
  status: OpsLevel;
  note: string | null;
  lastRun: OpsRun | null;
}

export interface OpsStatus {
  version: 1;
  project: string;
  title: string;
  url: string;
  adminUrl: string | null;
  generatedAt: string; // UTC ISO
  status: OpsLevel;
  metrics: OpsMetric[];
  jobs: OpsJob[];
  runs: OpsRun[];
}

/** One panel on the page: the data, or why it could not be read. */
export type OpsSource = { name: string; data: OpsStatus; error?: undefined } | { name: string; data?: undefined; error: string };
