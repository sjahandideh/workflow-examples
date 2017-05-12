# Instructions
What I did to create and deploy this service from scratch.

### 1. add aws profile
### 2. create git repo
### 3. export aws profile in the git repo
```
$ cd my-workflow-service
$ export AWS_PROFILE="dev" && export AWS_REGION=us-west-1
```
### 4. create serverless service
$ serverless create --template aws-nodejs --path workflowV1 --name
workflow-v1

### 5. deploy first version
$ serverless deploy

### 6. add a workflow-tester class
this class simply calls the handler method of the workflow lambda and returns error or success

$ node workflow-tester.js
