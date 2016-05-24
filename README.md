SHEC
====


This project was created as part of an investigation work.


Technologies
------------

> - [Raspberry Pi](https://www.raspberrypi.org/)
> - [Ubuntu Mate](https://ubuntu-mate.org/raspberry-pi/)
> - [NodeJS](https://nodejs.org/en/)
> - [ExpressJS](http://expressjs.com/)
> - [CylonJS](https://cylonjs.com/documentation/platforms/raspberry-pi/)
> - [Jquery](https://jquery.com/)
> - [Bootstrap](http://getbootstrap.com/)
> - [PostgreSQL](http://www.postgresql.org.es/)
> - [Sequelize](http://docs.sequelizejs.com/en/latest/)
> - [Pi-blaster](https://github.com/sarfata/pi-blaster)


----------

Magic
-----

> **Note:**
The project can run on a PC but if you want to get a better experience is necessary run in on a Raspberry Pi 2 


Firstable we need to install Node. These are the instructions:


```
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

Optional (build tools):
```
$ sudo apt-get install -y build-essential
```
Next we need to clone this repo. You can do it clicking on the green button on the rigth corner "Clone or download".

Once the project was cloned, do this:

1 - Move to the directory of the project
2 -  Install global dependencies for node with: 
```
  $ sudo npm install -g bower
  $ sudo npm install -g nodemon
```
3 -  Install node dependencies for the project with:
```
  $ npm install
```
4 -  Install bower dependencies for the project with:
```
  $ bower install
```
5 -  Set up the database:
Install postgresql:
```
  $ sudo apt-get install postgresql
```
Create the db using psql:
```
  $ sudo -u postgres psql
  $ create database shec
```
Create the user "ivanrangel" (you need to be still in psql mode):
```
  $ create user ivanrangel;
  $ alter user ivanrangel with password '1234';
  $ alter user ivanrangel with superuser;
  $ alter user ivanrangel with createdb;
  $ alter user ivanrangel with createrole;
```
Ready!!!!! The magic is almost done.

    

Run SHEC
-------------
Once you have done all the previous instructions, you need to run the pi-blaster command ([see the repo](https://github.com/sarfata/pi-blaster)) and next run this:
```
  $ sudo nodemon bin/www
```
And that's all what you need to run SHEC!!!
