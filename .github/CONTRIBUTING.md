## Contribution Guidelines

## Prerequisites

- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Install the long-term support (LTS) version of [Node.js](https://nodejs.org/en/), which includes NPM.
- A text editor such as [Visual Studio Code](https://code.visualstudio.com/), [Sublime](https://www.sublimetext.com/) or [Notepad++](https://notepad-plus-plus.org/)

## Beginner workflow

### Running the code

- Open terminal (Mac), or command prompt (Windows)
- Clone the repo: `git clone https://github.com/nhsuk/frontend.git frontend` and whilst in the project directory `cd frontend`, install the required npm packages with: `npm install`
- Run the project in development mode `npm run watch` and visit <a href="http://localhost:3000">http://localhost:3000</a>

### Making changes

- Make changes in your choice of text editor, save the file and refresh <a href="http://localhost:3000">http://localhost:3000</a>

#### Contributing changes

- Always make sure you have the latest code `git checkout master && git pull origin master`
- Make a feature branch, ideally in the format of `feature/summary-of-change`, `bug/summary-of-change`, `refactor/summary-of-change` with `git checkout -b feature/summary-of-change`
- Stage your changes to commit `git add .`
- Add a commit message to your commit `git commit -m "Informative commit message"`, follow our [Git styleguide](https://github.com/nhsuk/styleguides/blob/master/git.md) for writing good commit messages
- Push your changes to your branch `git push origin feature/summary-of-change`
- Visit the [GitHub project](https://github.com/nhsuk/frontend) and make a new pull request with your branch
- Fill in the required fields and request a review from a colleague

### Rebasing your branch with master

- If your branch is outdated or has any conflicts, you will need to rebase your branch with master before it can be merged
- `git pull --rebase origin master` then resolve any conflicts in your text editor (VSCode has a good feature to help with this)
- Once you've resolved conflicts, stage your changes `git add .`
- Finish rebasing and make sure there are no other conflicts `git rebase  --continue`
- Finally force push your changes to your branch `git push origin feature/summary-of-change -f`

## Git workflow

- Always make sure you have the latest code `git checkout master && git pull origin master`
- Pull requests must contain a succinct, clear summary of what the user need is driving this feature change
- Follow our [Git styleguide](https://github.com/nhsuk/styleguides/blob/master/git.md)
- Make a feature branch, ideally in the format `feature/summary-of-change`, `bug/summary-of-change`, `refactor/summary-of-change` e.g. `feature/add-login`
- Ensure your branch contains logical atomic commits before sending a pull request - follow our [Git styleguide](https://github.com/nhsuk/styleguides/blob/master/git.md)
- Pull requests are automatically tested, where applicable using [Travis CI](https://travis-ci.org/), which will report back on whether the tests still pass on your branch
- You *may* rebase your branch after feedback if it's to include relevant updates from the master branch. We prefer a rebase here to a merge commit as we prefer a clean and straight history on master with discrete merge commits for features
- Using a single emoji to start the commit message is encouraged. See the other commits in the repo for examples


