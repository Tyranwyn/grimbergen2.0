pipeline {
  agent any
  tools {
    nodejs "node 12.16.0"
  }
  stages {
    stage('Configuration') {
      steps {
        configFileProvider([configFile(fileId: '9db27a83-670c-4793-be14-ad2a184481eb', targetLocation: 'src/environments/environment.prod.ts')]) {
              echo 'production file placed'
            }
            configFileProvider([configFile(fileId: '63f9bd71-e3b9-4966-abae-d845da3b7cd7', targetLocation: '.env')]) {
              echo 'dot env file placed'
            }
      }
    }
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
