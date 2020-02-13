pipeline {
  agent any
  tools {
    nodejs "node 12.16.0"
  }
  triggers {
    genericTrigger(
     genericVariables: [
      [key: 'ref', value: '$.ref']
     ],

     causeString: 'Triggered on $ref',

     token: credentials(master-webhook-token),

     printContributedVariables: true,
     printPostContent: true,

     silentResponse: false,
    )
  }
  stages {
    stage('Configuration') {
      when {
          branch 'master'
          configFileProvider([configFile(fileId: '9db27a83-670c-4793-be14-ad2a184481eb', targetLocation: 'src/environments/environment.prod.ts')]) {
            echo 'production file placed'
          }
          configFileProvider([configFile(fileId: '63f9bd71-e3b9-4966-abae-d845da3b7cd7', targetLocation: '.env')]) {
            echo 'production dot env file placed'
          }
      }
      when {
        branch 'develop'
        configFileProvider([configFile(fileId: 'e331f0d9-979d-4d08-abcc-ff079be06302', targetLocation: 'src/environments/environment.prod.ts')]) {
          echo 'beta file placed'
        }
        configFileProvider([configFile(fileId: '4d930224-e386-4581-9c97-32d5a5e2ed9d', targetLocation: '.env')]) {
          echo 'beta dot env file placed'
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
