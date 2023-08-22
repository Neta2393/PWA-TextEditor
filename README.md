# PWA-TextEditor

![License Badge](https://img.shields.io/badge/license-MIT-green) 

## Description

Text Editor that can be used on and offline and console logs information that is input. It utilizes db, Webpack, PWA and is locally cached. The app is deployed on Heroku at: https://benetheapwatexteditor-ceb32b8b6a4e.herokuapp.com/
Github Repo: https://github.com/Neta2393/PWA-TextEditor



## Table of Contents:
  * [User-Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Screenshots](#screenshots)
  * [Sources](#sources)
  * [Challenges](#challenges)
  * [Tests](#tests)
  * [Contribute](#contribute)
  * [GitHub](#github)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation

To install the code I began by cloning the starter code that was provided


## Screenshots
![Alt text](<Images/Screenshot (41).png>)

![Alt text](<Images/Screenshot (40).png>)


## Sources
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps

https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/

https://stackoverflow.com/questions/59561657/how-can-i-ignore-dist-folder-in-gitignore-file

https://docs.npmjs.com/cli/v7/configuring-npm/npmrc

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next

## Challenges

At first glance I thought my biggest challenge would be deploying to heroku. But my biggest challenge was trying to generate the header and image in the webpage. When I opened it locally in the dist file it would work but when I would open it on the deployed app it would not. I will continue to work on it and break the code down to see if I can fix it. 

## Tests
npm run start to see if there were any errors in the terminal

git push heroku main seemed to be a test as well to check how the page built out

## Contribute
to contribute please contact benetheahardin@yahoo.com

## Github
This repo and others can be found at https://github.com/Neta2393


