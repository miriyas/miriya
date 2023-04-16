import { ReactNode } from 'react';
import { atom } from 'jotai';

export interface Alert {
  title?: string;
  message: string | ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

export const alertState = atom<Alert | undefined>(undefined);
