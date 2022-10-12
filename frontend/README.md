# LetsChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## GIT Orgnaisation

The root dir is lets-chat, under it simply devides the two ends of the application: frontend and backend. Both ends follow the MVC pattern.
Frontend has the views which display the html for each page, the services handle part of the business logic and then the models for this application are the interfaces.
Backend has the models, rotes and controllers for each item (user, group, room). 

Git has been used frequently. Commits and pushes have only been done when code was on a working place.

## Data Structure

Users -> Rooms -> Groups
It has been used a tree data structure in which users belong to rooms which they belong to groups and it waterfalls. 
This means for example a room will have an array of users attached to it and a group will have an array of rooms with users.
Mongo is a NoSQL database management system, which stores data in JSON-like structures as documents.

## Angular Architecture

As mentioned above, this application follows MVC design. Which means all routes live in the app component. 
Moreover, each part of the application will have its own component and will live in a parent component. 
The application works with common services and interfaces that act as models. 

## Node Server Architecture

The backend architectures also follows MVC, which means each identified item, in this case user, group and room 
will have its directory, in which it can be found a route, a controller and a model.

## Client & Server
The client in this application is represented in the frontend directory. Here is where the data is presented in the views.
The client handles the views and the services in this end connects to the server side represented by the backend.
The server is represented by the backend directory, which contains the connection to the database, the routes and the business logic.
The server was developed to be RESTful using express and following CRUD.

The list of routes can be simply found in the routes files, whcih call the controllers returning the corresponding values for each call.
The purpose in the serverside is to:
USERS:
create
delete
get user
get list of users
update

GROUP:
create
delete
get group
get list of groups
get list of rooms within groups
get list of users within rooms within groups
update

ROOM:
create
delete
get room
get list of room
update

CHAT:
Websocket chat


