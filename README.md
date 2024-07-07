# Task Delete
project members: 
Diego Hidalgo ,
Kevin Guaña
## Requirements

- [Node.js](https://nodejs.org/) (version 14)
- [Docker](https://www.docker.com/get-started)

 first we have to clone the github repository with the docker-compose file
 
```sh
https://github.com/jdhidal/Microservice-Tasks.git
```
We open a terminal in the cloned project and enter the following command

```sh
docker-compose up --build
```
and then the created containers will be automatically executed 
To check the microservices, the following code must be run on the assigned port:

## List task service

Open your browser and navigate to [http://localhost:5001/tasks](http://localhost:5001/tasks)

And we must observe data

## Update Task Service

Open your browser and navigate to [http://localhost:5002/tasks](http://localhost:5002/tasks)

We open a new terminal and place the following CURL

   ``` sh
    $headers = @{
    "Content-Type" = "application/json"
    }

    $body = @{
    "title" = "Updated Task Title"
    "description" = "Updated Description"
    "completed" = $true
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "http://localhost:5002/tasks/1" -Method PUT -Headers $headers -Body $body
```
 And we must observe that a Task updated successfully message is displayed
 
## delete task service
Open your browser and navigate to [http://localhost:5003/tasks](http://localhost:5003/tasks)
We open a new terminal and place the following CURL
```sh
 $headers = @{
    "Content-Type" = "application/json"
    }

    Invoke-RestMethod -Uri "http://localhost:5003/tasks/1" -Method DELETE -Headers $headers
```
And we must observe that a Task updated successfully message is displayed

