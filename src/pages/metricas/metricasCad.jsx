import {useEffect, useState} from 'react'
import { LocationsService } from '../../services/locationService'
import { UsersService } from '../../services/usersService'

function MetricasCad({id, metrics, states}){
    
//gerenciamento de input com useState
    const [txCredenciamento, setTxCredenciamento] = useState(metrics?.accreditationRate || 0)
    const [txConversao, setTxConversao] = useState(metrics?.conversionRate || 0)
    const [txRetencao, setTxRetencao] = useState(metrics?.retentionRate || 0)
    const [statesToProspect, setStatesToProspect] = useState([])
    const [stateSelected, setStateSelected] = useState(states[0])
    const [faturamento, setFaturamento] = useState(metrics?.billing || 0)
    
    // const []
    useEffect(()=> {
        const getLocation = async () =>  {
            const data = await LocationsService.getStates()
            // console.log(data)
            setStatesToProspect(data)
        }
        getLocation().catch((err)=> console.log(err))
    }, [])

    async function handleSubmit(e){
        e.preventDefault()
        console.log('so teste')
        try{
            const result = await UsersService.update(id, {
                statesToProspect: [stateSelected],
                metrics:{
                    accreditationRate: txCredenciamento,
                    conversionRate: txConversao,
                    retentionRate: txRetencao,
                    billing: faturamento,
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
                        {/* <input type="text" name='controleAcesso'onChange={(e)=> setControleAcesso(e.target.value)} value={states.length?states[0]:"-"}/> */}
                        <select className="metricasop" onChange={(e)=> setStateSelected(e.target.value)} value={stateSelected}>
                            <option value="Default" disabled>Selecione um Estados</option>
                            {
                                statesToProspect.map((item)=> (<option value={item.sigla} key={item.id}>{item.sigla}</option>))
                            }
                        </select>
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