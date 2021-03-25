import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../../CssFiles/FolderCreate.css'
import { useDispatch } from 'react-redux';
import { add } from '../../Redux/Reducers/FilesFoldresReducer'

export const FolderCreateModal = ({parent="0"}) => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [inputVal, setInputVal] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Проверка наличия имени папки и добавление стилей
    const isInputEmpty = () => {
        let errorBlock = document.querySelector('.error-message');
        if (inputVal.trim() === '') {
            errorBlock.style.display = "block"
        } else {
            errorBlock.style.display = "none"
            setInputVal('');
            dispatch(add({
                id: Date.now().toString(),
                type: 'folder',
                name: inputVal,
                parent_folder: parent,
                date_of_upload: new Date().toLocaleString()
            }))
            setShow(false);
        }

    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Создать папку
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Создание папки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="error-message">У папки должно быть название!</p>
                    <input className="folder-name-input" type="text" placeholder="Введите название папки" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={isInputEmpty}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}