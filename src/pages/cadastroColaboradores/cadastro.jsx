import './cadastro.css'
import Menu from '../../components/menuLateral/menu'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { UsersService } from '../../services/usersService'
function Cadastro(){
    //gerenciamento de input com useState
    const [completName, setCompletName] = useState()
    const [corporativeNumber, setCorporativeNumber] = useState()
    const [emaildata, setEmail] = useState()
    const [state, setState] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [search, setSearch] = useState()

    async function handleSubmit(e){
        e.preventDefault()
        
        const data = await UsersService.create({
            "name": completName,
            "password": password,
            "email": emaildata,
            "metrics": {}
        })

        console.log(data)
    }
    return(
        <div className='container'>
            <Menu/>
            <div className="dataCad">
                <form className='dataform' onSubmit={handleSubmit} name='formCadastro'>
                    <header>
                        <input type="text" name="search" placeholder='🔍 Pesquise Aqui' onChange={(e)=> setSearch(e.target.value)}/>
                    </header>
                    <section>
                        <p>Cadastro/Edição de Usuários</p>
                        {/* <Link to='/adm/metricas'>
                            <input type="submit" value="Salvar" name='btnSubmit'/>
                        </Link> */}
                        <input type="submit" value="Salvar" name='btnSubmit'/>
                    </section>
                    <label>
                        Nome Completo:
                        <input type="text" name='nomeCompleto' onChange={(e)=> setCompletName(e.target.value)} value={completName} placeholder='Nome Completo'/>
                    </label>
                    <label>
                        Número Corporativo:
                        <input type="text" name='numeroCorporativo' onChange={(e)=> setCorporativeNumber(e.target.value)} value={corporativeNumber} placeholder='Número Corporativo'/>
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="emaildata" onChange={(e)=> setEmail(e.target.value)} value={emaildata} placeholder='Email'/>
                    </label>
                    <label>
                        Estado a prospectar:
                        <input type="text" name='state'onChange={(e)=> setState(e.target.value)} value={state} placeholder='Estado'/>
                    </label>
                    <label>
                        Senha:
                        <input type="password" name='password' onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Digite sua senha'/>
                    </label>
                    <label>
                        Confirmar Senha:
                        <input type="password" name='confirmPassword' onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirmação de Senha'/>
                    </label>
                </form>
            </div> 
        </div>
    )
}

export default Cadastro