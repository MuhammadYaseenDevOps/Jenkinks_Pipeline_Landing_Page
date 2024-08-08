pipeline {
    agent {
        docker {
            image 'node:14-alpine' // Use a newer Node.js version for React.js applications
            args '-p 3000:3000'    // Expose port 3000 if needed
        }
    }
    
    environment {
        CI = 'true'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your repository
                git 'https://github.com/MuhammadYaseenDevOps/Jenkinks_Pipeline_Landing_Page.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Deploy your app
                    // This is a placeholder for your deployment script. Adjust according to your deployment strategy.
                    sh './jenkins/scripts/deploy.sh'
                }
            }
        }
        
        stage('Manual Approval') {
            steps {
                // Wait for manual approval before proceeding
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
        
        stage('Clean Up') {
            steps {
                // Clean up resources, if needed
                sh './jenkins/scripts/cleanup.sh'
            }
        }
    }
    
    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
