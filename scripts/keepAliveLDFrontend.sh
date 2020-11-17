#!/bin/bash
DATE=$(date +"%Y%m%d_%H%M%s")

while true ; do
    
    cd /home/emanuele/lawyerdesktop_frontend
    npm start > ../LOG/frontend_$DATE.log & [ $reactpid=$! ]

    sleep 30
    
    wait $reactpid

done