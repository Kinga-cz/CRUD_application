import fs from "fs"
import path from "path"
import querystring from "querystring"
import url from "url"
import { getAll } from "../controllers/getAll.mjs"
import { getOne } from "../controllers/getOne.mjs"
import { addUser } from "../controllers/add.mjs"
import { removeUser } from "../controllers/remove.mjs"


/// obłsuga błędów na serwerze (try catch) do zrobienia, responsywność strony, lepszy design, zmiana kodu na nowsze podejście, jquery, mongoose - baza dancych
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
            }
            break
        case "POST":
            if (pathname == "/add") {
                addUser(req, res)
            }
            if (pathname == "/one") {
                getOne(req, res)
            }
            break
        case "DELETE":
            if (pathname == "/remove") {
                removeUser(req, res)
            }
    }

}
export { routesUser }