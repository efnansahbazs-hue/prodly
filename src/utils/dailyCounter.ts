/**
 * Daily usage counter — tracks questions per user per day.
 * Uses localStorage until Supabase user_usage table is connected.
 */

export type UserTier = "free" | "premium" | "studio";

const DAILY_LIMITS: Record<UserTier, number> = {
  free: 5,
  premium: 20,
  studio: 35,
};

interface UsageData {
  date: string;
  used: number;
  bonus: number;
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function getUsage(userId: string): UsageData {
  const raw = localStorage.getItem(`prodly_usage_${userId}`);
  if (!raw) return { date: todayKey(), used: 0, bonus: 0 };
  const data: UsageData = JSON.parse(raw);
  // Reset if new day
  if (data.date !== todayKey()) return { date: todayKey(), used: 0, bonus: data.bonus };
  return data;
}

function setUsage(userId: string, data: UsageData) {
  localStorage.setItem(`prodly_usage_${userId}`, JSON.stringify(data));
}

export function getRemainingQuestions(userId: string, tier: UserTier): number {
  const usage = getUsage(userId);
  const limit = DAILY_LIMITS[tier] + usage.bonus;
  return Math.max(0, limit - usage.used);
}

export function canAsk(userId: string, tier: UserTier): boolean {
  return getRemainingQuestions(userId, tier) > 0;
}

export function recordQuestion(userId: string): void {
  const usage = getUsage(userId);
  usage.used += 1;
  setUsage(userId, usage);
}

export function addBonusQuestions(userId: string, count: number): void {
  const usage = getUsage(userId);
  usage.bonus += count;
  setUsage(userId, usage);
}

export function getDailyLimit(tier: UserTier): number {
  return DAILY_LIMITS[tier];
}
