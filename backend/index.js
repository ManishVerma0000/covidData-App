const express = require('express');
const app = express();
const port = 5000;
const csvjson = require('csvtojson');
const cors = require('cors');
const connection = require('./db/conn');
const user = require('./schema/userSchema')
connection()
app.use(cors());
app.use(express.json())
app.get('/data', (req, res) => {

    const csvpath = 'states.csv'
    csvjson().fromFile(csvpath).then((data) => {
        // console.log(data.slice(0, 5))
        res.send(data.slice(0, 200))
    })

})

app.post("/register", async (req, res) => {
    console.log(req.body)

    const { email, name, password, cpassword, phone } = req.body;
    console.log(req.body)
    if (!email || !name || !password || !cpassword || !phone) {
        res.status(400).send({ message: "please enter the details" })
    } else {
        const existUser = await user.find({ email: email });
        console.log(existUser)
        if (existUser) {
            if (password !== cpassword) {
                res.status(400).send({ message: "password is not matching" })
            } else {
                const saveuser = await user.create(req.body);
                console.log(saveuser);
                res.status(200).send({ message: "login is successful", data: saveuser })
            }
        } else {


            res.status(400).send({ message: "user is already exist" })
        }

    }

})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send({ message: "please enter the details" })
    } else {
        const finduser = await user.find({ email: email });

        if (finduser) {
            const matchpassword = finduser[0].password;
            if (matchpassword === password) {
                res.status(200).send({ message: "user is login successful" })
            } else {
                res.status(400).send({ message: "please register here" })
            }
        } else {
            res.status(400).send({ message: "user is not registered please login" })
        }
        
     


    }

})



app.listen(port, () => {
    console.log(`server is listen to the port on https://localhost:${port}`)
})
