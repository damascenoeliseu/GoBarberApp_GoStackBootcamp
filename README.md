<p align="center">
  <a href="#barber-gobarber-project">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-back-end">Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-web-application">Web Application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile-application">Mobile Application</a>
</p>

## :barber: GoBarber Project
Project developed through GoStack #14 from [Rocketseat](https://rocketseat.com.br/) bootcamp.

This is a project of appointment schedule of a barbershop where the user must schedule a time between 8am and 5pm by mobile app. For providers there is a web app version to follow appointments at that moment, during the week or during the month.

If the provider accesses the mobile app, he can schedule an appointment with another provider, that is, he becomes a customer. It works in the same idea for a customer that access the web app. This customer becomes a provider and he can serve another customer.

Each appointment has duration of 1 hour, then each provider can have 10 appointments per day.


**_Web Application_**

<p align="center">
  <img alt="GoBarber web application" src="https://github.com/damascenoeliseu/GoBarberApp_GoStackBootcamp/blob/master/.github/animationGIFWebApp.gif"/>
</p>

**_Mobile Application_**

<p align="center">
  <img alt="GoBarber mobile application" src="https://github.com/damascenoeliseu/GoBarberApp_GoStackBootcamp/blob/master/.github/animationGIFMobileApp.gif"/>
</p>

## :rocket: Technologies
Below some main technologies that this project was developed with:
- [PostgreSQL](https://www.postgresql.org)
- [MongoDB](https://www.mongodb.com)
- [Redis](https://redis.io)

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org)
- [React Native](https://reactnative.dev)

- [EditorConfig](https://editorconfig.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

- [Jest](https://jestjs.io/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/)
- [Multer](https://github.com/expressjs/multer)


### How it was used
**PostgreSQL** was used to store appointments and users of the application;

**MongoDB** was used to store notifications, e.g., notification on the screen of an appointment has been scheduled;

**Redis** was used to store the provider appointments in cache, that is, all scheduled appointments until at that moment displayed on the mobile app are recovered of the Redis instead of PostgreSQL. This strategy provides the best performance saving time of display information in the app.

## :arrow_forward: Getting started
*I suggest using [Docker](https://www.docker.com/products/docker-desktop) to install the databases (PostgreSQL, MongoDB, and Redis) and [Yarn](https://yarnpkg.com/getting-started/install) as package manager.*

**Clone the project for your device:**
```bash
$ git clone https://github.com/damascenoeliseu/GoBarberApp_GoStackBootcamp.git
```
### :gear: Back-end
```bash
# Access the back-end directory
$ cd back-end

# Install the dependencies
$ yarn

# Make a copy of ‘.env.example’ file and rename to ‘.env’
$ cp .env.example .env

### (IF YOU ARE USING DOCKER) ###
# Download and install Postgres image
$ docker pull postgres

# Create the PostgreSQL instance with Docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker /
                    -e POSTGRES_DB=gobarber -p 5432:5432 -d postgres

# Dowload and install Mongo image
$ docker pull mongo

# Create the MongoDB instance with Docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d mongo

# Download and install Redis image
$ docker pull redis

# Create the Redis instance with Docker
$ docker run --name gobarber-redis -p 6379:6379 -d redis:alpine

# Start the images
$ docker start gobarber-postgres
$ docker start gobarber-mongodb
$ docker start gobarber-redis
### ###

# Run the migrations
$ yarn typeorm migration:run

# Run the server
$ yarn dev:server
```

### :computer: Web Application
```bash
# Access the web application directory
$ cd webApp

# Install the dependencies
$ yarn

# Run the web application
$ yarn start
```

### :iphone: Mobile Application
*To run the mobile application it is necessary you have installed and configured the Android or IOS emulator.*
```bash
# Access the mobile application directory
$ cd mobileApp

# Install the dependencies
$ yarn

# Run the mobile application
## Android
$ yarn android
## IOS
$ yarn ios
```

## :memo: License
This project is under the MIT License. See the archive [LICENSE](LICENSE) for more details.

##
<p align="center">Developed by Eliseu Damasceno.</p>
