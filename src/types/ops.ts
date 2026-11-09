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

/** One day, one source, one model. Costs are estimates from the price table, not real charges. */
export interface OpsAiUsage {
  day: string; // Korean date, YYYY-MM-DD
  provider: string; // "anthropic" | "openai"
  source: string; // "claude-code" | "charr:summarize" | ...
  model: string;
  requests: number;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  costUsd: number;
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
  aiUsage?: OpsAiUsage[]; // optional: only some projects have it
}

/**
 * One project on the page. `data` with `error` = the last fetch failed and `data` is the last good
 * value from `staleSince` (kept in the frontend server's memory).
 */
export interface OpsSource {
  key: string;
  name: string;
  data?: OpsStatus;
  error?: string;
  staleSince?: string; // UTC ISO
}

/** Daily visitors (GA4 activeUsers) from miriya-server /api/ops/visitors. */
export interface VisitorDay {
  date: string; // YYYY-MM-DD, Korean time
  users: number;
}

export type VisitorSite =
  | { key: string; title: string; days: VisitorDay[]; error?: undefined }
  | { key: string; title: string; days?: undefined; error: string };

export interface TrafficRow {
  label: string;
  value: number;
}

/** One site's traffic from miriya-server /api/ops/traffic (last 7 days unless named). */
export type Traffic =
  | {
      generatedAt: string;
      realtime: number | null; // active users, last 30 minutes
      topPages: TrafficRow[];
      sources: TrafficRow[];
      newUsers: number;
      pageViews: number;
      avgEngagementSec: number;
      error?: undefined;
    }
  | { error: string };
