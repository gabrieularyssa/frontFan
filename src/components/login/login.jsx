import './login.css'
// import imglogo from '../../../src/images/image2.png'
// import imglogo1 from '../../../src/images/image3.png'


function Login(){
    return (
        <div className="container-login">
            <div className="login-data">
                <img src='../../../src/images/image2.png'/>
                <div className='input'>
                    <h1>LOGIN</h1>
                    <form className="form-data-login" action="">
                        {/* <label htmlFor="" placeholder=''>usuário</label> */}
                        <input type="text" name="" id="" placeholder='usuario'/>
                        {/* <label htmlFor="">senha</label> */}
                        <input type="password" name="" id="" placeholder='senha'/>
                        <input type="submit" value="Entrar" className='btnSub'/>
                    </form>
                </div>
                <footer>Sistema desenvolvido por Widup Soluções. Direitos reservados para o Grupo Fan!</footer>
            </div>
            <div className="style">
                <div className='divimg'>    
                    <img src='../../../src/images/image3.png' className='imageHome'/>
                </div>
            </div>
        </div>        
    )
}

export default Login