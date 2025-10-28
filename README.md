Job Application Tracker

Overview

The Job Application Tracker is a simple backend project developed using Node.js and Express.
It helps users manage and track their job applications in one place.
The system supports adding, viewing, updating, and deleting job entries, with all data stored in a local JSON file.


---

Features

Add new job applications

View all saved job applications

Update job details or status

Delete a job entry

Data stored locally using JSON file

Simple and easy to extend for future upgrades



---

Technologies Used

Node.js

Express.js

File System Module (for data storage)

CORS Middleware

JSON for local database



---

Project Structure

JobApplicationTracker/
│
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── data/
│   ├── package.json
│
├── docs/
│   ├── Project_Report.pdf
│   ├── Screenshots/
│   ├── API_Documentation.md
│
└── README.md


---

Installation and Setup

Follow these steps to run the project locally:

1. Clone the Repository

git clone <your-repository-link>


2. Navigate to the Project Folder

cd job-application-tracker


3. Install Dependencies

npm install


4. Start the Server

npm start


5. Open Postman or Browser

Base URL: http://localhost:5000/api/jobs





---

API Endpoints

Method	Endpoint	Description	Example Input

GET	/api/jobs	Get all job applications	—
POST	/api/jobs	Add a new job	{ "company": "Google", "role": "Developer", "status": "Applied" }
PUT	/api/jobs/:id	Update a job	{ "status": "Interview Scheduled" }
DELETE	/api/jobs/:id	Delete a job	—



---

Example Data (jobs.json)

[
  {
    "id": 1,
    "company": "Google",
    "role": "Software Intern",
    "status": "Applied"
  },
  {
    "id": 2,
    "company": "Amazon",
    "role": "Data Analyst",
    "status": "Interview Scheduled"
  }
]


---

Challenges and Learnings

Learned how to build and test REST APIs using Node.js.

Understood file handling and JSON data management.

Solved issues with CORS and routing in Express.

Gained hands-on experience with CRUD operations.



---

Future Enhancements

Connect the backend to MongoDB for permanent data storage.

Create a frontend using React or Angular.

Add user authentication and login system.

Deploy the complete full-stack version online.
