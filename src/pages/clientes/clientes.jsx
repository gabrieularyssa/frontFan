import './clientes.css'
import Menu from '../../components/menuLateral/menu'
import {Link} from 'react-router-dom'
import {MdAdd} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'

function Cliente(){
    const handleSubmit = (e) => {
        e.preventDefault()
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
                            <button className='add'><MdAdd/>Adicionar</button>
                        </div>
                    </section>
                </form>
                <section className='containerDetail'>
                    <div className='details'>
                        <section>
                            <p>Clientes com mais vendas</p>
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
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
                            <div className="clienteNome">
                                <span>Nome do Cliente</span>
                                <button className='edit'><FiEdit/></button>
                            </div>
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