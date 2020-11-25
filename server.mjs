import http from "http"
const PORT = process.env.PORT || 3000
import app from "./app.mjs"

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log("Server start port " + PORT);
})