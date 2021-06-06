export interface Campanha {
    cnpjInsti: String,
    titulo: String,
    tipoSang: String,
    dataIni: String,
    dataFim: String,
    horaIni: String,
    horaFim: String,
    local: String

}

//lembrete
export interface Lembrete{
    id: string;
    campSelect: string;
    data: string;
    horario: string;
    local: string;
}