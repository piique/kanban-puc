import { useState } from 'react';
import * as yup from 'yup';

import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { login } from '../../auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [senhaValid, setSenhaValid] = useState(true);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    senha: yup.string().min(8).required()
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailValid(true);
    setSenhaValid(true);

    try {
      await schema.validate({ email, senha }, { abortEarly: false });
      // FUNÇÃO PARA REALIZAR O LOGIN!!!
      if (login(email, senha)) navigate('/');

    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      if (validationErrors.email) {
        setEmailValid(false);
      }
      if (validationErrors.senha) {
        setSenhaValid(false);
      }
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="login">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email" className="label">Email</label>
          <div className="input-login">
            <input type="email" id="email" className="input" placeholder="Insira seu email" required value={email} onChange={(event) => setEmail(event.target.value)} />
            {!emailValid && <div className="invalid-feedback">Insira um email válido.</div>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="senha" className="label">Senha</label>
          <div className="input-login">
            <input type="password" id="senha" className="input" placeholder="Insira sua senha" required value={senha} onChange={(event) => setSenha(event.target.value)} />
            {!senhaValid && <div className="invalid-feedback">A senha deve ter pelo menos 8 caracteres.</div>}
          </div>
        </div>
        <button type="submit" className="button-login">Entrar</button>
      </form>
    </div>
  );
}

export default Login;