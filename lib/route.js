// lib/route.js

"use strict";

class Routes {
    constructor(app) {
        this.app = app;
    }

    setRoute(location) {
        location.map((x, i) => {
            let route = require(x.path);
            this.app.use(x.route, route);
        })
        return true;
    }
}

module.exports = Routes;