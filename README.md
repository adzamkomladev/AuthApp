<h1 align="center">  
Project-101: Angular Auth App 
</h1>  
    
## Description  
  
OAuth2 - registration system -facebook and google
OAuth2 - login system - facebook and google
 
Example: User should be able to register and login into the system through facebook and    google from a UI

Application should be made in angular and should be easily deployed with easy readme   steps (steps to have database on the testers computer).

You will present your work
Your will tell us how you did it
Your challenges
Any extra thing you do will enhance your chance on the team.
Duration 2 -weeks max
Reference - U can get any help online or from the internet
endToEnd test
## Features  
  
Software features  
  
* ✅ Show user profile 
* ✅ OAuth2 Authentication (Google, Github, Facebook) REST  
* ✅ User  
* ✅ Security
* ❌ (TODO:) Test  
  
## Software stack
  
  |                |Required                          |Optional                         |
|----------------|-------------------------------|-----------------------------|
|`Store and cache`| [MySQL (Database)](https://www.mysql.com/)|
|`Stack and frameworks` |[Angular (Frontend Framework)](https://angular.io),[NestJS (Server Framework)](https://nestjs.com), [NodeJS (System runtime)](https://nodejs.org), [Typescript](https://www.typescriptlang.org), [Express JS](https://expressjs.com)                |none            |
|`Deployment and containerization`          |[Docker](https://www.docker.com/)  ||

## Configuration

Disclaimer: Under normal circumstances, environment variables are not supposed to be
found in the application code, but in order to facilitate ease of running the project they are present in the code. They should normally be added to the .gitignore file of the project.

## Requirements

You need to have docker installed on your system.

### With Docker locally

```bash
$ docker-compose -f "docker-compose.yml" up -d --build
```

When done with the above command visit http://localhost:4200 in your browser