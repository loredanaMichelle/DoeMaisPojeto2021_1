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

//agendamento
export interface Agendamento{
    id: string;
    cpfDoador: string;
    data: string;
    horario: string;
    local: string;
}