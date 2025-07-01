#!/bin/sh
set -e

CURRENT_BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
CURRENT_VERSION=$(npm run version --silent --workspace nhsuk-frontend)

BRANCH_NAME="preview-$CURRENT_BRANCH_NAME"
VERSION="$CURRENT_VERSION-$CURRENT_BRANCH_NAME"

# Build the package as normal
echo "✨ Install and build branch preview"
npm install --silent
npm run build --workspace nhsuk-frontend
echo

# Check if there are files that need to be commited
if [[ -n $(git status --porcelain) ]]; then
  echo "⚠️ You have unstaged files, please commit these and then try again."
  exit 1
fi

# Remove local branch if it already exists
if [ $(git branch --list $BRANCH_NAME) ]; then
  echo "⚠️ Cleaning up branch $BRANCH_NAME that already exists."
  git branch -D $BRANCH_NAME
fi

# Work on the new branch
git checkout -b $BRANCH_NAME

# npm will try to install dev, optional and peer dependencies
# when installing from a Git repository, which will error when
# looking for our local only `@nhsuk/*` workspace packages
echo
echo "✍️ Remove dev dependencies"
npm pkg delete devDependencies --workspace nhsuk-frontend

echo "✍️ Update package version"
echo

# Append branch name to npm package version if not already added
npm version $VERSION --allow-same-version --no-git-tag-version --silent --workspace nhsuk-frontend
git add packages/nhsuk-frontend/package.json
git add package-lock.json

echo
echo "✍️ Force commit package"
git add --force packages/nhsuk-frontend/dist/
git commit --allow-empty -m "Preview NHS.UK frontend 'v$VERSION' to '$BRANCH_NAME' for testing"

# Create a local branch containing the packages/nhsuk-frontend directory
export FILTER_BRANCH_SQUELCH_WARNING=1
echo
echo "✨ Filter the branch to only the packages/nhsuk-frontend/ directory..."
git filter-branch --force --subdirectory-filter packages/nhsuk-frontend

# Force the push of the branch to the remote Github origin
git push origin $BRANCH_NAME:$BRANCH_NAME --force --quiet

echo
echo "⚠️ Branch pushed to '$BRANCH_NAME', do not edit this by hand."

git checkout -

BRANCH_COMMIT_SHA=$(git rev-parse --short $BRANCH_NAME)

echo
echo "✅ Success! To install the branch preview, run:"
echo "npm install --save github:nhsuk/nhsuk-frontend#$BRANCH_COMMIT_SHA"
