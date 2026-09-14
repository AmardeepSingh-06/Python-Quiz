pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Cloning Code'
                git url: "https://github.com/AmardeepSingh-06/Python-Quiz.git", branch:"main"
            }
        }
        stage('Build') {
            steps {
                echo 'This is building the images'

                sh 'docker build -t python-quiz-backend:latest ./backend'
                sh 'docker build -t python-quiz-frontend:latest ./frontend'
            }
        }
        stage('Pushing to DockerHub') {
            steps {
                echo ' Login & Pushing to DockerHub '

                sh 'docker login -u amardeepdevops -p Amardeep@1234'
                sh 'docker tag python-quiz-backend:latest amardeepdevops/python-quiz-backend:latest'
                sh 'docker tag python-quiz-frontend:latest amardeepdevops/python-quiz-frontend:latest'
                sh 'docker push amardeepdevops/python-quiz-backend:latest'
                sh 'docker push amardeepdevops/python-quiz-frontend:latest'
            }
        }
    }
}
