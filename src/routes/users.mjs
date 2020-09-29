import fs from "fs"
import path from "path"
import querystring from "querystring"
import url from "url"

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

            if (pathname == "/one") {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.write("brawo")
                res.end()
            }
            break

    }
}
export { routesUser }