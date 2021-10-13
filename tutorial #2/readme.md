# Tutorial #2: _[Authentication APIs in Node.js and JWT #13 | MERN Stack Tutorial With Auth](https://www.youtube.com/watch?v=wwiwyFXQCHw&ab_channel=ChaooCharles)_

# Initial setup

1. ``git clone https://github.com/MrManiacc/tutorials.git - clones the repository (make sure you have git installed)``
2. ``cd tutorial\ #2/ - selects the first tutorial as the current folder``
3. ``npm install - installs all of the local dependieces/sets up your enviorment``
4. ``see 'Database connection' and 'Creating your own .env file''``
5. ``npm start - starts the nodemon server (make sure your created your database first and .env file first)``

# Database connection

You must register for an account on [mongodb.com](https://cloud.mongodb.com/). There is a free option that gives you
512MB of storage which is more than enough for this project. After your cluster is finished deploying (it can take up to
6 or 7 minutes), you will create a .env file in the root of the tutorial #1 directory. Your .env should look something
like this depending on your username/password and server
endpoint. [See example below for local db connection example.](#creating-your-own-env-file)

# Creating your own .env file

```dotenv
# The <username> would be replaced by the username you setup on the database access panel 
# the password will also be created there as well as the access permissions.\
# This will be mapped in javascript by dotenv using process.env.DB_CONNECTION
DB_CONNECTION = mongodb+srv://<username>:<password>@cluster0.9f2nr.mongodb.net/exampleDatabase?retryWrites=true&w=majority
# The secret key can be anything you'd like as long as it's unique and kept private.
# It's used for the jsonwebtoken encryption/decryption
SECRET_KEY=gzrXcWuKxv5pw0XAQ2jmsEMifhnT0Epb
```

# Starting point of tutorial

The purpose of this video tutorial was to teach about authentication, access headers and tokens. Because this video is
the 13th in a multi-part playlist, the youtuber had previous code from a past video. After further review I decided to
just use the tutorial #1 as a starting point, as it has all of the initial setup and we can just additively add
authentication to the posts' system.

# Review/writeup

This video tutorial taught me a good amount of security features as well how to write your own proper middleware. In the
video the youtuber describes how you can write your own functions that can act as middleware, meaning they are called
before the actual code callback. After creating our own middleware [authentication method](util/auth.js) we used it in
our code for the [posts](routes/posts.js). Express allows for easy routing of your webserver allowing you to have all
kinds of control over specific endpoints.

The video tutorial also walked me through how to create users. We used a library
called [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing making the database more secure. We created
endpoints for registering the user as well as signing them in see the [user](routes/user.js) file. Overall this video
tutorial allowed me to integrate the past tutorial which was better, IMO, than just copying and pasting his template. It
allowed me to get a real world example of how to bring together multiple moving parts and further deepened my knowledge
in regard to express and backend programming in general