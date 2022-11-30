import './credenciamentoList.css'
import Menu from '../../components/menuLateral/menu'
import {FiEdit} from 'react-icons/fi'
import {MdAdd} from 'react-icons/md'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CustomersService } from '../../services/customersService'

function CredenciamentoList(){
    const [search, setSearch] = useState()
    const [users, setUsers] = useState([])
    useEffect(()=> {
        const getUsers = async () =>  {
            const data = await CustomersService.findAll()
            console.log(data)
            setUsers(data)
        }
        getUsers().catch((err)=> console.log(err))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const navigate = useNavigate();
    const btnAdd = (e) => {
        e.preventDefault()
        navigate("/adm/credenciamento")
    }
    return(
        <div className='container'>
            <Menu/>
            <div className="dataCad">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)}/>
                    </header>
                    <section>
                        <p>Credenciados</p>
                        <button onClick={btnAdd}> <MdAdd/> Adicionar </button>
                    </section>
                </form>
                    {/* para cada item na tabela criar um botao que faça requisição de metricas */}
                    <div className="clientes">
                        {
                            users.map((item, index)=>{
                                return(
                                    <section key={item.id} className='sectionList'>
                                        <span>{item.name}</span>
                                        <button><FiEdit/></button>
                                    </section>
                                )
                            })
                        }
                        
                    </div>
            </div> 
        </div>
    )
}

export default CredenciamentoList