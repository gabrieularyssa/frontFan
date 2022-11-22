import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Loogin from './pages/login/login.jsx'
import Login from './pages/login/login.jsx'
// import Menu from './components/menuLateral/menu.jsx'
import Cadastro from './pages/cadastroColaboradores/cadastro.jsx'
import MetricasList from './pages/metricas/metricasList.jsx'
import Credencimento from './pages/credenciamento/credenciamento'
import CredenciamentoList from './pages/credenciamentoList/credenciamentoList'
import UsuariosList from './pages/usuariosList/usuariosList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Cadastro/> */}
    {/* <Login /> */}
    {/* <MetricasList /> */}
    {/* <Menu /> */}
    {/* <Credencimento /> */}
    {/* <CredenciamentoList /> */}
    {/* <UsuariosList /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/adm/login" element = {<Login />}/>
        <Route path="/adm/metricas" element = {<MetricasList />}/>
        <Route path="/adm/credenciamento" element = {<Credencimento/>}/>
        <Route path="/adm/credenciamento/lista" element = {<CredenciamentoList/>}/>
        <Route path="/adm/cadastro" element = {<Cadastro/>}/>
        <Route path="/adm/usuarios" element = {<UsuariosList/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
