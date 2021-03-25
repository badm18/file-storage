import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../CssFiles/LoginForm.css'

export const LoginForm = () => {

    // localStorage.setItem('shattilov@mail.ru', '123123')
    let history = useHistory();

    // localStorage.setItem(users, JSON.stringify(users));
    const [userForm, setUserForm] = useState({
        login: '',
        password: ''
    })

    const change = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }
    const showError = (errorMsg) => {
        let errorBlock = document.querySelector('.error-output')
        errorBlock.textContent = errorMsg
        errorBlock.style.display = 'block'
    }

    const validation = (e) => {
        e.preventDefault()

        for (let inputVal in userForm) {
            if (userForm[inputVal].trim() === '') {
                showError('Все поля должны быть заполнены')
                return
            } else if (localStorage.getItem(userForm.login) === null) {
                showError('Попробуйте другой логин!')
                return
            } else if (localStorage.getItem(userForm.login) !== userForm.password) {
                showError('Попробуйте другой пароль!')
                return
            }
        }
        
        localStorage.setItem('currentUser', userForm.login)
        history.push('/mainPage')
    }

    return (
        <div className="login-form">
            <form action="">
                <div className="form-header">
                    <h2>Вход</h2>
                </div>
                <p className="error-output">блок появляется когда валидация проходит неудачно</p>
                <div className="form-body" onChange={change}>
                    <input name="login" type="email" className="form-body-item" value={userForm.login} placeholder="Введите ваш E-mail" required />
                    <input name="password" type="password" className="form-body-item" value={userForm.password} placeholder="Введите ваш пароль" required />
                </div>
                <div className="form-footer">
                    <button type="submit" onClick={(e) => validation(e)}>Войти</button>
                    <Link className="link-to-registration" to='/registration'>Зарегистрироваться</Link>
                </div>
            </form>
        </div>
    )
}