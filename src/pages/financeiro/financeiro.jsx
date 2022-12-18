import './financeiro.css'
import Menu from '../../components/menuLateral/menu'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Financeiro(){
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const navigate = useNavigate()
    const clientDetail = (e) => {
        e.preventDefault()
        navigate("/adm/financeiro/lista")
    }
    const [search, setSearch] = useState();
    return(
        <div className="container">
            <Menu />
            <div className="financeiroGeral">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </header>
                    <section>
                        <p>Indicadores financerios </p>
                        <button> Exportar Arquivo de Rede </button>
                        <button> Exportar </button>
                    </section>
                </form>
                <div className="charts">
                    <iframe title="BASE DE DADOS BI 2022 FANCARD CB" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=6c712091-6f05-4c22-9bd7-aafcd34e6826&autoAuth=true&ctid=81700664-f435-4316-89ef-6147d2bc6bad" frameborder="0" allowFullScreen="true"></iframe>
                </div>
                <div className="btn">
                    <button onClick={clientDetail}>Detalhe Por Cliente</button>
                </div>
            </div>
        </div>
    )
}

export default Financeiro