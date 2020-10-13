import { arrayData } from "../../UsersData.mjs"

const getAll = (req, res) => {
    try {
        res.writeHead(200, { "Content-Type": "application/json" })
        console.log(arrayData)
        res.end(JSON.stringify({ arrayData }))
    } catch (err) {
        res.statusCode = 500
        res.end(JSON.stringify({ err: err.toString() }))
    }
}

export { getAll }