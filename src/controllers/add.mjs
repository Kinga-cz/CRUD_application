import { arrayData } from "../../UsersData.mjs"
import url from "url"

function isEmpty(obj) { // czy tą validacje robić w html czy na serwerze
    if (obj === null || Object.keys(obj).length === 0) throwErr('null');
    else if (!Array.isArray(obj) && typeof obj !== 'object') throwErr(typeof obj);
    var empty = true;
    for (var property in obj) {
        empty = false;
        if (obj[property] == null) {
            return true;
        }
        if (obj[property].constructor == String && obj[property].length == 0) {
            return true;
        }
    }
    return empty;
}

function throwErr(type) {
    throw new TypeError('Expected Array, Object, got ' + type);
}


const addUser = (req, res) => {

    var body = '';

    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {
        var parsedBody = JSON.parse(body)
        console.log("parsed: " + parsedBody)
        var ob = {
            id: arrayData[arrayData.length - 1].id + 1,
            name: parsedBody.name,
            surname: parsedBody.surname,
            age: parseInt(parsedBody.age),
            email: parsedBody.email,
            phoneNumber: parseInt(parsedBody.phoneNumber)
        }
        console.log(ob)

        if (!isEmpty(ob)) {
            arrayData.push(ob)
            console.log(arrayData)
            res.writeHead(302, { 'location': '/' })
            res.end()
        }
        // else {
        //     res.statusCode = 422
        //     res.write("error 422") // to dodasz w promisie??
        //     res.end()
        // }
    });


}

export { addUser }