#!/bin/bash
# Fix npm directory permissions
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'

# Add npm-global to PATH if not already there
if [[ ":$PATH:" != *":$HOME/.npm-global/bin:"* ]]; then
    echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.zshrc
    source ~/.zshrc
fi

if [ ! -f "package.json" ]; then
    echo "Initializing project..."
    npm install
fi
npm start
