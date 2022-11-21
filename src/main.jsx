import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './components/login/login.jsx'
// import Menu from './components/menuLateral/menu.jsx'
// import Cadastro from './components/cadastroColaboradores/cadastro.jsx'
// import MetricasList from './components/metricas/metricasList.jsx'
// import Credencimento from './components/credenciamento/credenciamento'
// import CredenciamentoList from './components/credenciamentoList/credenciamentoList'
import UsuariosList from './components/usuariosList/usuariosList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Cadastro/> */}
    {/* <Login /> */}
    {/* <MetricasList /> */}
    {/* <Menu /> */}
    {/* <Credencimento /> */}
    {/* <CredenciamentoList /> */}
    <UsuariosList />
  </React.StrictMode>
)
