#!/usr/bin/env bash
# Usage: ./scripts/clean-narration.sh assets/audio/being-sheeo-02-narration.m4a
# Converts narration audio to mono MP3, trims silence, normalizes loudness.
set -euo pipefail

INPUT="$1"
BASENAME="${INPUT%.*}"
OUTPUT="${BASENAME}.mp3"

if [[ "$INPUT" == "$OUTPUT" ]]; then
  echo "Input is already .mp3 — nothing to do." >&2
  exit 1
fi

echo "Processing: $INPUT → $OUTPUT"

ffmpeg -y -i "$INPUT" \
  -ac 1 \
  -ar 48000 \
  -af "silenceremove=start_periods=1:start_duration=0.3:start_threshold=-45dB:stop_periods=-1:stop_duration=1.5:stop_threshold=-45dB,loudnorm=I=-16:LRA=11:TP=-1.5" \
  -codec:a libmp3lame \
  -b:a 128k \
  "$OUTPUT"

DURATION=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$OUTPUT")
DISPLAY=$(echo "$DURATION" | awk '{m=int($1/60); s=int($1%60); printf "%d:%02d", m, s}')
echo "Done. Duration: $DISPLAY → $OUTPUT"
