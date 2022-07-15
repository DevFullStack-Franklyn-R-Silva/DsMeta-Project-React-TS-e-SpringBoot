#!/bin/bash
echo "building ds meta"
cd ./backend
chmod +x ./.mvn
./.mvn clean build -x test