#!/bin/bash
echo 'Deploying'

# Sort of install robotjs globally
sudo cp -rf node_modules/robotjs /usr/lib/node_modules/robotjs

sudo cp files/typeu /usr/bin/
sudo cp files/typeu.js /usr/etc/