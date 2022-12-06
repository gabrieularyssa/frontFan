import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// import Loogin from './pages/login/login.jsx'
import Login from './pages/login/login.jsx'
// import Menu from './components/menuLateral/menu.jsx'
import Cadastro from './pages/cadastroColaboradores/cadastro.jsx'
import MetricasList from './pages/metricas/metricasList.jsx'
import Credencimento from './pages/credenciamento/credenciamento'
import CredenciamentoList from './pages/credenciamentoList/credenciamentoList'
import UsuariosList from './pages/usuariosList/usuariosList'
import Financeiro from './pages/financeiro/financeiro';
import FinanceiroList from './pages/financeiroList/financeiroList';
import FinanceiroDetail from './pages/financeiroDetail/financeiroDetail';
import Acompanhamento from './pages/acompanhamento/acompanhamento';
import AcompanhamentoDois from './pages/acompanhamentodois/acompanhamentodois';
import AcompanhamentoDetalhe from './pages/acompanhamentoDetalhe/acomapanhamentoDetalhe';
import Home from './pages/home/home';
import './index.css'
import { AuthProvider } from './contexts/auth/AuthContext';

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
      <AuthProvider>
        <Routes>
          <Route path="/" element= {<Navigate to="/adm/login"/>}/>
          <Route path="/adm/login" element = {<Login />}/>
          <Route path="/adm/metricas" element = {<MetricasList />}/>
          <Route path="/adm/credenciamento" element = {<Credencimento/>}/>
          <Route path="/adm/credenciamento/lista" element = {<CredenciamentoList/>}/>
          <Route path="/adm/cadastro" element = {<Cadastro/>}/>
          <Route path="/adm/usuarios" element = {<UsuariosList/>}/>
          <Route path="/adm/financeiro" element = {<Financeiro />}/>
          <Route path="/adm/financeiro/lista" element = {<FinanceiroList />}/>
          <Route path="/adm/financeiro/detalhe" element = {<FinanceiroDetail />}/>
          <Route path="/adm/acompanhamento" element = {<Acompanhamento />}/>
          <Route path="/adm/acompanhamento/dois" element = {<AcompanhamentoDois />}/>
          <Route path="/adm/acompanhamento/detalhe" element = {<AcompanhamentoDetalhe />}/>
          <Route path="/adm/inicio" element = {<Home />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
