#!/bin/bash

# ============================================
# Darshil Shah Portfolio - GitHub Pages Deploy Script
# ============================================
# This script automates the deployment process to GitHub Pages
# Usage: bash deploy.sh

echo "🚀 Starting GitHub Pages Deployment..."
echo "======================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Visit: https://git-scm.com/download"
    exit 1
fi

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ This directory is not a git repository."
    echo ""
    echo "To initialize a git repository, run:"
    echo "  git init"
    echo "  git remote add origin https://github.com/YOUR-USERNAME/darshil-portfolio.git"
    exit 1
fi

# Get current git status
echo ""
echo "📋 Current Git Status:"
git status

# Ask for commit message
echo ""
echo "Enter commit message (or press Enter for default):"
read -p "> " commit_message

# Use default if empty
if [ -z "$commit_message" ]; then
    commit_message="Update portfolio: $(date +%Y-%m-%d\ %H:%M:%S)"
fi

# Add all files
echo ""
echo "📁 Adding files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "$commit_message"

if [ $? -ne 0 ]; then
    echo "❌ Commit failed. Check your git configuration."
    exit 1
fi

# Push to GitHub
echo "🔼 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "Your portfolio will be live in 2-5 minutes at:"
    echo "https://$(git config user.name | tr ' ' '-' | tr '[:upper:]' '[:lower:]').github.io/darshil-portfolio/"
    echo ""
    echo "🔗 Repository: $(git config --get remote.origin.url)"
else
    echo "❌ Push failed. Check your internet connection and GitHub credentials."
    exit 1
fi

echo ""
echo "✨ Done! Your portfolio is being deployed..."
