import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CssFiles/RegistrationForm.css'


export const RegistrationForm = () => {

    const [inputInfo, setInput] = useState({})

    const change = (e) => {
        setInput({
            ...inputInfo,
            [e.target.name]: e.target.value
        })
    }


    return (

        <div className="registration-form">
            <form action="">
                <div className="form-header">
                    <h2>Форма регистрации</h2>
                </div>
                <div className="form-body">
                    <input name="name" type="text" className="form-body-item" placeholder="Введите ваше имя" onChange={change} required pattern="[A-Za-zА-Яа-я]+"
                        title="Должны использоваться только буквы" maxLength="20"
                    />
                    <input name="surname" type="text" className="form-body-item" placeholder="Введите вашу фамилию" onChange={change} required pattern="[A-Za-zА-Яа-я]+"
                        title="Должны использоваться только буквы" maxLength="20"
                    />
                    <input name="email" type="email" className="form-body-item" placeholder="Введите ваш E-mail" onChange={change} required />
                    <input name="password" type="password" className="form-body-item" placeholder="Введите ваш пароль" onChange={change} required />
                    <input name="passwordConfirm" type="password" className="form-body-item" placeholder="Введите пароль еще раз" onChange={change} required />
                </div>
                <div className="form-footer">
                    <Link to="/mainPage"><button type="submit">Зарегистрироваться</button></Link>
                    <Link className="link-to-login" to='/'>Войти</Link>
                </div>
            </form>
        </div>
    )
}