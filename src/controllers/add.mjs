
import url from "url"

const addUser = (req, res) => {
    const query = url.parse(req.url, true).query // method get

    console.log(query)


    res.writeHead(302, { 'location': '/' })

    res.end()
}

export { addUser }