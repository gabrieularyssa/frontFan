import './metricas.css'
import { useState } from 'react'
import Menu from '../menuLateral/menu'
import MetricasCad from './metricasCad'
// import { WiDirectionDown } from 'react-icons/wi'

function MetricasList(){
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
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </header>
                    <section>
                        <p>Métricas</p>
                    </section>
                    {/* para cada item na tabela criar um botao que faça requisição de metricas */}
                    <div className="clientes">
                        <details>
                            <summary>Francisco José da Silva Oliveira</summary>
                            <MetricasCad />
                        </details>
                        <details>
                            <summary>Gabriela Laryssa Oliveira Moreira</summary>
                            <MetricasCad />
                        </details>
                        <details>
                            <summary>Francisco José da Silva Oliveira</summary>
                            <MetricasCad />
                        </details>
                    </div>
                    
                </form>
                    
            </div> 
        </div>
    )
}
export default MetricasList