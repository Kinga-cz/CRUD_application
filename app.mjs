import fs from "fs"
import path from "path"
import querystring from "querystring"
import url from "url"
import { routesUser } from "./src/routes/users.mjs"

const app = (req, res) => {
    const { query } = url.parse(req.url)
    const arraypathname = url.parse(req.url).pathname.split("/")
    var pathname = ("/" + arraypathname[1]).trim()

    // let result = arraypathname.map((a) => "/" + `${a}`);
    // console.log(result) // coś innego ale nie przydatne 

    const extension = path.extname(req.url)
    console.log("app.mjs: " + pathname)

    if (pathname == "/") {
        fs.readFile(path.join(".", "src", "public", "index.html"), (err, file) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(file)
            res.end()
        })
    }
    else if (extension == ".css") {
        fs.readFile(path.join(".", "src", "public", pathname), (err, file) => {
            res.writeHead(200, { "Content-Type": "text/css" })
            res.write(file)
            res.end()
        })

    }
    else if (pathname == "/getData") {
        fs.readFile(path.join(".", "src", "public", "showData.html"), (err, file) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(file)
            res.end()
        })
    } else if (pathname == "/createUser") {
        fs.readFile(path.join(".", "src", "public", "createForm.html"), (err, file) => {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(file)
            res.end()
        })
    }
    else if (pathname == "/users") {
        routesUser(req, res)
    }


}

export default app