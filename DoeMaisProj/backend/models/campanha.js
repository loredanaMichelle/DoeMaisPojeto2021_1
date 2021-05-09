const mongoose = require ('mongoose');

const campanhaSchema = mongoose.Schema ({
cnpjInsti: {type: String},
titulo: {type: String},
tipoSang: {type: String},
dataIni: {type: String},
dataFim: {type: String},
horaIni: {type: String},
horaFim: {type: String},
local: {type: String}

});

module.exports = mongoose.model('Campanha', campanhaSchema);