#!/bin/bash
# Kill any existing server on port 8080
existing=$(lsof -t -i:8080 2>/dev/null)
if [ -n "$existing" ]; then
  kill -9 $existing 2>/dev/null
  sleep 1
fi
echo "Opening preview at http://localhost:8080 — press Ctrl+C to stop"
open http://localhost:8080
python3 -m http.server 8080
