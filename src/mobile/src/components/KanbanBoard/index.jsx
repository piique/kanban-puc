import { useState } from "react";
import TaskFormModal from "../TaskFormModal";
import "./styles.css"

const KanbanBoard = () => {

    const [showModal, setShowModal] = useState(false);

    const tasks = [
        {
            id: 1,
            title: "Tarefa 1",
            description: "Descrição da tarefa 1",
            pomodoroCount: 1,
            status: 0,
        },
        {
            id: 2,
            title: "Tarefa 1",
            description: "Descrição da tarefa 1",
            pomodoroCount: 1,
            status: 1,
        },
    ];

    const saveNewTask = ({ title, description, pomodoroCount }) => {
        console.log("AQUI ENTRA O BACKEND");
        console.log("Salvando nova tarefa");
        console.table({ title, description, pomodoroCount })

        // Fecha o modal
        setShowModal(false);
    };

    console.log(tasks)

    /*
    const tasksToDo = tasks.filter((task) => task.status === 0);

    const tasksDoing = tasks.filter((task) => task.status === 1);

    const tasksDone = tasks.filter((task) => task.status === 2);
    */

    return (
        <>
            <TaskFormModal showModal={showModal} onClose={() => setShowModal(false)} onSubmit={saveNewTask} />
            <div className="quadro">
                <div className="coluna">
                    <div className="titulo-coluna">A fazer</div>
                    <div className="card">
                        <div className="titulo-card">Tarefa 1</div>
                        <div className="descricao-card">Descrição da tarefa 1</div>
                    </div>
                </div>
                <div className="coluna">
                    <div className="titulo-coluna">Fazendo</div>
                </div>
                <div className="coluna">
                    <div className="titulo-coluna">Concluído</div>
                </div>
                <button className="botao-adicionar" onClick={() => setShowModal(true)}>Adicionar Tarefa</button>
            </div>
        </>
    );
};

export default KanbanBoard;