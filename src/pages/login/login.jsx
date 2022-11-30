import "./login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

function Login() {
  const [itens, setItens] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(itens);
    try {
      await login(itens.email, itens.password);
      navigate("/adm/usuarios");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-login">
      <div className="login-data">
        <img src="../../../src/images/image2.png" />
        <div className="input">
          <h1>LOGIN</h1>
          <form className="form-data-login" onSubmit={handleSubmit}>
            {/* <label htmlFor="" placeholder=''>usuário</label> */}
            <input
              type="text"
              name="usuario"
              id=""
              placeholder="usuario"
              value={itens?.email || ""}
              onChange={(e) => setItens({ ...itens, email: e.target.value })}
            />

            <input
              type="password"
              name="password"
              id=""
              placeholder="senha"
              value={itens?.password || ""}
              onChange={(e) => setItens({ ...itens, password: e.target.value })}
            />
            {/* <Link to="/adm/usuarios">
                            <input type="submit" value="Entrar" className='btnSub'/>
                        </Link> */}
            <input type="submit" value="Entrar" className="btnSub" />
          </form>
        </div>
        <footer>
          Sistema desenvolvido por Widup Soluções. Direitos reservados para o
          Grupo Fan!
        </footer>
      </div>
      <div className="style">
        <div className="divimg">
          <img src="../../../src/images/image3.png" className="imageHome" />
        </div>
      </div>
    </div>
  );
}

export default Login;
