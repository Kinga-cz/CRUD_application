
import { arrayData } from "../../UsersData.mjs"

const updateUser = (req, res) => {
    let body = ""
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        //console.log(body)
        if (req.headers["content-type"] == "application/json") {
            const parsedBody = JSON.parse(body)

            const indexToUpdate = arrayData.findIndex(u => u.id == parsedBody.id)
            console.log(indexToUpdate)
            if (indexToUpdate != -1 && parsedBody.fieldValue.length != 0) {
                console.log(arrayData[indexToUpdate][parsedBody.field])
                arrayData[indexToUpdate][parsedBody.field] = parsedBody.fieldValue
                res.statusCode = 200
                res.end()
            }
            else {
                res.statusCode = 422
                res.end()
            }
        }

    })
}

export { updateUser }