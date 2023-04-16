import React from 'react';

export default function QuerieCard({
    nomePaciente,
    sobrenomePaciente,
    nomeDentista,
    sobrenomeDentista,
    agendamento,
}) {
    return (
        <>
            <div>
                <h1>Consulta Marcada</h1>
                <div>
                    <h2>Paciente</h2>
                    <h2>
                        Nome: {nomePaciente} {sobrenomePaciente}
                    </h2>
                </div>
                <div>
                    <h2>Dentista</h2>
                    <h2>
                        Nome: {nomeDentista} {sobrenomeDentista}
                    </h2>
                </div>
                <div>
                    <h2>Data e hora do agendamento</h2>
                    <h2>{agendamento}</h2>
                </div>
            </div>
        </>
    );
}