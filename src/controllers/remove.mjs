import fs from "fs"
import path from "path"
import querystring from "querystring"
import url from "url"

const removeUser = (req, res) => {
    const { query } = url.parse(req.url) // method get

    res.writeHead(200, { "Content-Type": "text/html" })
    res.write("remove")
    res.end()
}

export { removeUser }