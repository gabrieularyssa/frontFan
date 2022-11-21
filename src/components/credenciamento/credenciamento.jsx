import './credenciamento.css'
import Menu from '../menuLateral/menu'
import { useState } from 'react'

function Credencimento(){
    //gerenciamento de input com useState
    const [razaoSocial, setRazaoSocial] = useState()
    const [CNPJ, setCNPJ] = useState()
    const [fatuamentoConsolidado, setFatuamentoConsolidado] = useState()
    const [previsaoFaturamento, setPrevisaoFaturamento] = useState()
    const [credenciamento, setCredenciamento] = useState()
    const [dataIndicacao, setDataIndicacao] = useState()
    const [equipamento, setEquipamento] = useState()
    const [recebimentoEquipamento, setRecebimentoEquipamento] = useState()
    const [UF, setUF] = useState()
    const [nomeCliente, setNomeCliente] = useState()
    const [contato, setContato] = useState()
    const [numeroPV, setNumeroPV] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('manipular aqui o envio do form')
    }
    return(
        <div className='container'>
            <Menu/>
            <div className="dataCad">
                <form className='dataform' onSubmit={handleSubmit}>
                    <header>
                        <input type="text" name="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=> setSearch(e.target.value)}/>
                    </header>
                    <section>
                        <p>Cadastro/Edição de Clientes</p>
                    </section>
                    <label>
                        Razão Social:
                        <input type="text" name='razaoSocial' onChange={(e)=> setRazaoSocial(e.target.value)} value={razaoSocial} placeholder='Razão Social'/>
                    </label>
                    <label>
                        CNPJ:
                        <input type="text" name='CNPJ' onChange={(e)=> setCNPJ(e.target.value)} value={CNPJ} placeholder='CNPJ'/>
                    </label>
                    <label>
                        Faturamento Consolidado:
                        <input type="text" name="fatuamentoConsolidado" onChange={(e)=> setFatuamentoConsolidado(e.target.value)} value={fatuamentoConsolidado} placeholder='Faturamento Consolidado'/>
                    </label>
                    
                    <label>
                        Previsão de Faturamento:
                        <input type="text" name='previsaoFaturamento' onChange={(e)=> setPrevisaoFaturamento(e.target.value)} value={previsaoFaturamento} placeholder='Previsão de Faturamento'/>
                    </label>
                    <label>
                        Credenciado Por:
                        <input type="text" name='credenciamento' onChange={(e)=> setCredenciamento(e.target.value)} value={credenciamento} placeholder='Credenciado Por ...'/>
                    </label>
                    <label>
                        Data da Indicação:
                        <input type="text" name='dataIndicacao' onChange={(e)=> setDataIndicacao(e.target.value)} value={dataIndicacao} placeholder='Data da Indicação'/>
                    </label>
                    <label>
                        Equipamento:
                        <input type="text" name='equipamento' onChange={(e)=> setEquipamento(e.target.value)} value={equipamento} placeholder='Equipamento'/>
                    </label>
                    <label>
                        Recebimento de Equipamento:
                        <input type="text" name='recebimentoEquipamento' onChange={(e)=> setRecebimentoEquipamento(e.target.value)} value={recebimentoEquipamento} placeholder='Recebimento de Equipamento'/>
                    </label>
                    <label>
                        UF:
                        <input type="text" name='UF' onChange={(e)=> setUF(e.target.value)} value={UF} placeholder='UF'/>
                    </label>
                    <label>
                        Nome do Cliente:
                        <input type="text" name='nomeCliente' onChange={(e)=> setNomeCliente(e.target.value)} value={nomeCliente} placeholder='Nome do Cliente'/>
                    </label>
                    <label>
                        Contato:
                        <input type="text" name='contato' onChange={(e)=> setContato(e.target.value)} value={contato} placeholder='Contato'/>
                    </label>
                    <label>
                        Número de PV:
                        <input type="text" name='numeroPV' onChange={(e)=> setNumeroPV(e.target.value)} value={numeroPV} placeholder='Número PV'/>
                    </label>
                    <section>
                        <input type="submit" value="Enviar Rede" name='btnSubmit'className='submit'/>
                    </section> 
                </form>
            </div> 
        </div>
    )
}

export default Credencimento