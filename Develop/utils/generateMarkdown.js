// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return ''
  } 
  return '- [License](#license)'
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }
  return `## License

  This application is covered under the ${license} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  
  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  
  ## Installation

  You will need to install the following for this app to run:
  ${data.install}
  
  ## Usage

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing

  Contributors will need to follow the following guidelines: 

   ${data.contributing}

  ## Tests

   Run the following in the CLI to test the application
   
   ${data.tests}

   ## Questions

   For additional quesitons please contact me via email at ${data.email}
   
   Click here to view my GitHub profile 
   https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
