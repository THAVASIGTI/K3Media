#!/usr/bin/env bash
# Builds the Jaintt Constructions website (a separate Next.js project) as a static demo
# served from k3media.in/demo/jainttc/, and copies it into public/demo/jainttc.
#
# The jainttc project itself is never modified: it is copied to a scratch folder, given a
# static-export config with a /demo/jainttc base path, and built there.
#
# Usage: scripts/build-jainttc-demo.sh [path-to-jainttc]   (default /home/tmt/pysys/jainttc)
set -euo pipefail

SRC="${1:-/home/tmt/pysys/jainttc}"
BASE="/demo/jainttc"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public$BASE"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "→ Copying $SRC"
rsync -a --exclude node_modules --exclude .next --exclude out --exclude .git \
  --exclude .claude --exclude .taste-skill --exclude .img2threejs --exclude source-images \
  "$SRC/" "$WORK/"
# Hard links: instant and no extra disk (Turbopack refuses a symlinked node_modules).
cp -al "$SRC/node_modules" "$WORK/node_modules"

echo "→ Static export config (base path $BASE)"
cat > "$WORK/next.config.ts" <<EOF
import type { NextConfig } from "next";

// Demo build for k3media.in$BASE: static files only, so no server redirects or image optimisation.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "$BASE",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
EOF

# next/image and <video> don't add the base path to hand-written public paths.
echo "→ Prefixing /img and /video paths"
grep -rlE "[\"'\`(]/(img|video)/" "$WORK/src" | while read -r f; do
  sed -i -E "s#([\"'\`(])/(img|video)/#\1$BASE/\2/#g" "$f"
done

# Static export can't use Cache Components, so drop its one route option ("instant").
grep -rlE "^export const instant = " "$WORK/src/app" | xargs -r sed -i -E "/^export const instant = /d"

echo "→ Building"
(cd "$WORK" && npx next build)

echo "→ Copying output to public$BASE"
rm -rf "$DEST"
mkdir -p "$DEST"
rsync -a "$WORK/out/" "$DEST/"
# Demo copy of a client's real site: keep it out of search results (no duplicate of their domain).
find "$DEST" -name "*.html" -exec sed -i 's#<head>#<head><meta name="robots" content="noindex, nofollow"/>#' {} +
du -sh "$DEST"
echo "✓ Demo ready at $BASE/"
