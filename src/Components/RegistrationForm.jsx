import React from 'react'
import '../CssFiles/RegistrationForm.css'


export const RegistrationForm = () => {

    return (
        <div className="registration-form">
            <form action="">
                <div className="form-header">
                    <h2>Форма регистрации</h2>
                </div>
                <div className="form-body">
                    <input type="text" className="form-body-item" placeholder="Введите ваше имя"  pattern="[A-Za-zА-Яа-я]+"
                        title="Должны использоваться только буквы" maxLength="20"
                    />
                    <input type="text" className="form-body-item" placeholder="Введите вашу фамилию" required pattern="[A-Za-zА-Яа-я]+"
                        title="Должны использоваться только буквы" maxLength="20"
                    />
                    <input type="email" className="form-body-item" placeholder="Введите ваш E-mail" required />
                    <input type="password" className="form-body-item" placeholder="Введите ваш пароль" required />
                    <input type="password" className="form-body-item" placeholder="Введите пароль еще раз" required />
                </div>
                <div className="form-footer">
                    <button type="submit">Зарегистрироваться</button>
                    <a href="#">Войти</a>
                </div>
            </form>
        </div>
    )
}