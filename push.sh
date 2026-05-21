#!/bin/bash
cd "$(dirname "$0")"

echo "What did you change? (press Enter for 'update website')"
read -r message
message="${message:-update website}"

git add -A
git commit -m "$message"
git push origin main

echo "Done! Your changes are live at https://rodricksd.github.io"
