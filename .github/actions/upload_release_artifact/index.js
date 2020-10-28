const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

(async () => {
  try {
    // Get package version from package.json
    const { version } = JSON.parse(fs.readFileSync('./package.json'));

    // Get event object from release creation, handy for understanding what else you can do
    const event = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH));
    console.log(event);

    const octokit = github.getOctokit(process.env.GITHUB_TOKEN)
    const assetPath = `./dist/nhsuk-frontend-${version}.zip`;
    const assetName = `nhsuk-frontend-${version}.zip`;
    
    // Determine content-length for header to upload asset
    const contentLength = filePath => fs.statSync(filePath).size;

    // Setup headers for API call, see Octokit Documentation: https://octokit.github.io/rest.js/#octokit-routes-repos-upload-release-asset for more information
    const headers = { 'content-type': 'application/zip', 'content-length': contentLength(assetPath) };

    // Upload a release asset
    // API Documentation: https://developer.github.com/v3/repos/releases/#upload-a-release-asset
    // Octokit Documentation: https://octokit.github.io/rest.js/#octokit-routes-repos-upload-release-asset
    await octokit.repos.uploadReleaseAsset({
      url: event.release.upload_url,
      headers,
      name: assetName,
      file: fs.readFileSync(assetPath)
    });

  } catch (error) {
    core.setFailed(error.message);
  }
})();