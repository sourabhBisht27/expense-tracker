module.exports = {
    getJwt() {
        const jwt = {
            JWT_AUDIENCE: process.env.JWT_AUDIENCE,
            JWT_ISSUER: process.env.JWT_ISSUER,
            JWT_SECRET: process.env.JWT_SECRET
        }
        if (!jwt.JWT_SECRET || !jwt.JWT_ISSUER || !jwt.JWT_AUDIENCE) {
            throw new Error("JWT config missing")
        }
        return jwt;
    },
    getMongoDbConfig() {
        const dbUrl = process.env.MONGO_URI;
        if (!dbUrl) {
            throw new Error("Mongodb config missing")
        }
        return { dbUrl, };
    }
}