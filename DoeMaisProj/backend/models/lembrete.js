const mongoose = require ('mongoose');

const lembreteSchema = mongoose.Schema ({
campSelect: {type: String},
data: {type: String},
horario: {type: String},
local: {type: String},

});

module.exports = mongoose.model('Lembrete', lembreteSchema);