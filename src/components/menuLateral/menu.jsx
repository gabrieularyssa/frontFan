import './menu.css'
// import AiOutlineHome from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';  
import { AiOutlineUser } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { CiMoneyBill } from 'react-icons/ci'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { SlGraph } from 'react-icons/sl'
import { HiOutlineIdentification } from 'react-icons/hi'
// import x from '../../images'

function Menu(){
    return(
            <div className="menu-vert">
                <section className='logo'>
                    <img src="../../../src/images/logo.png"/>
                </section>
                <section className="btn">
                    <button className='btnMenu'>
                        < AiOutlineHome />
                        INICIO
                    </button>
                    <button className='btnMenu'>
                        <AiOutlineUser/>
                        COLABORADORES
                    </button>
                    <button className='btnMenu'>
                        <BsGraphUp/>
                        MÉTRICAS
                    </button>
                    <button className='btnMenu'>
                        <CiMoneyBill/>
                        FINANCEIRO
                    </button>
                    <button className='btnMenu'>
                        <HiOutlineUserGroup/>
                        CLIENTES
                    </button>
                    <button className='btnMenu'>
                        <SlGraph/>
                        ACOMPANHAMENTO
                    </button>
                    {/* <AiOutlineHome/> */}
                    <button className='btnMenu'>
                        <HiOutlineIdentification/>
                        CREDENCIAMENTO
                    </button>
                </section>
                <section className='footer'>
                    <img src="../../../src/images/W51.png"/>
                </section>
            </div>
    )
}   
export default Menu