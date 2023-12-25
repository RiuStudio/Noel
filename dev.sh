npm install
echo Do you want me to deploy slash commands for you? y/n

if [ "$slashanswer" == "y" ]; then
  echo Deploying slash commands
  npm run deploy
fi

node index.js



