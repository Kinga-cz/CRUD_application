import fs from "fs"
import path from "path"
import querystring from "querystring"
import url from "url"
import { arrayData } from "../../UsersData.mjs"

const removeUser = (req, res) => {
    let body = ""
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        console.log(body)
        if (req.headers["content-type"] == "application/json") {
            const parsedBody = JSON.parse(body)
            console.log(parsedBody.id)
            console.log(arrayData[0].id)
            const indexToDelete = arrayData.findIndex(u => u.id == parsedBody.id)
            console.log(indexToDelete)
            if (indexToDelete != -1) {
                arrayData.splice(indexToDelete, 1)
            }
        }
        res.statusCode = 200
        res.end()
    })
}

export { removeUser }