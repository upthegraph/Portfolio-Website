const mongoose = require('mongoose');

const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection ${err}`));