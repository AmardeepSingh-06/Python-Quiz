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

## Author

**Amardeep Singh**

GitHub: https://github.com/AmardeepSingh-06and provides networking between the containers. The frontend communicates with the Flask backend through REST APIs, and the backend stores quiz questions and scores in MySQL. I also created a Jenkins CI/CD pipeline that checks out the code from GitHub, builds separate Docker images for the frontend and backend, logs in securely to Docker Hub using Jenkins credentials, and pushes the images to the registry. This project helped me understand Docker, networking, environment variables, Jenkins, CI/CD, and deployment concepts.

---

# ❓ Common Interview Questions

### 1. Why did you use Docker?

Docker packages the application and its dependencies into containers so that it can run consistently on different systems.

### 2. Why did you use Docker Compose?

Docker Compose allows multiple services to be defined and started together using one configuration file.

### 3. Why does the backend use `database` instead of `localhost`?

Because `database` is the MySQL service name in Docker Compose. Containers communicate using service names.

### 4. What is the difference between an image and a container?

An image is a packaged application template. A container is a running instance of that image.

### 5. What is the purpose of a Dockerfile?

A Dockerfile contains instructions used to build a Docker image.

### 6. What is the purpose of a Docker network?

It allows containers to communicate with each other.

### 7. What is the purpose of a Docker volume?

A volume stores data outside the container lifecycle. It is useful for persistent database data.

### 8. Why did you use Jenkins?

Jenkins automates tasks such as code checkout, image building, testing, and pushing images.

### 9. Why are Jenkins credentials used?

They securely store sensitive information such as Docker Hub passwords, tokens, and SSH keys.

### 10. What happens when code is pushed to GitHub?

GitHub sends a webhook to Jenkins. Jenkins starts the pipeline, builds Docker images, and pushes them to Docker Hub.

### 11. How can this project be deployed on AWS?

Docker images can be pulled on an EC2 instance and started using Docker Compose.

### 12. What happens if a container stops?

The service becomes unavailable unless it is restarted. Restart policies can be configured in Docker Compose to automatically restart containers.

---

# 🔮 Future Enhancements

- Add user login and authentication.
- Add an admin panel.
- Add quiz categories.
- Add difficulty levels.
- Add a leaderboard.
- Add automated tests.
- Add code-quality checks.
- Use versioned Docker image tags instead of only `latest`.
- Deploy automatically to AWS EC2 through Jenkins.
- Add Nginx reverse proxy.
- Add HTTPS using SSL.
- Add monitoring and centralized logging.
- Deploy using Kubernetes.
- Create AWS infrastructure using Terraform.

---

# 👨‍💻 Author

**Amardeep Singh**

GitHub:  
https://github.com/AmardeepSingh-06

Project Repository:  
https://github.com/AmardeepSingh-06/Python-Quiz

---

## 📄 License

This project is created for learning, practice, and demonstrating full-stack development and DevOps concepts.
