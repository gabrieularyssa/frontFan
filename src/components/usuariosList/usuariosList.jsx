// import './usuariosList.css'
import '../credenciamentoList/credenciamentoList.css'
import {FiEdit} from 'react-icons/fi'
import {MdAdd} from 'react-icons/md'
import { useState } from 'react'
import Menu from '../menuLateral/menu'

function UsuariosList(){
    const [search, setSearch] = useState()
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
                        <p>Listagem de Usuários</p><button><MdAdd/> Adicionar</button>
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