import {useEffect, useState} from 'react'
import { UsersService } from '../../services/usersService'

function MetricasCad({id, metrics}){
    
//gerenciamento de input com useState
    const [txCredenciamento, setTxCredenciamento] = useState(metrics?.accreditationRate || 0)
    const [txConversao, setTxConversao] = useState(metrics?.conversionRate || 0)
    const [txRetencao, setTxRetencao] = useState(metrics?.retentionRate || 0)
    const [controleAcesso, setControleAcesso] = useState()
    const [faturamento, setFaturamento] = useState(metrics?.billing || 0)
    useEffect(()=> {
        // console.log(metrics)
    }, [metrics])

    async function handleSubmit(e){
        e.preventDefault()
        console.log('so teste')
        try{
            const result = await UsersService.update(id, {
                metrics:{
                    accreditationRate: txCredenciamento,
                    conversionRate: txConversao,
                    retentionRate: txRetencao,
                    billing: faturamento
                }
            })
            console.log('result:', result)

        }catch(err){console.log('error:', err)}
    }
    return(
        <div className='containerData'>
            <div className="dataCadCadastro">
                <form name='metricas' className='dataformMetricas' onSubmit={handleSubmit}>
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
                        <input type="submit" className="btnsub" value="Salvar" />
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default MetricasCad