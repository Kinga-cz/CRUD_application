import fs from "fs"
import path from "path"
import querystring from "querystring"
import url from "url"
import { getAll } from "../controllers/getAll.mjs"
import { addUser } from "../controllers/add.mjs"

const routesUser = (req, res) => {
    const { query } = url.parse(req.url)
    const arraypathname = url.parse(req.url).pathname.split("/")
    var pathname = ""
    for (let i = 2; i < arraypathname.length; i++) {
        pathname = ("/" + arraypathname[i]).trim()
    }

    console.log("routes users.js: " + pathname)

    switch (req.method) {
        case "GET":

            if (pathname == "/all") {
                getAll(req, res)
            } else if (pathname == "/one") {
                res.writeHead(200, { "Content-Type": "text/html" }) //zrób kontroler
                res.write("one")
                res.end()
            } else if (pathname == "/add") {
                addUser(req, res)
            } else if (pathname == "/remove") {
                res.writeHead(200, { "Content-Type": "text/html" }) //zrob kontroler
                res.write("remove")
                res.end()
            }
            break

    }
}
export { routesUser }