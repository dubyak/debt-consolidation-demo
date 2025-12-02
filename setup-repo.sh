#!/bin/bash
# Script to create and push the repo once GitHub CLI is installed

cd /Users/wkendall/Documents/GitHub/business-partner-demo/debt-consolidation-demo

echo "Step 3: Authenticating with GitHub..."
gh auth login

echo "Step 4: Creating repo and pushing..."
gh repo create debt-consolidation-demo --public --source=. --remote=origin --push

echo "Done! Your repo is at: https://github.com/$(gh api user --jq .login)/debt-consolidation-demo"
