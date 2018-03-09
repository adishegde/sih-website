# sih-website

Website for SIH-2018.

## Installing

1.  Clone the repository and `cd` to the root of the repo.
2.  Run `yarn install` to install necessary packages.
3.  Run `yarn start` to start the app in development mode.

The project uses [create-react-app](https://github.com/facebook/create-react-app).

## Contributing

### Workflow

1.  Clone the repo using `git clone`.
2.  Make a new branch and make the required changes. Use `git checkout -b <Branch Name>` to create and checkout the new branch.
3.  Commit the changes (Multiple commits if changes are large) using `git commit`.
4.  Push the branch onto the repository using `git push --set-upstream origin <Branch Name>` the first time your pushing the branch.
5.  Create a pull request from your branch to the `develop` branch after you have made all the required contributions in the particular branch.
6.  After the PR has been reviewed it will be merged to master.

### Branch Names

1.  Use '-' seperated names for branches.
2.  Use 'feature' prefix for branches that add new features. e.g. `feature-login-page` for a branch that aims to add login page functionality.
3.  Use 'bugfix' prefix for branches that fixes a bug. e.g. `bugfix-wrong-requests` to fix a bug related to incorrect requests.
4.  The `develop` branch contains the latest code. It might not work perfectly but contains new features and bug fixes.
5.  The `master` branch contains the stable code. It should work as expected.

### Commits

1.  Always use the imperative to commit i.e. Use `Add loginPage` over `Added loginPage` or `Adds loginPage`.
2.  Give a short commit message but explain what the commit does in the body. For feature branches this can include a list of changes made in the commit and for a bugfix it can be the bug that is fixed.
3.  A commit should encapsulate a single change. The addition of a single feature and its tests can be part of a single commit. But split major changes across commits.

Note: pre-commit hooks for prettier are present to maintain consistency in code styling.
