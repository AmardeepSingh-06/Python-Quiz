# Python Quiz — Dockerized Full-Stack Application

A containerized full-stack **Python Quiz Application** built with **HTML, CSS, JavaScript, Flask, and MySQL**. The project demonstrates practical DevOps concepts by running the frontend, backend, and database as separate Docker containers connected through a custom Docker network.

## 🚀 Features

* **Interactive Python Quiz:** Users can enter their name, answer multiple-choice Python questions, and view their final score.
* **REST API Backend:** Flask provides APIs for retrieving questions, checking backend health, and storing quiz scores.
* **Persistent Database:** MySQL stores quiz questions and player scores.
* **Containerized Application:** Frontend, backend, and database run as separate Docker containers.
* **Docker Networking:** A custom `quiz-network` enables communication between the application containers.
* **Database Initialization:** SQL script is used to create database tables and insert quiz questions.
* **Git & GitHub:** Source code is managed using Git and hosted on GitHub.

## 🛠️ Tech Stack

### Frontend

* **Languages:** HTML, CSS, JavaScript
* **Web Server:** Python `http.server`
* **Containerization:** Docker
* **Port:** `3000`

### Backend

* **Language:** Python
* **Framework:** Flask
* **API:** REST API
* **CORS:** Flask-CORS
* **Database Driver:** MySQL Connector/Python
* **Containerization:** Docker
* **Port:** `5000`

### Database

* **Database:** MySQL 8
* **Database Name:** `quiz_db`
* **Container:** `mysql-container`
* **Port:** `3306`

### DevOps

* **Containerization:** Docker
* **Networking:** Docker Bridge Network
* **Version Control:** Git & GitHub

## 🏗️ Application Architecture

The application follows a three-tier containerized architecture:

```text
                         User
                           |
                           | :3000
                           ↓
              +-------------------------+
              |   Frontend Container    |
              |   frontend-container    |
              |   frontend-image:latest |
              |                         |
              | HTML/CSS/JavaScript     |
              | Python HTTP Server      |
              +------------+------------+
                           |
                           | REST API :5000
                           ↓
              +-------------------------+
              |    Backend Container    |
              |    backend-container    |
              |    backend-image:latest |
              |                         |
              | Flask REST API          |
              +------------+------------+
                           |
                           | MySQL :3306
                           ↓
              +-------------------------+
              |     MySQL Container     |
              |     mysql-container     |
              |        mysql:8           |
              |                         |
              |        quiz_db           |
              +-------------------------+

                    quiz-network
```

All three containers are connected through the custom Docker network `quiz-network`.

The Flask backend connects to MySQL using the Docker container name `mysql-container` rather than `localhost`.

## 🐳 Docker Images & Containers

| Component | Docker Image            | Container Name       | Port   |
| --------- | ----------------------- | -------------------- | ------ |
| Frontend  | `frontend-image:latest` | `frontend-container` | `3000` |
| Backend   | `backend-image:latest`  | `backend-container`  | `5000` |
| Database  | `mysql:8`               | `mysql-container`    | `3306` |

The application containers communicate through:

```text
quiz-network
```

The communication flow is:

```text
Frontend Container
        ↓
Backend Container
        ↓
MySQL Container
```

## ⚡ Getting Started

Clone the repository, create the Docker network, start the MySQL container, initialize the `quiz_db` database using `database/init.sql`, and then build and run the frontend and backend Docker images.

Once the containers are running:

* **Frontend:** `http://localhost:3000`
* **Backend API:** `http://localhost:5000`
* **Health Check:** `http://localhost:5000/health`

## 🔌 API Reference

The Flask backend provides the following REST APIs:

| Method | Endpoint     | Description                    |
| ------ | ------------ | ------------------------------ |
| `GET`  | `/health`    | Check backend health           |
| `GET`  | `/questions` | Retrieve Python quiz questions |
| `POST` | `/scores`    | Store the player's quiz score  |

## 🔄 Application Flow

```text
User opens application
        ↓
Frontend serves the quiz
        ↓
Frontend requests questions
        ↓
Flask REST API receives request
        ↓
Flask queries MySQL
        ↓
MySQL returns questions
        ↓
Flask sends JSON response
        ↓
Frontend displays quiz
        ↓
User completes quiz
        ↓
Frontend sends score
        ↓
Flask stores score in MySQL
```

## 📂 Project Structure

```text
Python-Quiz/
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── database/
│   └── init.sql
│
├── frontend/
│   ├── index.html
│   ├── quiz.html
│   ├── result.html
│   ├── style.css
│   ├── app.js
│   └── Dockerfile
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 📌 DevOps Concepts Demonstrated

* Docker Images and Containers
* Dockerfiles
* Docker Port Mapping
* Custom Docker Bridge Networks
* Container-to-Container Communication
* Environment Variables
* MySQL Containerization
* Database Initialization
* REST API Communication
* Docker Logs and Troubleshooting
* Git and GitHub

## 📈 Future Enhancements

* **Docker Compose:** Manage all application services using a single Compose configuration.
* **Docker Volumes:** Persist MySQL data.
* **Docker Hub:** Publish frontend and backend images.
* **GitHub Actions:** Implement CI/CD automation.
* **AWS EC2:** Deploy the containerized application to AWS.
* **Terraform:** Provision AWS infrastructure using Infrastructure as Code.
* **Nginx:** Use Nginx as a production frontend web server and reverse proxy.
* **Production Flask Server:** Use a production WSGI server instead of the Flask development server.

## 👨‍💻 Project Repository

**GitHub:** `https://github.com/AmardeepSingh-06/Python-Quiz`

## 📄 License

This project was created for **learning and DevOps practice**.
