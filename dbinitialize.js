const mongoose = require('mongoose');

let mongo_url = 'mongodb://localhost:27017/express_sample';
if(process.env.NODE_ENV === 'production')
{
    mongo_url = 'mongodb://admin:admin@ds251849.mlab.com:51849/express_sample';
}

mongoose.connect(mongo_url);