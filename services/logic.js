//import db
const { response } = require('express')
const db = require('./db')


const login = (username, password,year) => {
    return db.Login.findOne({ username, password ,year}).then((response) => {
        console.log(response);//full details
        if (response) {
            //if username and password are present in db
            return{
                statusCode:200,
                message:"Login Successful"
            }
        }

        //username and password  are not present in db
        else{
            return{
                statusCode:401,
                message:"Invalid deatails"
            }
        }
    })
}


module.exports={
    login
}
