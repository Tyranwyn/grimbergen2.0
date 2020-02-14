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

String getEnvironmentVariables() {
  echo "found branch name: " + env.BRANCH_NAME
  if (env.BRANCH_NAME == 'develop') {
    return """
    COLLECTION_CATEGORIES='categories-test'
    COLLECTION_STATUS_UPDATES='status-updates-test'
    COLLECTION_REPORTS='reports-test'
    COLLECTION_PAIR_REPORTS='pair-reports-test'
    COLLECTION_STATUSES='statuses-test'
    COLLECTION_USER_DATA='users-data-test'
    COLLECTION_MAIL='mail'

    MAIL_TO_DEFAULT='sammi.fux@gmail.com'
    MAIL_FROM_DEFAULT='grimbergen.app@gmail.com'

    FTP_BASE_DIR='beta.grimpunt.be'
    """
  } else if (env.BRANCH_NAME == 'master') {
    return """
    COLLECTION_CATEGORIES='categories'
    COLLECTION_STATUS_UPDATES='status-updates'
    COLLECTION_REPORTS='reports'
    COLLECTION_PAIR_REPORTS='pair-reports'
    COLLECTION_STATUSES='statuses'
    COLLECTION_USER_DATA='users-data'
    COLLECTION_MAIL='mail'

    MAIL_TO_DEFAULT='grimbergen.grimpunt@gmail.com'
    MAIL_FROM_DEFAULT='grimbergen.grimpunt@gmail.com'

    FTP_BASE_DIR='httpdocs'
    """
  }
  return null
}

pipeline {
  agent any
  tools {
    nodejs "node 12.16.0"
  }
  environment {
    FTP_HOST = credentials('ftpHost')
    FTP_LOGIN_CREDS = credentials('ftpLogin')
    getEnvironmentVariables()
  }
  stages {
    stage('Configuration') {
      sh('echo $FTP_LOGIN_CREDS')
      sh('echo $FTP_BASE_DIR')
    }
//    stage('Install') {
//      steps {
//        echo 'Installing'
//        sh 'npm install'
//      }
//    }
//    stage('Build') {
//      steps {
//        echo 'building'
//        sh 'npm run build'
//      }
//    }
//    stage('Deploy') {
//      steps {
//        echo 'Deploying'
//        sh 'npm run deploy'
//      }
//    }
  }
}

//when {
//  branch 'master'
//  configFileProvider([configFile(fileId: '9db27a83-670c-4793-be14-ad2a184481eb', targetLocation: 'src/environments/environment.prod.ts')]) {
//    echo 'production file placed'
//  }
//  configFileProvider([configFile(fileId: '63f9bd71-e3b9-4966-abae-d845da3b7cd7', targetLocation: '.env')]) {
//    echo 'production dot env file placed'
//  }
//}
//when {
//  branch 'develop'
//  xw([configFile(fileId: 'e331f0d9-979d-4d08-abcc-ff079be06302', targetLocation: 'src/environments/environment.prod.ts')]) {
//    echo 'beta file placed'
//  }
//  configFileProvider([configFile(fileId: '4d930224-e386-4581-9c97-32d5a5e2ed9d', targetLocation: '.env')]) {
//    echo 'beta dot env file placed'
//  }
//}
