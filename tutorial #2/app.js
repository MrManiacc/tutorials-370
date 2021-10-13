// imports used for database and express calls
const {Database, App} = require("./util/external")
//Instance variables
const app = new App(3000);
const db = new Database()

/**============ Routes/Middleware ===============**/
app.json();
app.route('/api', require('./routes/posts'))
app.route('/api', require('./routes/user'))

/** Start the connection to the database using
 the private connection string from the .env file **/
db.connect()
/** Start listening on port 3000 **/
app.listen();