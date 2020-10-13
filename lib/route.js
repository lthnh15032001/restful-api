// lib/route.js

"use strict";

class Routes {
    constructor(app) {
        this.app = app;
        this.path = require("path");
        this.fs = require("fs")
    }
    setRoute() {
        const fullLocation = this.path.join(__dirname, '../routes');
        this.fs.readdir(fullLocation, (err, files) => {
            if (err) return;
            files.map((x, i) => {
                let fileNameWithoutExt = x.split(".")[0]
                let pathRequire = "../routes/" + fileNameWithoutExt
                let path = require(pathRequire)
                let route = fileNameWithoutExt === "index" ? "/" : "/" + fileNameWithoutExt
                this.app.use(route, path);
            })
        })
        return true;
    }
}

module.exports = Routes;