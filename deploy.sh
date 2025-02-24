#!/bin/bash
export NVM_DIR="/root/.nvm"
source $NVM_DIR/nvm.sh

cd /home/frontend.hnweb.site/public_html/apnaportal

git pull origin main
/root/.nvm/versions/node/v18.20.5/bin/npm install
/root/.nvm/versions/node/v18.20.5/bin/npm run build

pm2 restart frontend
cp -r dist/* /home/frontend.hnweb.site/public_html/
