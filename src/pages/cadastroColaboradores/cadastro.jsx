import './cadastro.css'
import Menu from '../../components/menuLateral/menu'
import {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UsersService } from '../../services/usersService'
import { LocationsService } from '../../services/locationService'
function Cadastro(){
    //gerenciamento de input com useState
    const [completName, setCompletName] = useState()
    const [corporativeNumber, setCorporativeNumber] = useState()
    const [emaildata, setEmail] = useState()
    const [state, setState] = useState("")
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [search, setSearch] = useState()
    const navigate = useNavigate();
    const [statesToProspect, setStatesToProspect] = useState([])
    const [stateSelected, setStateSelected] = useState('Default')
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
        navigate("/adm/usuarios");
        const data = await UsersService.create({
            name: completName,
            password: password,
            email: emaildata,
            statesToProspect:[stateSelected],
            metrics: {
                accreditationRate: 0,
                conversionRate:0,
                retentionRate:0,
                billing:0
            }
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
                        {/* <Link to='/adm/usuarios'>
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
                        {/* criar select e os options sera os estados */}
                        {/* <input type="text" name='state'onChange={(e)=> setState(e.target.value)} value={state} placeholder='Estado'/> */}
                        <select className="selectEstado" onChange={(e)=> setStateSelected(e.target.value)} value={stateSelected}>
                            <option value="Default" disabled>Selecione um Estados</option>
                            {
                                statesToProspect.map((item)=> (<option value={item.sigla} key={item.id}>{item.sigla}</option>))
                            }
                        </select>
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