import * as S from "./Styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isErr, setIsErr] = useState(false);

  let navigate = useNavigate();

  const onLogin = () => {
    if (login !== "admin" || password !== "123") {
      setIsErr(true);
    } else {
      setIsErr(false);
      localStorage.setItem("login", true);
      navigate("/");
    }
  };

  return (
    <S.Container>
      <S.Title>Авторизация</S.Title>

      <S.InputBlock>
        <S.Label>Логин</S.Label>
        <S.Input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          type="text"
        />
      </S.InputBlock>

      <S.InputBlock>
        <S.Label>Пароль</S.Label>
        <S.Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </S.InputBlock>
      {isErr && <S.Error>Неправильный логин или пароль!</S.Error>}
      <S.Button onClick={onLogin}>Войти</S.Button>
    </S.Container>
  );
};

export default LoginPage;
