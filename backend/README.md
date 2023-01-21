# ConUHacks Developer Challenge - API server

## Technologies Used

- Express for web server
- MongoDB as a Database with mongoose for schema based models
- passport.js for authentication
- jsonwebtoken for generating auth tokens for logged users

### Setup
## Configure environment and .env file:
For ex:
 - Configure an .env.development
 - Set NODE_ENV=development

## Setup dummy data for testing:
- Dummy data is provided in `utils/sampleData.js`
- POST /createDummyData

### In the project directory:

Server starts listening on the configured port on `npm start`.

## Functionalities

### Authentication

- using passport.js

### User

- Get user data
- Update user settings
