const axios = require('axios')
const mapArrToString = require('../mapArrToString/mapArrToString')

const getData = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usersId = res.data.map(user => user.id)
        return mapArrToString(usersId)
    }catch(err) {

    }
}

module.exports = getData