// https://developer.chrome.com/docs/web-platform/view-transitions/#working-with-frameworks

import { flushSync } from 'react-dom';

import { TRANSITIONS, TransitionTypes } from '@/types/transitions.d';

export const transitionHelper = (updateDOM: () => Promise<void> | void) => {
  if (!document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});
    const ready = Promise.reject(Error('View transitions unsupported'));

    // Avoid spamming the console with this error unless the promise is used.
    ready.catch(() => {});

    return {
      ready,
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    };
  }

  return document.startViewTransition(updateDOM);
};

export const assignTransition = (element: HTMLElement | null | undefined, name: TransitionTypes) => {
  element?.style.setProperty('view-transition-name', name);
};

export const callTransition = (
  startElement: HTMLElement | null,
  endElement: HTMLElement | null,
  transitionName: TransitionTypes,
  callback: () => void,
) => {
  if (!startElement || !endElement) return;

  assignTransition(startElement, transitionName);
  assignTransition(endElement, TRANSITIONS._);
  transitionHelper(() => {
    flushSync(() => {
      assignTransition(startElement, TRANSITIONS._);
      assignTransition(endElement, transitionName);
      callback();
    });
  }).finished.finally(() => {
    assignTransition(startElement, TRANSITIONS._);
    assignTransition(endElement, TRANSITIONS._);
  });
};
