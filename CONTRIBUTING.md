# How to Contribute

Found a bug? See something we can do better? Let us know by [opening an issue](https://github.com/cleverfranke/cf-kyt-starter-universal-redux/issues) on Github.

### Submitting a PR

Please make sure all PRs are:

1. linted (npm run lint)
2. tested (npm run test)
3. Connected to an issue

### Testing local starter-kyt changes

To test setting up/installing local starter-kyts, you need to specify the `--local-path` option. This allows you to install a starter-kyt locally by copying rather than cloning from git. Now you can make changes to the codebase in your own branch or fork and init a new app locally to test if the starter-kyt is working as intended.

`kyt-cli setup -d my-kyt-app --local-path ./cf-kyt-starter-universal-redux/`
