// @ts-nocheck
import * as Redis from "ioredis";

export const redis =
  process.env.NODE_ENV === "development"
    ? new Redis(process.env.REDIS_URL)
    : new Redis();