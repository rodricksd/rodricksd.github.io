#!/bin/bash
echo "Opening preview at http://localhost:8080 — press Ctrl+C to stop"
open http://localhost:8080
python3 -m http.server 8080
