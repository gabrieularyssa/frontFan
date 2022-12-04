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
                    <section className='chart'><img src="../../../src/images/chart1.png" alt="" /></section>
                    <section className='chart'><img src="../../../src/images/chart2.png" alt="" /></section>
                    <section className='chart'><img src="../../../src/images/chart3.png" alt="" /></section>
                    <section className='chart'><img src="../../../src/images/chart4.png" alt="" /></section>
                    <section className='chart'><img src="../../../src/images/chart5.png" alt="" /></section>
                    <section className='chart'><img src="../../../src/images/chart6.png" alt="" /></section>
                </div>
                <div className="btn">
                    <button onClick={clientDetail}>Detalhe Por Cliente</button>
                </div>
            </div>
        </div>
    )
}

export default Financeiro