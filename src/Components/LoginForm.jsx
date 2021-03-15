import React from 'react'
import { Link } from 'react-router-dom'
import '../CssFiles/LoginForm.css'

export const LoginForm = () => {


    return (
        <div className="login-form">
            <form action="">
                <div className="form-header">
                    <h2>Вход</h2>
                </div>
                <div className="form-body">
                    <input type="email" className="form-body-item" placeholder="Введите ваш E-mail" required />
                    <input type="password" className="form-body-item" placeholder="Введите ваш пароль" required />
                </div>
                <div className="form-footer">
                <Link to="/mainPage"><button type="submit">Войти</button></Link>
                <Link className="link-to-registration" to='/registration'>Зарегистрироваться</Link>
                </div>
            </form>
        </div>
    )
}