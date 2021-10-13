# Tutorial #1: _[Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial](https://www.youtube.com/watch?v=vjf774RKrLc&ab_channel=DevEd)_

# Initial setup

1. ``git clone https://github.com/MrManiacc/tutorials.git - clones the repository (make sure you have git installed)``
2. ``cd tutorial\ #1/ - selects the first tutorial as the current folder``
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
```

# Review/writeup

Overall this tutorial was very good for me to learn how to use express along with mongodb, I used the video as a guide
as I didn't want to copy and paste word for word. I also experimented with the module export system and class creation
system, writing my own little wrapper around express and mongoose. This tutorial taught me how to use things like
nodemon that allow for file watching over your project and when you save a file it will automatically restart the
server. I also learned how to use [postman](https://www.postman.com/)
which is a useful tool for testing your endpoints.

Backend endpoints/routes were another foundational tool I had to learn. Through the use of
mongoose [models](util/model.js) I was able to create a full [posting system api](routes/posts.js). I learned how easy
it is to route certain paths to specific callback functions using express, and how you can easily implement a middleware
system such as [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html) that allows you to easily
send json requests to and from backend api. I learned how to use different request methods such as get, post, patch, and
delete. I also learned how to send status code and json as a response back to the client. It's all routed from the
main [app.js](app.js) file that is the main entry point inside the projects [package.json](package.json)