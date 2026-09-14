# 🐍 Python Quiz Application

A simple full-stack quiz application built using **HTML, CSS, JavaScript, Python Flask, and MySQL**.

The application is containerized using **Docker** and managed using **Docker Compose**. Jenkins is used to automate Docker image building and pushing images to Docker Hub.

---

## 📌 Project Overview

The Python Quiz application allows users to:

- Start a quiz.
- View multiple-choice questions.
- Submit answers.
- Calculate the final score.
- Store questions and scores in a MySQL database.

The project contains three main services:

```text
User
  |
  | http://localhost:3000
  ↓
Frontend Container
HTML / CSS / JavaScript
  |
  | REST API requests
  ↓
Backend Container
Python + Flask
  |
  | MySQL connection
  ↓
MySQL Database Container
```

---

## ✨ Features

- Simple quiz interface.
- Multiple-choice questions.
- Score calculation.
- Flask REST APIs.
- MySQL database integration.
- Dockerized frontend.
- Dockerized backend.
- MySQL container.
- Docker Compose for running all services.
- Jenkins CI/CD pipeline.
- Docker Hub image push.
- Backend health-check API.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Frontend structure |
| CSS | Frontend design |
| JavaScript | Frontend functionality |
| Python | Backend programming |
| Flask | REST API development |
| MySQL | Database |
| Docker | Containerization |
| Docker Compose | Managing multiple containers |
| Jenkins | CI/CD automation |
| Git and GitHub | Source-code management |
| Docker Hub | Docker image registry |

---

## 🏗️ Application Architecture

```text
                         User
                           |
                           | HTTP :3000
                           ↓
                +----------------------+
                |  Frontend Container  |
                |                      |
                | HTML / CSS / JS      |
                | Static Web Server    |
                +----------+-----------+
                           |
                           | REST API :5000
                           ↓
                +----------------------+
                |  Backend Container   |
                |                      |
                | Python + Flask       |
                | REST APIs            |
                +----------+-----------+
                           |
                           | MySQL :3306
                           ↓
                +----------------------+
                |   MySQL Container    |
                |                      |
                |      quiz_db         |
                | Questions / Scores   |
                +----------------------+

                    Docker Network
```

### Architecture Explanation

1. The user opens the frontend application.
2. The frontend runs on port `3000`.
3. JavaScript sends API requests to the Flask backend.
4. The Flask backend runs on port `5000`.
5. The backend communicates with MySQL on port `3306`.
6. MySQL stores quiz questions and scores.
7. The backend sends the response to the frontend.
8. The frontend displays the quiz and final result.

---

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
├── Jenkinsfile
├── .gitignore
└── README.md
```

> The database SQL file name and location must match the path configured in `docker-compose.yml`.

---

## ⚙️ Prerequisites

Install the following software:

- Git
- Docker
- Docker Compose

Check the installation:

```bash
git --version
docker --version
docker compose version
```

If your system uses the older Compose command, use:

```bash
docker-compose --version
```

---

# ▶️ Run the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/AmardeepSingh-06/Python-Quiz.git
```

## 2. Enter the Project Directory

```bash
cd Python-Quiz
```

## 3. Check the Files

```bash
ls
```

Expected files and folders:

```text
backend
database
frontend
docker-compose.yml
Jenkinsfile
README.md
```

## 4. Build and Start the Application

Using the latest Docker Compose command:

```bash
docker compose up -d --build
```

Or, if your system uses the older command:

```bash
docker-compose up -d --build
```

### Command Explanation

```bash
docker compose up
```

Starts the services defined in `docker-compose.yml`.

```bash
-d
```

Runs the containers in the background.

```bash
--build
```

Builds the Docker images before starting the containers.

## 5. Check the Containers

```bash
docker compose ps
```

Or:

```bash
docker ps
```

You should see the frontend, backend, and database containers running.

## 6. Open the Application

Open the following URL in your browser:

```text
http://localhost:3000
```

---

# 🔌 Backend API Testing

The backend runs on port `5000`.

## Health Check API

```http
GET /health
```

Test it using:

```bash
curl http://localhost:5000/health
```

Expected response:

```json
{
  "status": "ok"
}
```

## Questions API

```http
GET /questions
```

Test it using:

```bash
curl http://localhost:5000/questions
```

This API returns quiz questions from the MySQL database.

## Scores API

```http
POST /scores
```

This API stores the user’s quiz score in the MySQL database.

The exact request body depends on the implementation in `backend/app.py`.

---

# 🗄️ Database Setup

The project uses MySQL as the database.

The database name is:

```text
quiz_db
```

The database contains tables such as:

```text
players
questions
scores
```

The SQL initialization file is automatically executed when the MySQL container is created for the first time.

Example Docker Compose configuration:

```yaml
volumes:
  - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql:ro
```

This means:

- `./database/init.sql` is the SQL file in the project.
- `/docker-entrypoint-initdb.d/init.sql` is the location inside the MySQL container.
- MySQL executes the SQL file during initial database setup.

### Important

The backend should connect to the MySQL service using the Docker Compose service name.

Example:

```env
DB_HOST=database
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=quiz_db
```

Inside Docker, use:

```text
database
```

as the database host instead of:

```text
localhost
```

### Why?

Inside a container, `localhost` refers to that same container. Docker service names allow containers to communicate with each other.

```text
Backend container → database service → MySQL container
```

---

# 🔄 Application Flow

```text
1. User opens http://localhost:3000
                    |
                    ↓
2. Frontend loads HTML, CSS and JavaScript
                    |
                    ↓
3. Frontend requests questions from Flask
                    |
                    ↓
4. Flask receives GET /questions
                    |
                    ↓
5. Flask fetches questions from MySQL
                    |
                    ↓
6. MySQL returns the questions
                    |
                    ↓
7. Flask sends the response to frontend
                    |
                    ↓
8. User answers the quiz
                    |
                    ↓
9. Frontend sends the score to Flask
                    |
                    ↓
10. Flask stores the score in MySQL
                    |
                    ↓
11. Frontend displays the final result
```

---

# 🐳 Docker Services

| Service | Purpose | Port |
|---|---|---|
| Frontend | Serves the quiz interface | `3000` |
| Backend | Provides REST APIs | `5000` |
| Database | Stores quiz data | `3306` |

Docker Compose creates a network so that the services can communicate with each other.

---

# 🧰 Useful Docker Commands

## View Running Services

```bash
docker compose ps
```

## View All Containers

```bash
docker ps -a
```

## View Logs of All Services

```bash
docker compose logs
```

## View Backend Logs

```bash
docker compose logs backend
```

## View Frontend Logs

```bash
docker compose logs frontend
```

## View Database Logs

```bash
docker compose logs database
```

## Follow Logs in Real Time

```bash
docker compose logs -f
```

## Stop Containers

```bash
docker compose stop
```

## Start Existing Containers

```bash
docker compose start
```

## Stop and Remove Containers

```bash
docker compose down
```

## Rebuild and Start Containers

```bash
docker compose up -d --build
```

## Rebuild Without Cache

```bash
docker compose build --no-cache
docker compose up -d
```

## View Docker Images

```bash
docker images
```

## View Docker Networks

```bash
docker network ls
```

## Enter the Backend Container

```bash
docker compose exec backend sh
```

## Enter the MySQL Container

```bash
docker compose exec database bash
```

## Remove Containers and Volumes

```bash
docker compose down -v
```

> Be careful with this command because removing volumes can delete the stored MySQL data.

---

# 🔁 Jenkins CI/CD Pipeline

Jenkins automates the Docker image build and push process.

The pipeline flow is:

```text
Developer pushes code to GitHub
                |
                ↓
          GitHub Webhook
                |
                ↓
          Jenkins Pipeline
                |
                ↓
          Checkout Code
                |
                ↓
       Build Backend Image
                |
                ↓
       Build Frontend Image
                |
                ↓
          Docker Login
                |
                ↓
       Push Images to Docker Hub
```

## Jenkins Pipeline Stages

### 1. Checkout

Jenkins downloads the latest source code from GitHub.

```groovy
checkout scm
```

### 2. Build Backend Image

```bash
docker build -t python-quiz-backend:latest ./backend
```

### 3. Build Frontend Image

```bash
docker build -t python-quiz-frontend:latest ./frontend
```

### 4. Tag Images

```bash
docker tag python-quiz-backend:latest amardeepdevops/python-quiz-backend:latest
docker tag python-quiz-frontend:latest amardeepdevops/python-quiz-frontend:latest
```

### 5. Push Images to Docker Hub

```bash
docker push amardeepdevops/python-quiz-backend:latest
docker push amardeepdevops/python-quiz-frontend:latest
```

---

# 🔐 Jenkins Credentials

Docker Hub credentials should not be written directly inside the Jenkinsfile.

Create a Jenkins credential with:

```text
Credential Type: Username with password
Credential ID: dockerhub-creds
Username: Your Docker Hub username
Password: Your Docker Hub password or access token
```

Use it in the Jenkinsfile like this:

```groovy
withCredentials([
    usernamePassword(
        credentialsId: 'dockerhub-creds',
        usernameVariable: 'DOCKER_USERNAME',
        passwordVariable: 'DOCKER_PASSWORD'
    )
]) {
    sh '''
        echo "$DOCKER_PASSWORD" | docker login \
        -u "$DOCKER_USERNAME" \
        --password-stdin

        docker push amardeepdevops/python-quiz-backend:latest
        docker push amardeepdevops/python-quiz-frontend:latest
    '''
}
```

This keeps the Docker Hub password secure.

---

# 🌐 GitHub Webhook Flow

When GitHub webhook is configured with Jenkins:

```text
Developer changes code
          |
          ↓
git add .
git commit -m "Updated quiz"
git push origin main
          |
          ↓
GitHub sends webhook to Jenkins
          |
          ↓
Jenkins starts the pipeline
          |
          ↓
Docker images are built
          |
          ↓
Images are pushed to Docker Hub
```

---

# ☁️ Deployment Flow

The Docker images can later be deployed on an AWS EC2 instance.

```text
Developer
   |
   ↓
GitHub
   |
   ↓
Jenkins
   |
   ↓
Docker Build
   |
   ↓
Docker Hub
   |
   ↓
AWS EC2
   |
   ↓
Docker Compose
   |
   ↓
Running Application
```

On the EC2 server, the deployment commands can be:

```bash
docker login
docker compose pull
docker compose up -d
```

The EC2 instance should have:

- Docker installed.
- Docker Compose installed.
- Required ports allowed in the security group.
- Correct environment variables.
- Access to Docker Hub.

---

# 🧪 Troubleshooting

## Check Backend Logs

```bash
docker compose logs backend
```

## Check Frontend Logs

```bash
docker compose logs frontend
```

## Check Database Logs

```bash
docker compose logs database
```

## Check Whether Ports Are Already in Use

```bash
sudo ss -tulpn | grep -E '3000|5000|3306'
```

## Restart All Services

```bash
docker compose restart
```

## Rebuild the Application

```bash
docker compose down
docker compose up -d --build
```

## Check Running Containers

```bash
docker ps
```

## Check Docker Images

```bash
docker images
```

---

# 📚 DevOps Concepts Demonstrated

This project demonstrates:

- Git and GitHub.
- Dockerfile creation.
- Docker image building.
- Docker containers.
- Docker networks.
- Docker volumes.
- Docker Compose.
- Multi-container application setup.
- Environment variables.
- Container-to-container communication.
- MySQL initialization.
- Jenkins pipeline.
- Jenkins credentials.
- GitHub webhook.
- Docker Hub registry.
- CI/CD automation.
- Application health checks.
- AWS EC2 deployment concepts.

---

# 🎯 Interview Explanation

You can explain the project in an interview like this:

> I developed a full-stack Python Quiz application using HTML, CSS, JavaScript, Flask, and MySQL. I containerized the frontend, backend, and database using Docker. Docker Compose manages all the services and provides networking between the containers. The frontend communicates with the Flask backend through REST APIs, and the backend stores quiz questions and scores in MySQL. I also created a Jenkins CI/CD pipeline that checks out the code from GitHub, builds separate Docker images for the frontend and backend, logs in securely to Docker Hub using Jenkins credentials, and pushes the images to the registry. This project helped me understand Docker, networking, environment variables, Jenkins, CI/CD, and deployment concepts.

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
