"use strict";

class Server {
    constructor(express) {
        this.express = express;
        this.app = express();
        this.config = require("../config/config");
    }

    initDb() {
        const Database = require("./database");
        let database = new Database();

        database.connect();
    }

    initRoutes() {
        const Route = require("./route");
        const route = new Route(this.app);
        route.setRoute(
            [
                { path: "../routes/general", route: "/" },
                { path: "../routes/users", route: '/users' }
            ]
        );
        return true;
    }

    initViews() {
        const View = require("./view");
        const view = new View(this.express, this.app);

        view.setViewsLocation("../views");
        view.setViewEngine("ejs");
        view.setStaticLocation("../public");

        return true;
    }

    run() {
        this.app.listen(this.config.db.port);
    }
}

module.exports = Server;