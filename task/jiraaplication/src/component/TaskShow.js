import TaskCreate from "./TaskCreate";
import { useState } from 'react'

function TaskShow({ task, onDelete,onUpdate }) {

    const [showEdit, setShowEdit] = useState(false)//güncelle butonuna basılmayana kadar useState değeri false olarak kalacak.

    const handleDeleteClick = () => {
        onDelete(task.id);
    };
    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false);
        onUpdate(id, updatedTitle, updatedTaskDesc);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    console.log(task);
    return (
        <div className="task-show">

            {showEdit ? (
                <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
            ) : (
                <div>
                    <h3 className="task-title">Göreviniz</h3>
                    <p>{task.title}</p>
                    <h3 className="task-title">Yapılacaklar</h3>
                    <p>{task.taskDesc}</p>
                    <div>
                        <button className="task-delete" onClick={handleDeleteClick}>Sil</button>
                        <button className="task-edit" onClick={handleEditClick}>Güncelle</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default TaskShow;