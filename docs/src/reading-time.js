const WORD_PATTERN = /[\p{L}\p{M}]+|\p{N}+/gu;
const DEFAULT_WORDS_PER_MINUTE = 200;

/**
 * Count contiguous Unicode letter/mark or number sequences in a text.
 * Punctuation is treated as a separator, including apostrophes and decimals.
 */
export function countWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  return text.match(WORD_PATTERN)?.length ?? 0;
}

/**
 * Estimate reading time in whole minutes, rounded up.
 */
export function estimateReadingMinutes(text, wordsPerMinute = DEFAULT_WORDS_PER_MINUTE) {
  if (!Number.isFinite(wordsPerMinute) || wordsPerMinute <= 0) {
    throw new RangeError("wordsPerMinute must be a positive finite number");
  }

  const words = countWords(text);
  return words === 0 ? 0 : Math.ceil(words / wordsPerMinute);
}
