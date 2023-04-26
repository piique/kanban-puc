import "./styles.css"
import { useState } from 'react';
import { updateTaskById } from "../../api";

const TaskCard = ({task}) => {
    const [status, setStatus] = useState(0);

    function updateStatus(id,value){
        const payload={
            "status":value
        }
        updateTaskById(id,payload)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log("Ocorreu um erro ao updatar a tarefa");
            console.log(error);
        })
        .finally(() => {
            // fecha o modal
            window.location.reload()
            setShowModal(false);
            console.log("Finalizando a requisição");
        });
    }
    

    return (
        <div key={task?.id} className="card">
            <div className="titulo-card">{task?.title}</div>
            <div className="descricao-card">{task?.description}</div>
            <div className="pomodoros-card">Pomodoro(s): {task.pomodoroCount}</div>
            <select id="status" className="select-input" value={task.status} onChange={(e) => updateStatus(task.id,e.target.value)}>
                        <option value={0}>A fazer</option>
                        <option value={1}>Fazendo</option>
                        <option value={2}>Concluído</option>
            </select>
        </div>
    )
}

export default TaskCard
