node {
    stage("Start") {
        echo GIT_BEFORE_HASH
        echo GIT_AFTER_HASH
        echo "You WOOTOTOddOT"
        
        sh """
            curl \\
                -X POST \\
                -H "Content-Type: application/json" \\
                -H "Authorization: token ebf828c4a3152c8264537e254756fb9d2e349984" \\
                -d '{
                    "state": "success",
                    "target_url": "${BUILD_URL}console",
                    "description": "The build succeeded!",
                    "context": "continuous-integration/jenkins"
                }' \\
            "https://api.github.com/repos/bigboiblue/jenkins-test/statuses/${GIT_AFTER_HASH}"
        """
    }
}