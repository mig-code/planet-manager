# Planet Manager System

This project is a simple application for managing planets, built with React

Deploy : https://planet-manager.netlify.app/

## Work Methodology

I use Trello to manage project tasks, Netlify for deployment, and SonarCloud for code quality.

## Technical Design Decisions

The main challenge was deciding how to work with the data. Since the model was read-only, I chose to make a single API call and work with the data locally using Redux and localStorage for persistence. In my opinion, this approach is the most suitable because it allows for cleaner and more testable code.

## Development Stack

-   Front-end: React, Redux, TypeScript, Sass
-   Testing: Jest
-   Version control: Git with https://gitmoji.dev/ for commit history
-   CI/CD: Github Actions
-   API: https://studio.apollographql.com/public/star-wars-swapi/variant/current/home

## Future Development

-   Improve generate Id for new planets
-   Dockerize the app for easier deployment

## Installation

Before installing the project, you should have Node.js and npm installed on your system.

To install the project, follow these steps:

1.  Clone the project to your local machine:

        git clone https://github.com/mig-code/planet-manager.git

2.  Navigate into the project directory:

        cd planet-manager

3.  Install the project dependencies:

        npm install

## Running the App

To run the app, execute the following command:

    npm run start

This will start the app in development mode on your local machine. You can access the app by navigating to http://localhost:3000 in your web browser.
Testing

## Testing

To run the tests for the project, execute the following command:

    npm run test

This will run the tests in watch mode and collect coverage information.

To run the tests in production mode, execute the following command:

    npm run test:prod

This will run the tests once and collect coverage information.

## Build

To build the app for production, execute the following command:

    npm run build

This will create a production build of the app in the build directory.

## License

This project is licensed under the MIT License
