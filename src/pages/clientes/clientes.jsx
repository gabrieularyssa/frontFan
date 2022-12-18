import './clientes.css'
import Menu from '../../components/menuLateral/menu'
import {Link, Navigate,  useNavigate } from 'react-router-dom'
import {MdAdd} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { CustomersService } from '../../services/customersService'

function Cliente(){
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
    const navigate = useNavigate();
    const btnAdd = (e) => {
        e.preventDefault()
        navigate("/adm/credenciamento")
    }
    const handleSubmit = () => {
        return True
    }
    return(
        <div className='container'>
            <Menu />
            <div className="dataCliente">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)}/>
                    </header>
                    <section>
                        <p>Clientes</p>
                        <div className="btns">
                            <Link to='' className='a'>
                                <img src="../../../src/images/vector.png" alt="" />
                            </Link>
                            <select name="date" className='date'>
                                <option value="">Semana</option>
                                <option value="">Mês</option>
                                <option value="">Ano</option>
                            </select>
                            <button className='add' onClick={btnAdd}><MdAdd/>Adicionar</button>
                        </div>
                    </section>
                </form>
                <section className='containerDetail'>
                    <div className='details'>
                        <section>
                            <p>Clientes com mais vendas</p>
                            {/* <iframe title="BASE DE DADOS BI 2022 FANCARD CB" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=6c712091-6f05-4c22-9bd7-aafcd34e6826&autoAuth=true&ctid=81700664-f435-4316-89ef-6147d2bc6bad" frameborder="0" allowFullScreen="true"></iframe> */}
                        </section>
                        <section>
                            <p>Clientes por estado</p>
                        </section>
                        <section>
                            <p>Clientes por bandeira</p>
                        </section>
                    </div>
                    <div className='details'>
                        <section className='clientesLista'>
                            {
                                users.map((item, index)=>{
                                    return(
                                        <div key={item.id} className="clienteNome">
                                            <span>{item.name}</span>
                                            <button className='edit'><FiEdit/></button>
                                        </div>
                                    )
                                })
                            }
                        </section>
                        <section className='calendario'>
                            <p>CALENDARIO</p>
                        </section>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Cliente