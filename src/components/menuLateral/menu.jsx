import './menu.css'
// import AiOutlineHome from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';  
import { AiOutlineUser } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { CiMoneyBill } from 'react-icons/ci'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { SlGraph } from 'react-icons/sl'
import { HiOutlineIdentification } from 'react-icons/hi'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';

function Menu(){
    const { pathname } = useLocation()
    const localHome = (pathname === "/adm/inicio")
    const localFinanceiro = (pathname === "/adm/financeiro" || pathname === "/adm/financeiro/lista" || pathname === "/adm/financeiro/detalhe")
    const localColaborador = (pathname === "/adm/usuarios" || pathname === "/adm/cadastro")
    const localMetricas = (pathname === "/adm/metricas")
    const localClientes = (pathname === "/adm/clientes" )
    const localAcompanhamento = (pathname === "/adm/acompanhamento" || pathname === "/adm/acompanhamento/dois" || pathname === "/adm/acompanhamento/detalhe")
    const localCredenciamento = (pathname === "/adm/credenciamento")
    
    // const navigate = Navigate()
    const navigate = useNavigate()

    return(
            <div className="menu-vert">
                <section className='logo'>
                    <img src="../../../src/images/logo.png"/>
                </section>
                <section className="btn">
                    <Link to="/adm/inicio">
                        <button className={`btnMenu${localHome}`}>
                            < AiOutlineHome />
                            INICIO
                        </button>
                    </Link>
                    <Link to="/adm/usuarios">
                        <button className={`btnMenu${localColaborador}`}>
                            <AiOutlineUser/>
                            COLABORADORES
                        </button>
                    </Link>
                    <Link to="/adm/metricas">
                        <button className={`btnMenu${localMetricas}`}>
                            <BsGraphUp/>
                            MÉTRICAS
                        </button>
                    </Link>
                    
                    <Link to="/adm/financeiro">
                        <button className={`btnMenu${localFinanceiro}`}>
                            <CiMoneyBill/>
                            FINANCEIRO
                        </button>
                    </Link>
                    <Link to="/adm/clientes">
                        <button className={`btnMenu${localClientes}`}>
                            <HiOutlineUserGroup/>
                            CLIENTES
                        </button>
                    </Link>
                    <Link to="/adm/acompanhamento">
                        <button className={`btnMenu${localAcompanhamento}`}>
                            <SlGraph/>
                            ACOMPANHAMENTO
                        </button>
                    </Link> 
                    <Link to="/adm/credenciamento">
                        <button className={`btnMenu${localCredenciamento}`}>
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