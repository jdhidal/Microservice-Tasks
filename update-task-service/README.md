# Task Update
project members: 
Diego Hidalgo 
Kevin Guaña

The application runs on an Express server and can be deployed using Docker.
## Requirements

- [Node.js](https://nodejs.org/) (version 14)
- [Docker](https://www.docker.com/get-started)

## Installation
1. Clone this repository to your local machine:

    ```sh
    git clone https://github.com/jdhidal/Task-Update.git
    ```

2. Navigate to the project directory:

    ```sh
    cd your-repository
    ```

3. Install the dependencies using npm:

    ```sh
    npm install express
    ```
## Usage

### Run the server locally

To run the server locally, follow these steps:

1. Make sure you are in the project directory.

2. Execute the following command to start the server:

    ```sh
    npm run start
    ```

3. Open your browser and navigate to [http://localhost:5002/tasks](http://localhost:5002/tasks).
4. We open a new terminal and place the following CURL
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

 ``
 5. And we must observe that a Task updated successfully message is displayed

### Run the server with Docker

To run the server using Docker, follow these steps:

1. Make sure you are in the project directory.

2. Build the Docker image:

    ```sh
    docker build -t Task-Update .
    ```

3. Run the container:

    ```sh
    docker run -p 5002:5002 Task-Update
    ```

4. Open your browser and navigate to [http://localhost:5002/tasks](http://localhost:5002/tasks).
5. We open a new terminal and place the following CURL
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
    
 ``
 6. And we must observe that a Task updated successfully message is displayed
 
 # Docker hub
1. In order to install the docker hub of this project, you must open a terminal and place
```sh
docker run -p 5002:5002 jdhidalgo673/task-update:1.0

````
2. We open a new terminal and place the following CURL
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
 
3. And we must observe that a Task updated successfully message is displayed

# Dockerfile

Below is the content of the `Dockerfile` for this project:

### - dockerfile
Use a Node.js base image
FROM node:14

#### - Set the working directory in the container
WORKDIR /app

#### - Copy package.json and package-lock.json
COPY package*.json ./

#### - Install the project dependencies
RUN npm install

#### - Copy the application source code
COPY . .

#### - Expose the port the application will use
EXPOSE 5002

#### - Command to run the application
CMD ["npm", "start"]

# Contributions
Diego Hidalgo 
Kevin Guaña
