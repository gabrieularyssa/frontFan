import './financeiroList.css'
import Menu from '../../components/menuLateral/menu'
import { Link, Navigate, useNavigate } from "react-router-dom";
import {AiOutlineEye} from 'react-icons/ai'

function FinanceiroList(){
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
                <section className='sectionList'>
                    <span>Escrever Aqui o Nome Completo</span>
                    <button onClick={btnEye}><AiOutlineEye/></button>
                </section>
                <section className='sectionList'>
                    <span>Escrever Aqui o Nome Completo</span>
                    <button onClick={btnEye}><AiOutlineEye/></button>
                </section>
                <section className='sectionList'>
                    <span>Escrever Aqui o Nome Completo</span>
                    <button onClick={btnEye}><AiOutlineEye/></button>
                </section>
            </div>
        </div>
    )
}

export default FinanceiroList