#!/bin/bash

killall keepAliveLDB*
echo killall keep alive

killall node
echo killall node


sleep 10

./keepAliveLDBackend.sh &
echo Backend Started

./keepAliveLDFrontend.sh &
echo Frontend Started