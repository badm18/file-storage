import React from 'react'
import { useSelector } from 'react-redux';
import { FileFolder } from '../../Redux/Reducers/FilesFoldresReducer'
import { Link } from 'react-router-dom'
import { Droppable } from 'react-beautiful-dnd';


export const FoldersOutput = ({ id }) => {
    const fileFolder = useSelector(FileFolder)

    return (
        <>
            {
                fileFolder.folders[id] &&
                fileFolder.folders[id].map(i =>
                    <Link className="link-to-folder" to={`/mainPage/folder/${i.id}`}>
                        <Droppable droppableId={i.id} isCombineEnabled={true}>
                            {(provided) => (
                                <div className="file-item" key={i.id} {...provided.droppableProps} ref={provided.innerRef} >
                                    <img src="https://c0.klipartz.com/pngpicture/547/938/gratis-png-equipo-iconos-icono-diseno-apple-icono-formato-carpeta-amarilla-s.png" alt="папка" className="file-icon" />
                                    <p className="file-name">{i.name}</p>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </Link>
                )
            }
        </>
    )
}