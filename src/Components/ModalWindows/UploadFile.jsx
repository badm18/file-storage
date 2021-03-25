import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../../Redux/Reducers/FilesFoldresReducer'

export const UploadFile = ({ parent }) => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Проверка наличия файла который надо загрузить
    const uploadFile = () => {


        dispatch(add({
            id: Date.now().toString(),
            type: 'file',
            name: 'яавидео',
            format: '.mp4',
            parent_folder: parent,
            date_of_upload: new Date().toLocaleString(),
            file_weight: '300kb',
            name_of_uploader: 'Mikhail',
            number_of_download: 20,
        }))
        dispatch(add({
            id: Date.now().toString(),
            type: 'file',
            name: Date.now().toString(),
            format: '.txt',
            parent_folder: parent,
            date_of_upload: new Date().toLocaleString(),
            file_weight: '300kb',
            name_of_uploader: 'Mikhail',
            number_of_download: 20,
        }))
        dispatch(add({
            id: Date.now().toString(),
            type: 'file',
            name: 'акартинка',
            format: '.png',
            parent_folder: parent,
            date_of_upload: new Date().toLocaleString(),
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