import React, { useEffect, useState } from 'react'
import '../CssFiles/MainPage.css'
import Drawer from 'react-md/lib/Drawers'
import { useHistory } from 'react-router-dom'
import { InputGroup, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { FolderCreateModal } from '../Components/ModalWindows/FolderCreate'
import { useDispatch, useSelector } from 'react-redux';
import { FileFolder, sort, drag } from '../Redux/Reducers/FilesFoldresReducer'
import { UploadFile } from '../Components/ModalWindows/UploadFile'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { FilesOutput } from '../Components/MainPageOutput/FilesOutput'
import { FoldersOutput } from '../Components/MainPageOutput/FoldersOutput'

export const MainPage = ({ id = '0' }) => {

    let history = useHistory();

    const dispatch = useDispatch();
    const fileFolder = useSelector(FileFolder)

    const [sortType, setSortType] = useState({
        sortDirection: 'orderUp', //напрвление сортировки
        sortValue: 'name' //значение по которому сортируются файлы и папки. Нужно для того, чтобы сортировка выполнялась сразу после смены направления сортировки
    })

    //сортировка выполняется только если значение в state меняются
    useEffect(() => {
        sortByType()
        console.log(sortType)
    }, [sortType])



    const changeSortSettings = (eventKey) => {
        //если нажата та же кнопка по которой уже выполнена сортировка, то функция не выполняется
        if (eventKey === sortType.sortDirection || eventKey === sortType.sortValue) return

        if (eventKey === 'orderUp' || eventKey === 'orderDown') {
            setSortType({
                ...sortType,
                sortDirection: eventKey
            })
        } else {
            setSortType({
                ...sortType,
                sortValue: eventKey
            })
        }
    }



    const sortByType = () => {
        //сортировка файлов
        if (fileFolder.files[id] && fileFolder.files[id].length !== 0) {
            let filesArray = [...fileFolder.files[id]]
            dispatch(sort({
                id: id,
                array: sortType.sortDirection === 'orderUp' ?
                    filesArray.sort((a, b) => {
                        let x = a[sortType.sortValue].toLowerCase();
                        let y = b[sortType.sortValue].toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    }) :
                    filesArray.sort((a, b) => {
                        let x = a[sortType.sortValue].toLowerCase();
                        let y = b[sortType.sortValue].toLowerCase();
                        if (x > y) {
                            return -1;
                        }
                        if (x < y) {
                            return 1;
                        }
                        return 0;
                    })
            }))
        }
      
        //сортировка папок
        if (fileFolder.folders[id] && sortType.sortValue !== 'format') {
            console.log('ok')
            let foldersArray = [...fileFolder.folders[id]]
            dispatch(sort({
                id: id,
                array: sortType.sortDirection === 'orderUp' ?
                    foldersArray.sort((a, b) => {
                        let x = a[sortType.sortValue].toLowerCase();
                        let y = b[sortType.sortValue].toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    }) :
                    foldersArray.sort((a, b) => {
                        let x = a[sortType.sortValue].toLowerCase();
                        let y = b[sortType.sortValue].toLowerCase();
                        if (x > y) {
                            return -1;
                        }
                        if (x < y) {
                            return 1;
                        }
                        return 0;
                    })
            }))
        }
    }

    const dragFile = (e) => {
        console.log(e)
        if (!e.destination) return;

        if (e.destination.droppableId !== 'characters') {
            dispatch(drag({
                id: id,
                fileId: e.draggableId,
                folderId: e.destination.droppableId
            }))
        }
        console.log('id:', id)
        console.log(fileFolder.files)
    }

    const exitToLogin = () => {
        localStorage.setItem('currentUser', '')
        history.push('/')
    }

    return (
        <div className="main-page">
            {/* {console.log('mainPage: ',id)} */}
            {/* {console.log(fileFolder)} */}
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
                <div className="user-avatar" onClick={exitToLogin}>
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
                        <DropdownButton id="dropdown-basic-button" title={`Сортировать по:`} onSelect={(e) => changeSortSettings(e)}>
                            <Dropdown.Item eventKey='format' >Типу</Dropdown.Item>
                            <Dropdown.Item eventKey='name' >Названию</Dropdown.Item>
                            <Dropdown.Item eventKey='date_of_upload' >Дате загрузки</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item style={sortType.sortDirection === 'orderDown' ? { background: '#0000003b' } : null} eventKey='orderDown'>По убыванию</Dropdown.Item>
                            <Dropdown.Item style={sortType.sortDirection === 'orderUp' ? { background: '#0000003b' } : null} eventKey='orderUp'>По возрастанию</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <DragDropContext onDragEnd={(e) => dragFile(e)}>
                    <Droppable droppableId='characters' direction='horizontal'  isCombineEnabled={true}>
                        {(provided) => (
                            <div className="files-container-content" {...provided.droppableProps} ref={provided.innerRef}>
                                {/* Вывод папок в зависимости от текущего id */}
                                <FoldersOutput id={id} />
                                {/* Если в store в ключе files есть ключ id, то выводим файлы которые там есть */}
                                <FilesOutput id={id} />
                                {/* Если пользователь заходит первый раз, то показывается сообщение */}
                                {
                                    fileFolder.files[id] === undefined && fileFolder.folders[id] === undefined &&
                                    <h2 className="if-page-empty">Спасибо, что пользуетесь нашим хранилищем</h2>
                                }
                                {provided.placeholder}
                            </div>

                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div >
    )
}