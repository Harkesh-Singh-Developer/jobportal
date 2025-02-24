#!/bin/bash
cd /home/frontend.hnweb.site/public_html/apnaportal

git pull origin main
/usr/bin/npm install
/usr/bin/npm run build

pm2 restart frontend
cp -r dist/* /home/frontend.hnweb.site/public_html/
