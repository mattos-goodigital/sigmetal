#!/usr/bin/env bash
set -uo pipefail

BASE="https://sigmetal.lovable.app"
count=0; ok=0; fail=0

while IFS= read -r json; do
  count=$((count+1))
  url=$(python3 -c "import json,sys; print(json.load(open(sys.argv[1])).get('url',''))" "$json")
  if [ -z "$url" ]; then
    echo "[SKIP] sem url: $json"
    fail=$((fail+1)); continue
  fi
  out="${json%.asset.json}"
  if curl -fsSL "${BASE}${url}" -o "$out"; then
    echo "[OK]   $out"; ok=$((ok+1))
  else
    echo "[FAIL] ${BASE}${url}"; fail=$((fail+1))
  fi
done < <(find src -iname "*.asset.json")

echo ""
echo "Total: $count | Baixados: $ok | Falhas: $fail"
