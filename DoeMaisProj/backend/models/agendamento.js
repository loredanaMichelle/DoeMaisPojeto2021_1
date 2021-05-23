const mongoose = require ('mongoose');

const agendamentoSchema = mongoose.Schema ({
cpfDoador: {type: String},
data: {type: String},
horario: {type: String},
local: {type: String},

});

module.exports = mongoose.model('Agendamento', agendamentoSchema);