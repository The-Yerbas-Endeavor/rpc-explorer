#!/usr/bin/env bash
set -euo pipefail

mkdir -p "$HOME/.yerbascore"

cp /app/yerbas.conf "$HOME/.yerbascore/yerbas.conf"

exec yerbasd -printtoconsole
