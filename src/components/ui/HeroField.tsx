import { GLYPH_PATHS, buildGlyphField } from "@/lib/glyphs";

const COLS = 8;
const ROWS = 7;
const CELL = 56;
const SCALE = 1.5; // glyphs are authored on a 24px grid
const GLYPH_OFFSET = (CELL - 24 * SCALE) / 2;
const PAD = 28; // room for coordinate labels
const WIDTH = COLS * CELL + PAD;
const HEIGHT = ROWS * CELL + PAD;

const cells = buildGlyphField({ cols: COLS, rows: ROWS, seed: 20260, accentCount: 3 });
const colLabels = "ABCDEFGH".split("");

/**
 * Signature visual: complexity -> structure -> clarity.
 * Glyph marks start displaced and faint, then settle onto a ruled grid.
 * The settled composition is the base state, so it is complete without
 * animation (reduced motion, no JS, print).
 */
export function HeroField() {
  return (
    <figure className="m-0">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full text-ink"
        aria-hidden="true"
        focusable="false"
      >
        <g transform={`translate(${PAD} ${PAD})`}>
          <g className="glyph-guides" stroke="var(--line-strong)" strokeWidth="1">
            {Array.from({ length: COLS + 1 }, (_, i) => (
              <line key={`v${i}`} x1={i * CELL} y1={0} x2={i * CELL} y2={ROWS * CELL} />
            ))}
            {Array.from({ length: ROWS + 1 }, (_, i) => (
              <line key={`h${i}`} x1={0} y1={i * CELL} x2={COLS * CELL} y2={i * CELL} />
            ))}
          </g>

          {cells.map((cell) =>
            cell.path === null ? null : (
              <g
                key={`${cell.col}-${cell.row}`}
                transform={`translate(${cell.col * CELL + GLYPH_OFFSET} ${cell.row * CELL + GLYPH_OFFSET}) scale(${SCALE})`}
              >
                <g
                  className="glyph-cell"
                  style={
                    {
                      "--dx": `${cell.dx}px`,
                      "--dy": `${cell.dy}px`,
                      "--rot": `${cell.rot}deg`,
                      "--delay": `${cell.delay}ms`,
                    } as React.CSSProperties
                  }
                >
                  <path
                    d={GLYPH_PATHS[cell.path]}
                    fill="none"
                    stroke={cell.accent ? "var(--accent)" : "currentColor"}
                    strokeWidth={cell.accent ? 1.5 : 1.2}
                    strokeLinecap="square"
                  />
                </g>
              </g>
            ),
          )}
        </g>

        <g
          fill="var(--ink-muted)"
          style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em" }}
        >
          {colLabels.map((label, i) => (
            <text key={label} x={PAD + i * CELL + CELL / 2} y={14} textAnchor="middle">
              {label}
            </text>
          ))}
          {Array.from({ length: ROWS }, (_, i) => (
            <text key={i} x={10} y={PAD + i * CELL + CELL / 2 + 3} textAnchor="middle">
              {i + 1}
            </text>
          ))}
        </g>
      </svg>
      <figcaption className="text-label mt-4 text-muted">
        Fig. 00 — Complexity → Structure → Clarity
      </figcaption>
    </figure>
  );
}
