// importing packages for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// self contained inquirer module
const prompt = inquirer.createPromptModule();

// list of questions to ask the user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Please enter a title (Required): ',
        validate: function(titleInput){
            if(titleInput){
                return true;
            } else {
                console.log('Please enter a valid title!');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'description',
        message:'Please enter a description for your project (Required): ',
        validate: function(descriptionInput){
            if(descriptionInput){
                return true;
            } else {
                console.log('Please enter a valid description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message:'Please enter the application installation instruction (Required): ',
        validate: function(installationInput){
            if(installationInput){
                return true;
            } else {
                console.log('Please enter a valid installation instruction!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message:'Please enter usage instruction for the application (Required): ',
        validate: function(usageInput){
            if(usageInput){
                return true;
            } else {
                console.log('Please enter the usage instruction!');
                return false;
            }
        }
    },
    {
        type:'list',
        name:'license',
        message: 'Please choose a license type from the list below (Default: GNU General Public License family): ',
        // list of licenses acquired from https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
        choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artictic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clasue Clear License',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck you Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser Genereal Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla PublicLicense 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'Universiity of Illinois/NCSA Open Source License',
            'The Unilicense',
            'zLib License'
        ],
        deafult: 'GNU General Public License v3.0'
    },
    {
        input:'input',
        name:'contribution',
        message: 'Please enter the contribution guidelines for your project (Required): ',
        validate: function(contributionInput){
            if(contributionInput){
                return true;
            } else {
                console.log('Please enter valid contribution guidelines!');
                return false;
            }
        }
    }, 
    {
        input:'input',
        name:'tests',
        message:'Please enter the test instructions for your project (Required): ',
        validate:function(testsInput){
            if(testsInput){
                return true; 
            } else {
                console.log('Please enter valid test instructions!');
                return false;
            }
        }
    },
    {
        input:'input',
        name:'github',
        message:'Please enter your GitHub user name (Required): ',
        validate:function(githubInput){
            if(githubInput){
                return true;
            } else {
                console.log('Please enter a valid GitHub username!');
                return false;
            }
        }
    },
    {
        input:'input',
        name:'email',
        message:'Please enter your email (Required): ',
        validate:function(emailInput){
            if(emailInput){
                return true;
            } else {
                console.log('Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        input:'input',
        name:'reachOut',
        message:'Please enter the instructions for how others can reach out to you about your project (Required): ',
        validate:function(reachOutInput){
            if(reachOutInput){
                return true;
            } else {
                console.log('Please enter valid intructions for reaching out to you!');
                return false;
            }
        }
    }
];
   
// function writes README file to the dist folder
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}.md`, data, err =>{
            if(err){
                reject(err);
                return;
            } 
            resolve({
                message: `${fileName} created successfully!`
            });
        });
    });    
};

// function to initialize app
function init() {
    prompt(questions)
        .then(questionAnswers => {
            return generateMarkdown(questionAnswers);
        })
        .then(data => {
            return writeToFile('README', data);
        })
        .then (response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
}

// // Function call to initialize app
// init();
