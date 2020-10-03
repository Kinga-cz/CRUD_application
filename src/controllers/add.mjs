import { data } from "../../UsersData.mjs"
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
            console.log(obj[property].constructor == String) // a tu wyswietla true WTF?
            console.log("property: " + property)
            return true;
        }
    }
    return empty;
}

function throwErr(type) {
    throw new TypeError('Expected Array, Object, got ' + type);
}

// query.constructor == Object pomimo tego że query jest obiektem zwraca undefined why?
const addUser = (req, res) => {
    const query = url.parse(req.url, true).query // method get

    if (!isEmpty(query)) { //potestuj działanie tej funkcji jeszcze 
        //utworz nowy obiekt z właściwowościami query i sprawdz poniższe problemy:
        // console.log("property name: " + query.hasOwnProperty('name')) // NIE DZIALA czemu? 
        //data.push(query) 
        //console.log(" czy query["name"].constructor == String jest true (przy pustych properties): " + query["name"].constructor == String) tu wyswietla false Dleczego?
        console.log(query)
        res.writeHead(302, { 'location': '/' })
        res.end()
    }
    // else {
    //     res.statusCode = 400
    //     res.write("Fill every fields in form")
    //     res.end()
    // }

}

export { addUser }