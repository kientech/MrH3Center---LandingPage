# MrH3Center - Landing Page

## Introduction

**MrH3Center---LandingPage** is a project developed to introduce the various courses offered by MrH3Center. This project utilizes the MERN stack (MongoDB, Express.js, React.js, Node.js) to build both the frontend and backend. The goal of the website is to provide detailed information about the courses, making it easy for users to explore and register.

## Project Structure

The project consists of two main parts:

1. **Frontend**:
   - Built using React.js to create the user interface.
   - The UI includes components such as the homepage, course overview page, and contact page.
   - Utilizes libraries like React Router for navigation and Axios for connecting with the backend.

2. **Backend**:
   - Developed using Node.js and Express.js to create APIs.
   - Provides APIs to manage course information, user data, and handle requests from the frontend.
   - Data is stored in MongoDB.

## Features

- **Homepage**: Provides an overview of MrH3Center and highlights key courses.
- **Course List**: Displays detailed information about the courses, including the course name, description, pricing, and duration.
- **Course Registration**: Allows users to register for courses through the website.
- **Contact Page**: Offers contact information and a form for users to submit inquiries.

## Installation

### System Requirements

- Node.js
- MongoDB

### Installation Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/kientech/MrH3Center---LandingPage
    cd MrH3Center-LandingPage
    ```

2. **Install dependencies**:

    ```bash
    # Install frontend dependencies
    cd frontend
    npm install
    
    # Install backend dependencies
    cd ../backend
    npm install
    ```

3. **Configure environment variables**:

   Create a `.env` file in the `backend` directory and add the necessary environment variables, including:

    ```bash
    MONGO_URI=<MongoDB Connection String>
    PORT=5000
    ```

4. **Run the project**:

    ```bash
    # Run frontend
    cd frontend
    npm start
    
    # Run backend
    cd ../backend
    npm start
    ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## Contribution

If you'd like to contribute to the project, please create a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License. Please see the LICENSE file for more details.
