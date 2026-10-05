#!/usr/bin/env bash
# Live status of the K3 Media website build workflow. Usage: ./status.sh   (ONCE=1 ./status.sh for a single snapshot)
WF=/home/tmt/.claude/projects/-home-tmt-pysys-k3web/7137b1db-0c34-479f-9b0f-b7874c1a2710/subagents/workflows/wf_b20ff2a5-6c6
ROOT=/home/tmt/pysys/k3web
STAGES=("1 Research|ref:|images:|rules:" "2 Design|design:" "3 Foundation|build:foundation" \
        "4 Sections|plan:|section:" "5 Integrate|integrate:" "6 Review|review:" "7 Fix|fix:")
while true; do
  [ -z "$ONCE" ] && clear
  echo "K3 Media build — live status  ($(date +%H:%M:%S))   [Ctrl+C to exit]"
  echo "-------------------------------------------------------------------"
  started=$(cat "$WF"/agent-*.meta.json 2>/dev/null | grep -oE '"description":"[^"]*"' | cut -d'"' -f4)
  for i in "${!STAGES[@]}"; do
    name=${STAGES[$i]%%|*}; pat=${STAGES[$i]#*|}
    s=$(echo "$started" | grep -cE "^($pat)")
    later=0
    for j in "${!STAGES[@]}"; do [ $j -gt $i ] && echo "$started" | grep -qE "^(${STAGES[$j]#*|})" && later=1; done
    if [ "$s" -eq 0 ]; then st="   waiting"; elif [ $later -eq 1 ]; then st=" ✅ done ($s agents)"; else st=" ⏳ running ($s agents)"; fi
    printf "%-14s %s\n" "$name" "$st"
    [ "$s" -eq 0 ] && continue
    echo "$started" | grep -E "^($pat)" | while read -r a; do
      f=$(grep -l "\"description\":\"$a\"" "$WF"/agent-*.meta.json | head -1); j=${f%.meta.json}.jsonl
      age=$(( $(date +%s) - $(stat -c %Y "$j" 2>/dev/null || date +%s) ))
      if [ $later -eq 1 ] || [ $age -gt 90 ]; then mark="✅"; else mark="⏳"; fi
      printf "    %s %-40s (last activity %ss ago)\n" "$mark" "$a" "$age"
    done
  done
  echo "-------------------------------------------------------------------"
  echo "DESIGN.md: $( [ -f $ROOT/DESIGN.md ] && echo ✅ || echo — )   components built: $(find $ROOT/src/components -name '*.tsx' 2>/dev/null | wc -l)"
  echo "Dev server: http://localhost:3100  (HTTP $(curl -s -o /dev/null -w '%{http_code}' http://localhost:3100))"
  [ -n "$ONCE" ] && break; sleep 3
done
