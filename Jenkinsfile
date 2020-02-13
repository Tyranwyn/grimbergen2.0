pipeline {
  agent any
  tools {
    nodejs "node 12.16.0"
  }
  stages {
    stage('Install') {
      steps {
        echo 'Installing'
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        echo 'building'
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
        sh 'npm run deploy'
      }
    }
  }
}
