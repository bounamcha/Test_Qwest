
const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    first_name: {
        type: String,
       
    },
    last_name: {
        type: String,
        
    },
    address: {
        type: String,
        
    },
    isActive: {
        type: Boolean,
    }
});

const Person = mongoose.model('Person', PersonSchema);

module.exports= Person ;
