#!/bin/bash
cd /home/kavia/workspace/code-generation/cake-shop-customer-experience-app-126201/cake_shop_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

