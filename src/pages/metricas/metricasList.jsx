import './metricas.css'
import { useState } from 'react'
import Menu from '../../components/menuLateral/menu.jsx'
import MetricasCad from './metricasCad'

function MetricasList(){
    const [search, setSearch] = useState()
    const handleSubmit = (e) => {
        e.preventDefaul()
    }
    return(
        <div className='containerMetricas'>
            <Menu/>
            <div className="dataCadMetricas">
                <form className='dataformMetricas' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </header>
                    <section>
                        <p>Métricas</p>
                    </section>
                    {/* para cada item na tabela criar um botao que faça requisição de metricas */}
                    <div className="clientesMetricas">
                        <details>
                            <summary>Nome Completo do usuario</summary>
                            <MetricasCad />
                        </details>
                    </div>
                    
                </form>
                    
            </div> 
        </div>
    )
}
export default MetricasList