const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');

const usuarioLogSchema = mongoose.Schema({
email: {type: String, required: true, unique: true},
password: {type: String, required: true}
});
usuarioLogSchema.plugin(uniqueValidator);
module.exports = mongoose.model("UsuarioLog", usuarioLogSchema);