import './acompanhamento.css'
import Menu from '../../components/menuLateral/menu'
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Acompanhamento(){
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const [search, setSearch] = useState();
    return(
        <div className="container">
            <Menu />
            <div className="acompanhamento">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </header>
                    <section>
                        <p>Acompanhamento</p>
                    </section>
                </form>
                <div className="data">
                        <div className="dataum">
                            <section className='chart'>
                                <img src="../../../src/images/chart.png" alt="" />
                            </section>
                            <section className="text">
                                <p>Total de credenciamento por colaborador</p>
                                <p>Selecione um colaborador e analise sua estatistica</p>
                            </section>
                        </div>
                        <div className="datadois">
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                            <Link to="">
                                <section className='nome'>
                                    <p>Nome completo do usuario para analise</p>
                                </section>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Acompanhamento