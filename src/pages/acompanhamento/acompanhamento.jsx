import './acompanhamento.css'
import Menu from '../../components/menuLateral/menu'
import { useState, useEffect } from "react";
import { CustomersService } from '../../services/customersService'
import { Link, Navigate, useNavigate } from "react-router-dom";



function Acompanhamento(){
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
                            <section className="text">
                                <p>Total de credenciamento por colaborador</p>
                                <p>Selecione um colaborador e analise sua estatistica</p>
                            </section>
                        </div>
                        <div className="datadois">
                                {
                                    users.map((item, index)=>{
                                        return(
                                            <Link to="/adm/acompanhamento/dois">
                                                <section  key={item.id} className='nome'>
                                                    <p> {item.name}</p>
                                                </section>
                                            </Link>
                                        )
                                    })
                                }
                            
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Acompanhamento