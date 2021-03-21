import React, { useState } from 'react'
import '../CssFiles/MainPage.css'
import Drawer from 'react-md/lib/Drawers'
import { Link } from 'react-router-dom'
import { InputGroup, FormControl, Button, Dropdown, DropdownButton, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { FolderCreateModal } from '../Components/ModalWindows/FolderCreate'
import { useDispatch, useSelector } from 'react-redux';
import { FileFolder, sort } from '../Redux/Reducers/FilesFoldresReducer'
import { UploadFile } from '../Components/ModalWindows/UploadFile'


export const MainPage = ({ id = '0' }) => {
    const dispatch = useDispatch();
    const fileFolder = useSelector(FileFolder)

    const [sortType, setType] = useState('default')


    const renderTooltip = (props) => (
        <Tooltip id="file-foldertooltip" >
            {
                `
            формат:${props.format}
            дата создания:${props.date_of_upload}
            размер файла:${props.file_weight}
            владелец файла:${props.name_of_uploader}
            количество скачиваний:${props.id}`
            }
        </Tooltip>
    )

    const sortByType = (type) => {
        let array = [...fileFolder.files[id]]

        switch (type) {
            case 'format':
                dispatch(sort({
                    id: id,
                    sortedArray: array.sort((a, b) => {
                        let x = a.format.toLowerCase();
                        let y = b.format.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    })
                }))
                break
            case 'date_of_upload':
                dispatch(sort({
                    id: id,
                    sortedArray: array.sort((a, b) => {
                        let x = a.date_of_upload;
                        let y = b.date_of_upload;
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    })
                }))
                break
            case 'name':
                dispatch(sort({
                    id: id,
                    sortedArray: array.sort((a, b) => {

                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    })
                }))
                break
            default:
                break
        }


        // console.log(typeof(fileFolder.files[id]))
        // dispatch(sort({
        //     id: id,
        //     sortedArray: array.sort((a, b) => {

        //         let x = a.name.toLowerCase();
        //         let y = b.name.toLowerCase();
        //         if (x < y) {
        //             return -1;
        //         }
        //         if (x > y) {
        //             return 1;
        //         }
        //         return 0;
        //     })
        // }))



        // dispatch(sort({
        //     id: id,
        //     sortedArray: array.sort((a, b) => b.name - a.name)
        // }))



        // console.log(typeof(array.slice()))
    }


    return (
        <div className="main-page">
            {/* {console.log(id)} */}
            {console.table(fileFolder.files[id])}
            <header className="header">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Введите название файла"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Найти</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className="user-avatar">
                    <img src="https://memepedia.ru/wp-content/uploads/2018/07/dhcjnoixcaif23m.jpg" alt="аватарка" />
                </div>
            </header>

            <Drawer tabletMinWidth='400'>
                <UploadFile parent={id} />
                <FolderCreateModal parent={id} />
            </Drawer>

            <div className="files-container">
                <div className="files-container-header">
                    <h3>Файлы</h3>
                    <div className="settings-btns">
                        <i className="fas fa-plus"></i>
                        <DropdownButton id="dropdown-basic-button" title={`Сортировать по:`} >
                            <Dropdown.Item eventKey={1} onClick={() => sortByType('format')}   >Типу</Dropdown.Item>
                            <Dropdown.Item eventKey={2} onClick={() => sortByType('name')}  >Названию</Dropdown.Item>
                            <Dropdown.Item eventKey={3} onClick={() => sortByType('date_of_upload')}  >Дате загрузки</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className="files-container-content">
                    {/* Вывод папок в зависимости от текущего id */}
                    {
                        fileFolder.folders.length !== 0 &&
                        fileFolder.folders.filter(item => item.parent_folder === id).map(i =>
                            <Link className="link-to-folder" to={`/mainPage/folder/${i.id}`}>
                                <div className="file-item" key={i.id}>
                                    <img src="https://c0.klipartz.com/pngpicture/547/938/gratis-png-equipo-iconos-icono-diseno-apple-icono-formato-carpeta-amarilla-s.png" alt="папка" className="file-icon" />
                                    <p className="file-name">{i.name}</p>
                                </div>
                            </Link>
                        )
                    }
                    {/* Если в store в ключе files есть ключ id, то выводим файлы которые там есть */}
                    {
                        fileFolder.files[id] !== undefined &&
                        fileFolder.files[id].map(i =>
                            <OverlayTrigger
                                placement="auto"
                                delay={{ show: 150, hide: 100 }}
                                overlay={renderTooltip(i)}
                            >
                                <div className="file-item" key={i.id}>
                                    <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="файл" className="file-icon" />
                                    <p className="file-name">{i.name}.txt</p>
                                </div>
                            </OverlayTrigger>
                        )
                    }
                    {/* Если пользователь заходит первый раз, то показывается сообщение */}
                    {
                        fileFolder.files[id] === undefined && fileFolder.folders.length === 0 &&
                        <h2 className="if-page-empty">Спасибо, что пользуетесь нашим хранилищем</h2>
                    }

                </div>
            </div>
        </div>
    )
}