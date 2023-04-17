import { useEffect, useState, useContext } from 'react';
import styles from './ScheduleForm.module.css';
import api from '../../services/api';
import ThemeContext, { themes } from '../../contexts/theme-context';

const ScheduleForm = () => {
  useEffect(() => {
    getData();
    getToken();
  }, []);

  const [paciente, setPaciente] = useState([]);
  const [dentista, setDentista] = useState([]);
  const [token, setToken] = useState('');

  const {theme, handleChangeTheme} = useContext(ThemeContext);

  async function getData() {
    try {
      const response = await api.get('/paciente');
      setPaciente(response.data.body);
      const response2 = await api.get('/dentista');
      setDentista(response2.data);
    } catch (error) {
      console.log(error);
    }
  }

  function getToken() {
    const tokenStore = localStorage.getItem('@times_token');
    if (tokenStore === '') {
      console.log('Sem o token');
    }
    setToken(tokenStore);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('/consulta', {
        paciente,
        dentista,
      },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@times_token")}`,
          }
        },);
      setPaciente(response.data);
      alert('Consulta marcada');
    } catch (error) {
      console.log(error);
      alert('Erro ao marcar consulta');
    }
  }
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      {console.log(paciente)}
      <div className={`text-center container ${theme === themes.dark ? '${styles.cardDark}' : ''}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
              >
                {dentista.map(dados => (
                  <option
                    key={dados.matricula}
                    value={dados.matricula}
                  >
                    {`${dados.nome} ${dados.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
              >
                {paciente.map(dado => (
                  <option
                    key={dado.matricula}
                    value={dado.matricula}
                  >
                    {`${dado.nome} ${dado.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label
                htmlFor="appointmentDate"
                className="form-label"
              >
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn ${styles.button} ${theme === themes.dark ? 'btn-dark' : 'btn-light'}`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;