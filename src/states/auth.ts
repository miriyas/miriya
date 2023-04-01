import { User } from 'firebase/auth';
import { atom } from 'jotai';

export const userAtom = atom<User | null>(null);
