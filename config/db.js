const mongoose = require("mongoose");
const keys=require("./keys")

async function dbConnect() {
        try {
                mongoose.connect(
                        keys.MONGO_URI,
                        {
                            useCreateIndex: true,
                            useFindAndModify:true,
                            useUnifiedTopology: true,
                            useNewUrlParser: true,
                        },
                        (err) => {
                                if (err) {
                                        throw err;
                                }
                                console.log("DB is connected");
                        }
                );
                //console.log("connection is successful");
        }
        catch (err) {
                console.log("No connection");
        }
}
dbConnect();