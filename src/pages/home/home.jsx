import './home.css'
import Menu from '../../components/menuLateral/menu'
import {Link} from 'react-router-dom'
import {MdAdd} from 'react-icons/md'


function Home(){
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div className='container'>
            <Menu />
            <div className="dataHome">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)}/>
                    </header>
                    <section>
                        <p>Bem-vindo ao Clube de Benefícios do Grupo Fan!</p>
                        <div className="barra">
                            <Link to='/adm/cadastro' className='a'>
                                <img src="../../../src/images/vector.png" alt="" />
                            </Link>
                            <select name="date">
                                <option value="">Semana</option>
                                <option value="">Mês</option>
                                <option value="">Ano</option>
                            </select>
                        </div>
                    </section>
                </form>
                <section className="mapa">
                    <img src="../../../src/images/image10.png" alt="" />
                </section>
            </div>
        </div>
    )
}

export default Home