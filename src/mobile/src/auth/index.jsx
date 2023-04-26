import { Navigate, useNavigate } from "react-router-dom";

export const isAuthenticated = () => {
    // Logica de autenticação: buscando localstorage ou alguma outra forma
    if (localStorage.getItem('userInfo')) {
        return true;
    }

    return false; // true é autenticado
}

export const login = (email, senha) => {
    // fazer logica de validação no backend antes de settar o localstorage

    localStorage.setItem('userInfo', JSON.stringify({ email, senha }));

    return true;
}

export const logout = () => {
    localStorage.removeItem('userInfo');
}
