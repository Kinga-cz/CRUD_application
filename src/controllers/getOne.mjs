import fs from "fs"
import path from "path"
import querystring from "querystring"
import { arrayData } from "../../UsersData.mjs"
import url from "url"

const getOne = (req, res) => {
    let body = ""
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        console.log(body)
        if (req.headers["content-type"] == "application/json") {
            const parsedBody = JSON.parse(body)

            const indexToShow = arrayData.findIndex(u => u.id == parsedBody.id)
            console.log(indexToShow)
            if (indexToShow != -1) {
                res.statusCode = 200
                console.log(arrayData[indexToShow])
                res.end(JSON.stringify(arrayData[indexToShow]))
            }
            else {
                res.statusCode = 422
                res.end(JSON.stringify({
                    id: "",
                    name: "",
                    surname: "",
                    age: "",
                    email: "",
                    phoneNumber: ""
                }))

            }
        }

    })
}

export { getOne }