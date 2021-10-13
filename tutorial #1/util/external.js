require("dotenv/config");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

/**
 * This is used as a wrapper around express
 */
class Application {
    constructor(port) {
        this._port = port == null ? 3000 : port;
        this._app = express();
    }

    /**
     * This will start express listening on the given port
     * @param callback
     */
    listen(callback) {
        this._app.listen(this._port, callback == null ? () => console.log("started listening on port " + this._port) : callback)
    }

    /**
     * This is a simple redirect for the use method that allows us to route paths through
     * the route using the specified path
     * @param path the path to map the route to
     * @param route the required route to send traffic through
     */
    route(path, route) {
        this._app.use(path, route);
    }

    /**
     * This uses body parser to parse the json body of requests
     */
    json() {
        this._app.use(bodyParser.json())
    }

}

/**
 * This is used to create and share connections to the database
 * @type {Database}
 */
class Database {
    constructor(uri) {
        if (uri != null) this._uri = uri;
        else this._uri = process.env.DB_CONNECTION;
    }

    /**
     * This is used to connect to the database
     * @param callback
     */
    connect(callback) {
        if (callback != null)
            mongoose.connect(this._uri, callback)
        else
            mongoose.connect(this._uri, () => console.log("connected to database"));
    }


}

/**
 * This is used to expose the database and express instances to the app class to keep it clean
 * @type {{Express: e | (() => Express), Database: Database}}
 */
module.exports = {Database: Database, App: Application}