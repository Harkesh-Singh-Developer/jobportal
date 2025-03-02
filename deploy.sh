#!/bin/bash
export NVM_DIR="/root/.nvm"
source $NVM_DIR/nvm.sh

APP_DIR="/home/frontend.hnweb.site/public_html/apnaportal"
NODE_VERSION="v22.11.0"
NPM_BIN="/root/.nvm/versions/node/$NODE_VERSION/bin/npm"

cd $APP_DIR

echo "Pulling latest changes from GitHub..."
git reset --hard origin/main
git pull origin main

echo "Clearing node_modules and cache..."
rm -rf node_modules package-lock.json

echo "Installing dependencies..."
$NPM_BIN install

echo "Removing old build files..."
rm -rf dist .next build public

echo "Building application..."
$NPM_BIN run build

echo "Restarting PM2 with full reload..."
pm2 restart frontend --update-env

echo "Deployment completed successfully!"
