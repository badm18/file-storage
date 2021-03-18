import React from 'react'
import '../CssFiles/Mainpage.css'
import Drawer from 'react-md/lib/Drawers'

import { InputGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap'


export const MainPage = () => {


    return (
        <div className="main-page">
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
                <Button variant="primary" size="lg">
                    Загрузить
                </Button>
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