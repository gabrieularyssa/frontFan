import "./metricas.css";
import { useState, useEffect } from "react";
import Menu from "../../components/menuLateral/menu.jsx";
import MetricasCad from "./metricasCad";
import { UsersService } from "../../services/usersService";

function MetricasList() {
  const [search, setSearch] = useState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await UsersService.findAll();
      console.log(data);
      setUsers(data);
    };
    getUsers().catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefaul();
  };
  return (
    <div className="containerMetricas">
      <Menu />
      <div className="dataCadMetricas">
        <form className="dataformMetricas" onSubmit={handleSubmit}>
          <header>
            <input
              type="text"
              className="search"
              placeholder="🔍 Pesquise Aqui"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </header>
          <section>
            <p>Métricas</p>
          </section>
          {/* para cada item na tabela criar um botao que faça requisição de metricas */}
          <div className="clientesMetricas">
            {users.map((item, index) => {
              return (
                <details key={item.id}>
                  <summary>{item.name}</summary>
                  <MetricasCad metrics={item.metrics}/>
                </details>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
export default MetricasList;
