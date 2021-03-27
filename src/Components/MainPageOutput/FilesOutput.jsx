import React from 'react'
import { useSelector } from 'react-redux';
import { FileFolder } from '../../Redux/Reducers/FilesFoldresReducer'
import { Draggable } from 'react-beautiful-dnd';
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

export const FilesOutput = ({id} ) => {
    const fileFolder = useSelector(FileFolder)
 
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

    return (
        <>
            {
                
                fileFolder.files[id] &&
                fileFolder.files[id].map((i, index) =>
                    <Draggable key={i.id} draggableId={i.id} index={index} >
                      
                        {(provided) => (
                            <OverlayTrigger
                                key={i.id}
                                placement="auto"
                                delay={{ show: 150, hide: 100 }}
                                overlay={renderTooltip(i)}
                            >
                                <div className="file-item" key={i.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <img src="https://img2.freepng.ru/20180320/zew/kisspng-computer-icons-filename-extension-image-file-forma-file-format-png-icon-5ab089deeeb233.7263924815215190709777.jpg" alt="файл" className="file-icon" />
                                    <p className="file-name">{i.name}.txt</p>
                                </div>
                            </OverlayTrigger>
                        )}
                    </Draggable>
                )
            }
        </>
    )
}