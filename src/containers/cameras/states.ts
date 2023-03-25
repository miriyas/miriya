import { atom } from 'jotai';

const params = new URLSearchParams(window.location.search);
const initialMaker = params.get('maker');

export const selectedMakerAtom = atom<string>(initialMaker ?? 'ALL');
