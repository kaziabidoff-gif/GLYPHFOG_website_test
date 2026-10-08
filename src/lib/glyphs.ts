/**
 * GLYPHFOG glyph language: a small set of strokes drawn in a 24x24 cell.
 * Used by the hero field and project placeholders. Deterministic on purpose,
 * so server and client always render the same composition.
 */

export const GLYPH_PATHS: readonly string[] = [
  "M5 12h14", // bar
  "M12 5v14", // post
  "M6 6v12h12", // corner
  "M18 18V6H6", // corner, inverted
  "M5 7h14M12 7v12", // T
  "M8 8h8v8H8z", // square
  "M12 6v12M6 12h12", // plus
  "M7 17l10-10", // diagonal
];

/** Small, fast seeded PRNG (mulberry32). */
export function createRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export interface GlyphCell {
  col: number;
  row: number;
  path: number | null; // index into GLYPH_PATHS, null = empty cell
  accent: boolean;
  dx: number;
  dy: number;
  rot: number;
  delay: number;
}

interface FieldOptions {
  cols: number;
  rows: number;
  seed: number;
  /** Share of cells left empty to keep negative space. */
  emptyRatio?: number;
  accentCount?: number;
}

export function buildGlyphField({
  cols,
  rows,
  seed,
  emptyRatio = 0.28,
  accentCount = 3,
}: FieldOptions): GlyphCell[] {
  const rand = createRng(seed);
  const cells: GlyphCell[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const empty = rand() < emptyRatio;
      cells.push({
        col,
        row,
        path: empty ? null : Math.floor(rand() * GLYPH_PATHS.length),
        accent: false,
        dx: Math.round((rand() - 0.5) * 36),
        dy: Math.round((rand() - 0.5) * 36),
        rot: Math.round((rand() - 0.5) * 120),
        // Settle roughly left-to-right so the resolve reads as ordering.
        delay: Math.round(col * 55 + rand() * 160),
      });
    }
  }

  const filled = cells.filter((c) => c.path !== null);
  for (let i = 0; i < accentCount && filled.length > 0; i++) {
    const pick = filled[Math.floor(rand() * filled.length)];
    pick.accent = true;
  }

  return cells;
}
