import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../CssFiles/RegistrationForm.css'


export const RegistrationForm = () => {

    let history = useHistory();
    const [userForm, setUserForm] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirm: ''
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
            } else if ((inputVal === 'name' || inputVal === 'surname') && userForm[inputVal].match(/[^A-Za-zА-Яа-я]+/) !== null) {
                showError('Поле с именем и фамилией не должны содержать что-то кроме букв')
                return
            } else if (inputVal === 'email' && userForm[inputVal].match(/@/) === null) {
                showError('Проверьте правильность написания E-mail')
                return
            } else if (inputVal === 'password' && userForm[inputVal] !== userForm.passwordConfirm) {
                showError('Пароли не совпадают')
                return
            }
        }

        localStorage.setItem(userForm.email, userForm.password)
        localStorage.setItem('currentUser', userForm.email)
        history.push('/mainPage')



        // if (userForm.name === '' || userForm.name.match(/[^A-Za-zА-Яа-я]+/) !== null) {
        //     errorBlock.textContent = 'Поле с именем не должно быть пустым и содержать что-то кроме букв'
        //     errorBlock.style.display = 'block'
        // } else if (userForm.surname === '' || userForm.surname.match(/[^A-Za-zА-Яа-я]+/) !== null) {
        //     errorBlock.textContent = 'Поле с фамилией не должно быть пустым и содержать что-то кроме букв'
        //     errorBlock.style.display = 'block'
        // } else if (userForm.email === '' || userForm.email.match(/@/) === null) {
        //     errorBlock.textContent = 'Проверьте правильность написания email'
        //     errorBlock.style.display = 'block'
        // } else if (userForm.password === '') {
        //     errorBlock.textContent = 'Проверьте правильность написания пароля'
        //     errorBlock.style.display = 'block'
        // } else if (userForm.passwordConfirm === '' || userForm.password !== userForm.passwordConfirm) {
        //     errorBlock.textContent = 'Подтвердите пароль еше раз'
        //     errorBlock.style.display = 'block'
        // } else {
        //     localStorage.setItem(userForm.email, userForm.password)
        //     localStorage.setItem('currentUser', userForm.email)
        //     history.push('/mainPage')
        // }
    }


    return (

        <div className="registration-form">
            <form action="">
                <div className="form-header">
                    <h2>Форма регистрации</h2>
                </div>
                <p className="error-output">fdasfads</p>
                <div className="form-body" onChange={change}>
                    <input name="name" type="text" className="form-body-item" placeholder="Введите ваше имя" required pattern="[A-Za-zА-Яа-я]+"
                        title="Должны использоваться только буквы" maxLength="20"
                    />
                    <input name="surname" type="text" className="form-body-item" placeholder="Введите вашу фамилию" required pattern="[A-Za-zА-Яа-я]+"
                        title="Должны использоваться только буквы" maxLength="20"
                    />
                    <input name="email" type="email" className="form-body-item" placeholder="Введите ваш E-mail" required />
                    <input name="password" type="password" className="form-body-item" placeholder="Введите ваш пароль" required />
                    <input name="passwordConfirm" type="password" className="form-body-item" placeholder="Введите пароль еще раз" required />
                </div>
                <div className="form-footer">
                    <button type="submit" onClick={(e) => validation(e)}>Зарегистрироваться</button>
                    <Link className="link-to-login" to='/'>Войти</Link>
                </div>
            </form>
        </div>
    )
}