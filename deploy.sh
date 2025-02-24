#!/bin/bash
cd /home/frontend.hnweb.site/public_html/apnaportal
git pull origin main  # Pull latest changes
npm install           # Install dependencies (optional but recommended)
npm run build         # Rebuild the project
systemctl restart lsws  # Restart OpenLiteSpeed for changes to reflect
