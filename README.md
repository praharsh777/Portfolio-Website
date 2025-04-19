# Personal Portfolio Website in React
<img src="./assets/img/main.png" alt="Main Image" width="1266">

Built using:

- Front-end library: React
- CSS framework: React-bootstrap
- CSS animations library: Animate.css

## Project Structure

This project consists of two separate parts:

1. **Frontend**: Built with React (for the user interface).
2. **Backend**: Built with Node.js and Express (for handling form submissions and sending emails).

---

### Frontend: React App

The **React** app is responsible for rendering the user interface and interacting with the backend API. You can find the frontend code in the `src` folder.

#### To run the frontend (React App) locally:

1. Navigate to the **frontend directory** (where your `personal-portfolio` code is located).
   
2. Install the required dependencies by running:

3. Start the React development server by running:


4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

The page will reload if you make changes to the code. You may also see lint errors in the console.

#### To test the frontend:

Run the following command to launch the test suite:


#### To build the frontend for production:

Run the following command:


This command builds the app for production into the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include hashes. Your app is now ready to be deployed!

---

### Backend: Node.js and Express

The **backend** is responsible for handling requests (such as form submissions) and sending emails using **Nodemailer**.

#### To run the backend (Node.js/Express) locally:

1. Navigate to the **backend directory** (where `server.js` is located).
   
2. Install dependencies by running:

3. Set up environment variables for email credentials. Create a `.env` file in the backend directory with the following:

```plaintext
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
Note: Make sure you're using an App Password if you're using Gmail.
```
Note: Make sure you're using an App Password if you're using Gmail.

4. Start the Node.js server by running:

    node server.js

This will start the backend server on http://localhost:5000.

Now, the frontend (React app) and backend (Node.js API) are running on two separate servers locally:

React frontend: http://localhost:3000

Node.js backend API: http://localhost:5000

You can now interact with the contact form on the frontend, which will send requests to the backend for email handling.

Running Two Servers Locally
To run the two servers (frontend and backend) simultaneously, you will need to start the React server in one terminal and the Node.js server in another terminal.

In one terminal, run the React app:

bash
Copy
cd personal-portfolio
npm start
In another terminal, run the Node.js backend:

pgsql
Copy
cd server
node server.js
Now, the frontend and backend should be running locally:
```
Frontend: http://localhost:3000
Backend: http://localhost:5000
```
Linking Frontend to Backend
Make sure that in your Contact.js file in the React frontend, the fetch URL is correctly pointing to the backend:

javascript:
```
let response = await fetch("http://localhost:5000/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(formDetails),
});
```
If the backend is hosted on a different URL (e.g., during production), update the URL accordingly.
