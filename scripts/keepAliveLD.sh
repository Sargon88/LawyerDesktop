#!/bin/bash

killall node
echo killall node

DATE=$(date +"%Y%m%d_%H%M")

while true ; do
    
    cd /home/emanuele/lawyer-desktop
    npm run develop >> ../LOG/backend_$DATE.log & $stpid=$!
    
    wait $stpid

done

while true ; do
    
    cd /home/emanuele/lawyerdesktop_frontend
    npm start >> ../LOG/frontend_$DATE.log & $reactpid=$!
    
    wait $reactpid

done