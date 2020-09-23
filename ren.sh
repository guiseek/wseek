#!/bin/bash

find libs/shared/layout/src/lib/ -depth -name "*fuse*" | \
  while IFS= read -r ent; do mv $ent ${ent%fuse*}seek${ent##*fuse}; done