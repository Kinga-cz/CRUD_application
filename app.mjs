import fs from "fs"
import path from "path"
import querystring from "querystring"
import url from "url"

const app = (req, res) => {
    const { query } = url.parse(req.url)
    const arraypathname = url.parse(req.url).pathname.split("/")
    var pathname = ("/" + arraypathname[1]).trim()

    // let result = arraypathname.map((a) => "/" + `${a}`);
    // console.log(result) // coś innego ale nie przydatne 

    const extension = path.extname(req.url)
    console.log(pathname)

    switch (req.method) {
        case "GET":
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
            break

    }
}

export default app