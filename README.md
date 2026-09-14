# Python Quiz Application — Docker & Jenkins CI/CD

A full-stack Python Quiz application built with **HTML, CSS, JavaScript, Python Flask, and MySQL**. The application is containerized using Docker and automated through Jenkins CI/CD.

## Features

- Quiz interface with questions and answers
- Score submission and result display
- Flask REST API
- MySQL database
- Dockerized frontend, backend, and database
- Jenkins pipeline for build, Docker Hub push, and deployment

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python, Flask
- **Database:** MySQL
- **DevOps:** Docker, Docker Compose, Jenkins, GitHub, Docker Hub

## Architecture

```text
User
 |
 | Port 3000
 v
Frontend Container
 |
 | API Port 5000
 v
Backend Container
 |
 | MySQL Port 3306
 v
MySQL Container
```

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/AmardeepSingh-06/Python-Quiz.git
cd Python-Quiz
```

### 2. Start the application

```bash
docker compose up -d --build
```

### 3. Open in browser

```text
http://localhost:3000
```

### 4. Check running containers

```bash
docker compose ps
```

## Stop the Application

```bash
docker compose down
```

## Jenkins CI/CD Flow

```text
GitHub Push
    ↓
Jenkins Pipeline
    ↓
Checkout Code
    ↓
Build Docker Images
    ↓
Push Images to Docker Hub
    ↓
Deploy Application
```

Docker images:

```text
amardeepdevops/python-quiz-backend:latest
amardeepdevops/python-quiz-frontend:latest
```

## DevOps Concepts Demonstrated

- Git and GitHub
- Docker and Docker Compose
- Container networking
- Environment variables
- Jenkins CI/CD
- Docker Hub
- Automated image build and push
- Application deployment on AWS EC2

## Useful Commands

```bash
docker compose up -d --build
docker compose ps
docker compose logs -f
docker compose down
docker images
```

# 👨‍💻 Author

**Amardeep Singh**

GitHub:  
https://github.com/AmardeepSingh-06

Project Repository:  
https://github.com/AmardeepSingh-06/Python-Quiz

---

## 📄 License

This project is created for learning, practice, and demonstrating full-stack development and DevOps concepts.
