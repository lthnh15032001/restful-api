"use strict";

class Database {
    constructor() {
        this.mongoose = require("mongoose");
        this.config = require("../config/config");
    }

    connect() {
        let dbUser = encodeURIComponent(this.config.db.username);
        let dbPass = encodeURIComponent(this.config.db.password);
        console.log(this.config.db.username)
        let dbHost = this.config.db.host;
        // let dbPort = this.config.db.port;
        let dbDatabase = encodeURIComponent(this.config.db.database);
        // mongodb+srv://dat:5384264328@cluster0-eckr0.mongodb.net/creditScoringApp
        // let mongoUri = `mongodb+srv://${dbUser}:${dbPass}@${dbPort}/${dbDatabase}`;
        let mongoUri = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbDatabase}`;
        this.mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
            if (error) {
                console.error(error);
                console.log("not ok connect server", { mongoUri: mongoUri })
                return false;
            }
            else {
                console.log("ok connect server", { mongoUri: mongoUri })
                return true;
            }
        });
    }

    disconnect() {
        this.mongoose.connection.close(function (error) {
            if (error) {
                console.error(error);
                return false;
            }

            return true;
        });
    }
}

module.exports = Database;