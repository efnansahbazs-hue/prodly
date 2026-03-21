/**
 * Token limits per user tier — enforced before AI calls.
 */

export type UserTier = "free" | "premium" | "studio";

export interface TokenLimits {
  maxOutput: number;
  maxInput: number;
  historyMessages: number;
}

const LIMITS: Record<UserTier, TokenLimits> = {
  free:    { maxOutput: 400,  maxInput: 300,  historyMessages: 0 },
  premium: { maxOutput: 800,  maxInput: 600,  historyMessages: 20 },
  studio:  { maxOutput: 1500, maxInput: 1000, historyMessages: 999 },
};

export function getTokenLimits(tier: UserTier): TokenLimits {
  return LIMITS[tier];
}

/** Truncate message history to allowed count (most recent kept) */
export function truncateHistory<T>(messages: T[], tier: UserTier): T[] {
  const { historyMessages } = LIMITS[tier];
  if (historyMessages === 0) return [];
  if (messages.length <= historyMessages) return messages;
  return messages.slice(-historyMessages);
}
