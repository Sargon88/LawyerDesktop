
#!/bin/bash
killall node
echo killall node

while true ; do
    
    cd /home/emanuele/lawyer-desktop
    npm run develop & $stpid=$!
    
    wait $stpid

done

while true ; do
    
    cd /home/emanuele/lawyerdesktop_frontend
    npm start & $reactpid=$!
    
    wait $reactpid

done