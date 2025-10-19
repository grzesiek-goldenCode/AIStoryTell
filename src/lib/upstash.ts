import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const redis = Redis.fromEnv();

// 3 request per day
export const storyLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "1 d"),
  analytics: true,
});
