import { useState, useEffect } from 'react';
import QuerieCard from '../Components/Querie/QuerieCard';
import api from '../services/api';

export default function Queries() {
    const [data, setdata] = useState([]);

    async function get() {
        try {
            const response = await api.get('/consulta');
            setdata(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get();
    }, []);

    return (
        <ul>
            {data.map(dados => (
                <QuerieCard
                    agendamento={dados.dataHoraAgendamento}
                    nomeDentista={dados.dentista.nome}
                    nomePaciente={dados.paciente.nome}
                    sobrenomeDentista={dados.dentista.sobrenome}
                    sobrenomePaciente={dados.paciente.sobrenome}
                    key={dados.paciente.matricula}
                />
            ))}
        </ul>
    );
}