// import x from '../metricas/metricas.css'
// import Menu from '../menuLateral/menu'
import {useState} from 'react'


function MetricasCad(){
//gerenciamento de input com useState
    const [txCredenciamento, setTxCredenciamento] = useState()
    const [txConversao, setTxConversao] = useState()
    const [txRetencao, setTxRetencao] = useState()
    const [controleAcesso, setControleAcesso] = useState()
    const [faturamento, setFaturamento] = useState()


    function handleSubmit(e){
        e.preventDefault()
        console.log('manipular aqui o envio do form')
    }
    return(
        <div className='containerData'>
            <div className="dataCadCadastro">
                <form className='dataformMetricas' onSubmit={handleSubmit}>
                    <label>
                    Taxa Credenciamento/Mês:
                        <input type="text" name='txCredenciamento' onChange={(e)=> setTxCredenciamento(e.target.value)} value={txCredenciamento}/>
                    </label>
                    <label>
                    Taxa Conversão Flex:
                        <input type="text" name='txConversao' onChange={(e)=> setTxConversao(e.target.value)} value={txConversao}/>
                    </label>
                    <label>
                    Taxa Retenção de Carteira
                        <input type="text" name="txRetencao" onChange={(e)=> setTxRetencao(e.target.value)} value={txRetencao}/>
                    </label>
                    <label>
                        Estado a prospectar:
                        <input type="text" name='controleAcesso'onChange={(e)=> setControleAcesso(e.target.value)} value={controleAcesso}/>
                    </label>
                    <label>
                    Faturamento (R$):
                        <input type="text" name='faturamento' onChange={(e)=> setFaturamento(e.target.value)} value={faturamento}/>
                    </label>
                    <div className='submitMetricas'>
                        <input type="submit" value="Salvar" />
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default MetricasCad