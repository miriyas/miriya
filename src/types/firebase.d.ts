export interface FbTimeStamp {
  nanoseconds: number;
  seconds: number;
}

export const COLLECTION = {
  IDOLS: 'idolsPage',
  CAMERAS: 'camerasPage',
  PENTAXES: 'pentaxesPage',
  COMMENTS: 'comments',
  USERS: 'users',
} as const;
