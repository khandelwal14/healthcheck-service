# Swagger generated server

1. Install all dependency using npm install
2. Run - npm run dev


----------------
Command to include -
---------------------

EC2 setup -
-------------
1. aws configure (Access Key and secret should be configured)
2. sudo yum update -y
3. sudo yum install git
4. sudo yum install -y docker
5. sudo usermod -aG docker ec2-user (adding user to docker)
6. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
7. . ~/.nvm/nvm.sh
8. nvm install node
9. sudo service docker start
10. git clone <https://github.com/khandelwal14/healthcheck-service>
11. cd to healthcheck-service folder

Create repository/Build and push an image to the repository -
-------------------------------------------------------------


$(aws ecr get-login --no-include-email --region us-east-1)
docker build -t healthcheck-service .
aws ecr create-repository --repository-name healthcheck-service
docker tag sample-nodejs-app:latest 207236964171.dkr.ecr.us-east-1.amazonaws.com/healthcheck-service:latest
docker push 207236964171.dkr.ecr.us-east-1.amazonaws.com/healthcheck-service:latest

 
Create task definition-
-----------------------
aws ecs register-task-definition --cli-input-json file://taskdefinition.json

Create cluster -
---------------
aws ecs create-cluster --cluster-name "healthcheck-service-cluster"

Create service -
----------------
aws ecs create-service --service-name healthcheck-service --task-definition healthcheck-service-task-definition --desired-count 1 --cluster healthcheck-service-cluster
