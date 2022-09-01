// creates the license badge
function renderLicenseBadge(license) {
  const licenseKeyword = license.split(' : ');
  return`
  ![License: ${licenseKeyword[1]}](https://img.shields.io/static/v1?label=license&message=${licenseKeyword[1]}&color=green)
  `;
}

// creates the license section
function renderLicenseSection(license) {
  const licenseKeyword = license.split(' : ');
  return `
  ## License
  This application is available under the ${licenseKeyword[0]} license.
  `;
}

// generates the README markdown file's content
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions about the project, please don't hesitate to reach out.
  * Link to my Github page : [${data.github}](https://github.com/${data.github})
  * Email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
