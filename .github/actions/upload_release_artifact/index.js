const core = require('@actions/core');
const { GitHub } = require('@actions/github');
const fs = require('fs');
const { version } = require('./package.json');

(async () => {
  try {
    const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH));
    console.log(event);

    // Get authenticated GitHub client (Ocktokit): https://github.com/actions/toolkit/tree/master/packages/github#usage
    const github = new GitHub(process.env.GITHUB_TOKEN);
    const assetPath = `./dist/nhsuk-frontend-${version}.zip`;
    const assetName = `nhsuk-frontend-${version}.zip`;
    
    // Determine content-length for header to upload asset
    const contentLength = filePath => fs.statSync(filePath).size;

    // Setup headers for API call, see Octokit Documentation: https://octokit.github.io/rest.js/#octokit-routes-repos-upload-release-asset for more information
    const headers = { 'content-type': 'application/zip', 'content-length': contentLength(assetPath) };

    // Upload a release asset
    // API Documentation: https://developer.github.com/v3/repos/releases/#upload-a-release-asset
    // Octokit Documentation: https://octokit.github.io/rest.js/#octokit-routes-repos-upload-release-asset
    await github.repos.uploadReleaseAsset({
      url: event.release.upload_url,
      headers,
      name: assetName,
      file: fs.readFileSync(assetPath)
    });

  } catch (error) {
    core.setFailed(error.message);
  }
})();