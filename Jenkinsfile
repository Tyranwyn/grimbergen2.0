pipeline {
  agent any
    stages {
      stage('Install') {
        steps {
          echo 'Installing'
          npm install
        }
      }
      stage('Build') {
        steps {
          echo 'building'
          npm run build
        }
      }
      stage('Deploy') {
        steps {
          echo "Deploying"
          npm run deploy
        }
      }
}
