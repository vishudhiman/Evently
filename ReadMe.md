## Steps to run the project locally:

- Clone the repo.
- Make sure you have `npm` Node.js & MongoDB(Compass) installed in your system.
- Create a `.env` file in the server directory(i've created one for testing)
- It should include the database url, port, secret and cookie-name
  ###### .env file example
  _DB_URL=_<br/>
  _PRIVATE_KEY=secret_<br/>
  _PORT=4000_<br/>
  <br/>
- Enter the `server` folder and run `npm install` and then run `nodemon`.
- Then enter the `client` folder and run `npm install` and then run `npm start`.
- Go to `http://localhost:3000` to see the application running.
