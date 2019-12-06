# Swagger generated server

1. Install all dependency using npm install
2. Run - npm run dev


----------------
Command to include -
---------------------

EC2 setup -
-------------
aws configure (Access Key and secret should be configured)
sudo yum update -y
sudo yum install git
sudo yum install -y docker
sudo usermod -aG docker ec2-user (adding user to docker)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
sudo service docker start
git clone <https://github.com/khandelwal14/healthcheck-service>
cd to healthcheck-service folder

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
