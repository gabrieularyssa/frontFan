import './acompanhamentoDetalhe.css'
import Menu from '../../components/menuLateral/menu'
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function AcompanhamentoDetalhe(){
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const [search, setSearch] = useState();
    return(
        <div className='container'>
            <Menu />
            <div className="acompanhamento">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </header>
                    <section>
                        <p>Acompanhamento Detalhado</p>
                    </section>
                </form>
                <div className="dataDetalhe">
                    <div className="dataChart">
                        <section className='chart'>
                            <img src="../../../src/images/chart.png" alt="" />
                        </section>
                        <section className='chart'>
                            <img src="../../../src/images/chart.png" alt="" />
                        </section>
                    </div>
                    <div className="dataContato">
                        <div className="label">
                            <h2>Formas de Contato</h2>
                            <ul>
                                <li className='op1'>Mensagens</li>
                                <li className='op2'>Ligações</li>
                                <li className='op3'>Reuniões</li>
                            </ul>
                        </div>
                        <img src="../../../src/images/Group.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcompanhamentoDetalhe