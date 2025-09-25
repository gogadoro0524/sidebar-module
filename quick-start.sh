#!/bin/bash

echo "🚀 Setting up Sidebar Module..."

# Install module dependencies
echo "📦 Installing module dependencies..."
npm install

# Build the module
echo "🔨 Building module..."
npm run build

# Install example dependencies
echo "📦 Installing example app dependencies..."
cd example
npm install

# Start the example app
echo "✨ Starting example app..."
echo "👉 Open http://localhost:3000 in your browser"
npm run dev