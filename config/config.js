require('dotenv/config')
const defaults = {
    server: {
        port: 8080
    },
    db: {
        host: "localhost",
        port: 27017
    }
};
const config = {
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST || defaults.db.host,
        port: parseInt(process.env.DB_PORT) || defaults.db.port,
        database: process.env.DB_DATABASE
    }
}
// export default config;
module.exports = config;
