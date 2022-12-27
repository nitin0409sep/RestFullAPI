const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/Olympics").then(() => {
    console.log("Connecton Successfull");
}).catch((err) => {
    console.log(err);
})