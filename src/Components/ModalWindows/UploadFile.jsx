import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../Redux/Reducers/FilesFoldresReducer'

export const UploadFile = ({ parent="0" }) => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Проверка наличия файла который надо загрузить
    const uploadFile = () => {
        //если файл загружается в корне сайта, то родитель будет равнятся 0
        if (parent === undefined) {
            parent = "0"
        }

        let date = new Date()
        dispatch(add({
            id: Date.now().toString(),
            type: 'file',
            name: 'Название',
            parent_folder: parent,
            date_of_upload: date.toISOString(),
            file_weight: '300kb',
            name_of_uploader: 'Mikhail',
            number_of_download: 20,
        }))
        setShow(false);
    }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Загрузить
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Загрузить файл</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="error-message">Сначала нужно выбрать файл</p>
                    <input className="upload-input" type="file" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={uploadFile}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}