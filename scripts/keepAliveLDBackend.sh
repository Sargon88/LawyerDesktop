#!/bin/bash
DATE=$(date +"%Y%m%d_%H%M%s")

while true ; do
    
    cd /home/emanuele/lawyer-desktop
    npm run develop > ../LOG/backend_$DATE.log & [ $kapid=$! ]
    
    wait $kapid

done