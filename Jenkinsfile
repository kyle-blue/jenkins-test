node {
    stage("Start") {
        echo GIT_BEFORE_HASH
        echo GIT_AFTER_HASH
        echo "You WOOTOTOddOT"
        
        sh """
            curl \\
                -X POST \\
                -H "Content-Type: application/json" \\
                -H "Authorization token 2ddc57ed078bbf06851e6b5da4ce8861d0383304" \\
                -d '{
                    "state": "success",
                    "target_url": "${BUILD_URL}console",
                    "description": "The build succeeded!",
                    "context": "continuous-integration/jenkins"
                }' \\
            "https://api.github.com/repos/bigboiblue/jenkins-test/commits/${GIT_AFTER_HASH}/statuses"
        """
    }
}