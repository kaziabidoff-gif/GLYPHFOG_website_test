import { GLYPH_PATHS, buildGlyphField, hashString } from "@/lib/glyphs";

const COLS = 7;
const ROWS = 4;
const CELL = 48;
const SCALE = 1.25;
const OFFSET = (CELL - 24 * SCALE) / 2;

/**
 * Abstract placeholder for a project with no screenshot yet. It is a visual
 * placeholder only and is never presented as a capture of the real product.
 */
export function ProjectVisual({ seed, figure }: { seed: string; figure: string }) {
  const cells = buildGlyphField({
    cols: COLS,
    rows: ROWS,
    seed: hashString(seed),
    emptyRatio: 0.35,
    accentCount: 2,
  });

  return (
    <div className="flex aspect-[7/5] items-center justify-center overflow-hidden rounded-lg border border-line bg-sunken p-6">
      <svg
        viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
        className="h-auto w-full text-ink"
        aria-hidden="true"
        focusable="false"
      >
        {cells.map((cell) =>
          cell.path === null ? null : (
            <path
              key={`${cell.col}-${cell.row}`}
              d={GLYPH_PATHS[cell.path]}
              transform={`translate(${cell.col * CELL + OFFSET} ${cell.row * CELL + OFFSET}) scale(${SCALE})`}
              fill="none"
              stroke={cell.accent ? "var(--accent)" : "currentColor"}
              strokeWidth={1.2}
              strokeLinecap="square"
            />
          ),
        )}
      </svg>
      <span className="sr-only">{figure}</span>
    </div>
  );
}
