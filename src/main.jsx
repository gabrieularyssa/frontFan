import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
// import AlarmAddIcon from '../node_modules/@mui/icons-material/AlarmAdd';
// import Login from './components/login/login.jsx'
// import Menu from './components/menuLateral/menu.jsx'
// import Cadastro from './components/cadastroColaboradores/cadastro.jsx'
// import MetricasCad from './components/metricas/metricasCad.jsx'
import MetricasList from './components/metricas/metricasList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Menu /> */}
    {/* <Cadastro/> */}
    {/* <Login /> */}
    {/* <MetricasCad /> */}
    <MetricasList />
  </React.StrictMode>
)
