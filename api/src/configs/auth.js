module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "foodExplorerPR",
        expiresIn: "1d"
    }
}