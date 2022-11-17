import './metricas.css'
import Menu from '../menuLateral/menu'
import MetricasCad from './metricasCad'
// import { WiDirectionDown } from 'react-icons/wi'

function MetricasList(){
    const handleSubmit = (e) => {
        e.preventDefaul()
    }
    return(
        <div className='container'>
            <Menu/>
            <div className="dataCad">
                <form className='dataform'>
                    <header>
                        <input type="text" className="search" placeholder='🔍 Pesquise Aqui'/>
                    </header>
                    {/* para cada item na tabela criar um botao que faça requisição de metricas */}
                    <input type="submit" value="Nome do usuario a avaliar metricas" name='btnSubmit' className='btnName' onSubmit={handleSubmit}/>
                </form>
                    <MetricasCad />
            </div> 
        </div>
    )
}
export default MetricasList