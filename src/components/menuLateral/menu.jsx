import './menu.css'
// import AiOutlineHome from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';  
import { AiOutlineUser } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { CiMoneyBill } from 'react-icons/ci'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { SlGraph } from 'react-icons/sl'
import { HiOutlineIdentification } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Menu(){
    return(
            <div className="menu-vert">
                <section className='logo'>
                    <img src="../../../src/images/logo.png"/>
                </section>
                <section className="btn">
                    <Link to="/adm/inicio">
                        <button className='btnMenu'>
                            < AiOutlineHome />
                            INICIO
                        </button>
                    </Link>
                    <Link to="/adm/usuarios">
                        <button className='btnMenu'>
                            <AiOutlineUser/>
                            COLABORADORES
                        </button>
                    </Link>
                    <Link to="/adm/metricas">
                        <button className='btnMenu'>
                            <BsGraphUp/>
                            MÉTRICAS
                        </button>
                    </Link>
                    <Link to ="/adm/financeiro">
                        <button className='btnMenu'>
                            <CiMoneyBill/>
                            FINANCEIRO
                        </button>
                    </Link>
                    <Link to="/adm/clientes">
                        <button className='btnMenu'>
                            <HiOutlineUserGroup/>
                            CLIENTES
                        </button>
                    </Link>
                    <Link to="/adm/acompanhamento">
                        <button className='btnMenu'>
                            <SlGraph/>
                            ACOMPANHAMENTO
                        </button>
                    </Link> 
                    <Link to="/adm/credenciamento">
                        <button className='btnMenu'>
                            <HiOutlineIdentification/>
                            CREDENCIAMENTO
                        </button>
                    </Link>
                </section>
                <section className='footer'>
                    <img src="../../../src/images/W51.png"/>
                </section>
            </div>
    )
}   
export default Menu