import './cadastro.css'
import Menu from '../menuLateral/menu'
import {useState} from 'react'

function Cadastro(){
    //gerenciamento de input com useState
    const [completName, setCompletName] = useState()
    const [corporativeNumber, setCorporativeNumber] = useState()
    const [email, setEmail] = useState()
    const [state, setState] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [search, setSearch] = useState()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('definir aqui o envio de formulario')
    // }
    function handleSubmit(e){
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
                        <p>Cadastro/Edição de Usuários</p>
                        <input type="submit" value="Salvar" name='btnSubmit'/>
                    </section>
                    <label>
                        Nome Completo:
                        <input type="text" name='nomeCompleto' onChange={(e)=> setCompletName(e.target.value)} value={completName}/>
                    </label>
                    <label>
                        Número Corporativo:
                        <input type="text" name='numeroCorporativo' onChange={(e)=> setCorporativeNumber(e.target.value)} value={corporativeNumber}/>
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="emaildata" onChange={(e)=> setEmail(e.target.value)} />
                    </label>
                    <label>
                        Estado a prospectar:
                        <input type="text" name='estado'onChange={(e)=> setState(e.target.value)}/>
                    </label>
                    <label>
                        Senha:
                        <input type="password" name='senha' onChange={(e)=> setPassword(e.target.value)}/>
                    </label>
                    <label>
                        Confirmar Senha:
                        <input type="password" name='confirmarSenha' onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    </label>
                </form>
            </div> 
        </div>
    )
}

export default Cadastro