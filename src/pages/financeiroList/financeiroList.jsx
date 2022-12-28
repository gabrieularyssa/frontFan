import './financeiroList.css'
import Menu from '../../components/menuLateral/menu'
import { Link, Navigate, useNavigate } from "react-router-dom";
import {AiOutlineEye} from 'react-icons/ai'
import { CustomersService } from '../../services/customersService'
import { useEffect, useState } from 'react'
import {FiEdit} from 'react-icons/fi'



function FinanceiroList(){
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
    const navigate = useNavigate()
    const btnEye = (e) => {
        e.preventDefault()
        navigate("/adm/financeiro/detalhe")
        
    }
    return(
        <div className="container">
            <Menu />
            <div className="clienteDetail">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)}/>
                    </header>
                    <section>
                        <p>Financeiro</p>
                    </section>
                </form>
                {users.map((item, index)=>{
                    return(
                        <Link to="/adm/financeiro/detalhe" className='financeiro'>
                            <section key={item.id} className='sectionList'>
                                <span>{item.name}</span>
                                <button><FiEdit/></button>
                            </section>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default FinanceiroList