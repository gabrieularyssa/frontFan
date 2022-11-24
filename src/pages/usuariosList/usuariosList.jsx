import './usuarioList.css'
import {FiEdit} from 'react-icons/fi'
import {MdAdd} from 'react-icons/md'
import { useEffect, useState } from 'react'
import Menu from '../../components/menuLateral/menu'
import {Link} from 'react-router-dom'
import { UsersService } from '../../services/usersService'

function UsuariosList(){
    const [search, setSearch] = useState()
    const [users, setUsers] = useState([]) 
    useEffect(() => {
        const getUsers = async () => {
        const data = await UsersService.findAll()
        console.log(data)
    }
        
        getUsers().catch((err)=> console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefaul()
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
                        <p>Listagem de Usuários</p>
                        <Link to='/adm/cadastro'>
                            <button><MdAdd/> Adicionar</button>
                        </Link>
                    </section>
                </form>
                    {/* para cada item na tabela criar um botao que faça requisição de metricas */}
                    <div className="clientes">
                        <section className='sectionList'>
                            <span>Nome completo do usuario cadastrado</span>
                            <button><FiEdit/></button>
                        </section>
                    </div>
            </div> 
        </div>
    )
}

export default UsuariosList