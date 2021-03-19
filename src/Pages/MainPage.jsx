import React from 'react'
import '../CssFiles/MainPage.css'
import Drawer from 'react-md/lib/Drawers'
import { Link } from 'react-router-dom'
import { InputGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { FolderCreateModal } from '../Components/ModalWindows/FolderCreate'
import { useDispatch, useSelector } from 'react-redux';
import { FileFolder } from '../Redux/Reducers/FilesFoldresReducer'
import { UploadFile } from '../Components/ModalWindows/UploadFile'


export const MainPage = ({ id = '0' }) => {

    const fileFolder = useSelector(FileFolder)

    return (
        <div className="main-page">
            {/* {console.log(id)} */}
            {console.log(fileFolder)}
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
                        <DropdownButton id="dropdown-basic-button" title="Сортировать по:">
                            <Dropdown.Item href="#/action-1">Типу</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Названию</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Дате загрузки</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className="files-container-content">

                    {/* Вывод папок в зависимости от текущего id */}



                    { 
                        fileFolder.folders.filter(item => item.parent_folder === id).map(i =>
                            <Link className="link-to-folder" to={`/mainPage/folder/${i.id}`}>
                                <div className="file-item">
                                    <img src="https://c0.klipartz.com/pngpicture/547/938/gratis-png-equipo-iconos-icono-diseno-apple-icono-formato-carpeta-amarilla-s.png" alt="папка" className="file-icon" />
                                    <p className="file-name">{i.name}</p>
                                </div>
                            </Link>
                        )
                    }

                    {
                    fileFolder.files.id.map(i =>
                        <div className="file-item">
                            <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="файл" className="file-icon" />
                            <p className="file-name">{i.name}.txt</p>
                        </div>
                    )}



                    {/* {fileFolder.folders.map(i =>
                        <Link className="link-to-folder" to={`/mainPage/folder/${i.id}`}>
                            <div className="file-item">
                                <img src="https://c0.klipartz.com/pngpicture/547/938/gratis-png-equipo-iconos-icono-diseno-apple-icono-formato-carpeta-amarilla-s.png" alt="" className="file-icon" />
                                <p className="file-name">{i.name}</p>
                            </div>
                        </Link>
                    )

                    } */}
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                    <div className="file-item">
                        <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="" className="file-icon" />
                        <p className="file-name">Название файла.txt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}