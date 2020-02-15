boolean shouldDeployToEnvironment() {
  println "found branch name: " + env.BRANCH_NAME
  return env.BRANCH_NAME == 'develop' || env.BRANCH_NAME == 'master'
}

String getBaseDir() {
  echo "found branch name: " + env.BRANCH_NAME
  if (env.BRANCH_NAME == 'develop') {
    return 'beta.grimpunt.be'
  } else if (env.BRANCH_NAME == 'master') {
    return 'httpdocs'
  }
  return 'test'
}

def loadAngularEnvironment() {
  if (env.BRANCH_NAME == 'develop') {
    configFileProvider([configFile(fileId: '1252439b-8bc7-41bb-9960-4af19ab15768', targetLocation: 'src/environments/environment.prod.ts')]) {
      echo 'Angular beta file loaded'
    }
  } else if (env.BRANCH_NAME == 'master') {
    configFileProvider([configFile(fileId: '89ab382e-4ff2-48cd-9b75-f685a31b41de', targetLocation: 'src/environments/environment.prod.ts')]) {
      echo 'Angular production file loaded'
    }
  }
}

pipeline {
  agent any
  tools {
    nodejs "node 12.16.0"
  }
  environment {
    FTP_HOST = credentials('ftpHost')
    FTP_LOGIN_CREDS = credentials('ftpLogin')
    FTP_BASE_DIR = getBaseDir()
  }
  stages {
    stage('Configuration') {
      steps {
        loadAngularEnvironment()
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
        script {
          if (shouldDeployToEnvironment()) {
            sh 'npm run build'
          } else {
            sh 'npm run build:dev'
          }
        }
      }
    }
    stage('Deploy') {
      when {
        expression { return shouldDeployToEnvironment() }
      }
      steps {
        echo 'Deploying to folder ${FTP_BASE_DIR}'
        sh 'npm run deploy'
      }
    }
    stage('Cleanup') {
      steps {
        echo 'cleaning up workspace'
        sh 'rm src/environments/environment.prod.ts'
      }
    }
  }
}
