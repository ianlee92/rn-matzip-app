const numbers = {
  // 30분 - 3분 = 27분
  ACCESS_TOKEN_REFRESH_TIME: 1000 * 60 * 30 - 1000 * 60 * 3,
} as const;

export {numbers};
