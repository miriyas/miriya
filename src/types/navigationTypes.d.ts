type NavigationAPIType = 'reload' | 'push' | 'replace' | 'traverse';

interface NavigationDestination {
  url: string;
  key: string;
  id: string;
  index: number;
  sameDocument: boolean;
}

interface NavigationInterceptOptions {
  handler?: () => unknown;
  focusReset?: 'after-transition' | 'manual';
  scroll?: 'after-transition' | 'manual';
}

export interface NavigateEvent extends Event {
  navigationType: NavigationAPIType;
  destination: NavigationDestination;
  canIntercept: boolean;
  userInitiated: boolean;
  hashCahnge: boolean;
  signal: AbortSignal;
  formData?: FormData;
  downloadRequest?: string;
  info: unknown;
  intercept: (options?: NavigationInterceptOptions) => void;
  scroll: () => void;
}

interface NavigationEventMap {
  navigate: NavigateEvent;
}

interface NavigationHistoryEntry extends EventTarget {
  url?: string;
  key: string;
  id: string;
  index: number;
  sameDocument: boolean;

  getState(): unknown;
}

interface NavigationResult {
  commited: Promise<NavigationHistoryEntry>;
  finished: Promise<NavigationHistoryEntry>;
}

interface EventListenerOptions {
  capture?: boolean;
}

interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}

interface EventListener {
  (evt: Event): void;
}

interface EventListenerObject {
  handleEvent(object: Event): void;
}

type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface Navigation extends EventTarget {
  addEventListener<K extends keyof NavigationEventMap>(
    type: K,
    listener: (this: Navigation, ev: NavigationEventMap[K]) => unknown,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;

  entries(): NavigationHistoryEntry[];
  currentEntry?: NavigationHistoryEntry;
  traverseTo(key: string): NavigationResult;
}

declare let navigation: Navigation;
