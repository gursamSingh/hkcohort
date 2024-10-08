// Creating an HTTP Server using Express

const express = require("express");

const app = express();

const users = [{
        name: "gursam",
        kidneys : [{
            healthy: false
        }]

}];

app.use(express.json()); // This is used for sending post request (and read json)

app.get("/", function (req, res) {
    const kidneys = users[0].kidneys;
    const numberOfKidneys = kidneys.length

    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < numberOfKidneys; i++){
        if (kidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        message: "Done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({});
})

app.delete("/", function (req, res) {

    const newKidneys = [];

    for (let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.json({ "msg": "DONE!" });
})


app.listen(3000);