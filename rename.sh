#!/bin/bash
FILES=./photos/*

i=1

for f in $FILES
do
  echo "Processing $f para \"$i.jpg\" file..."
  mv $f "$i.jpg"
  ((i=i+1))
  # take action on each file. $f store current file name
#   echo $f
done