import './acompanhamentodois.css'
import Menu from '../../components/menuLateral/menu'
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CustomersService } from '../../services/customersService'

function AcompanhamentoDois(){

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const [users, setUsers] = useState([])
    useEffect(()=> {
        const getUsers = async () =>  {
            const data = await CustomersService.findAll()
            console.log(data)
            setUsers(data)
        }
        getUsers().catch((err)=> console.log(err))
    }, [])
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
                <div className="dataa">
                        <div className="dataum">
                            <section className='chart'>
                                <img src="../../../src/images/chart.png" alt="" />
                            </section>
                            <section className="chart">
                                <img src="../../../src/images/chart.png" alt="" />
                                <Link to='/adm/acompanhamento/detalhe'>
                                    <button>Detalhes</button>
                                </Link>
                            </section>
                        </div>
                        <div className="datadois">
                            <Link to='/adm/acompanhamento/detalhe'>
                                {
                                    users.map((item, index)=>{
                                        return(
                                            <section className='nome' key={item.id}>
                                                <p>{item.name}</p>
                                            </section>
                                        )
                                    })
                                }
                            </Link>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}



export default AcompanhamentoDois