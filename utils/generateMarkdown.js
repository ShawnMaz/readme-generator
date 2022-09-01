// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseKeyword = license.split(' : ');
  return`
    [![License: ${licenseKeyword[1]}](https://img.shields.io/badge/${licenseKeyword[1]}.svg)]
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseKeyword = license.split(' : ');
  return `
    ## License
    This application is available under the ${licenseKeyword[0]} license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
