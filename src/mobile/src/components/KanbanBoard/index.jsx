import { useCallback, useEffect, useMemo, useState } from "react";
import TaskFormModal from "../TaskFormModal";
import "./styles.css"
import TaskCard from "../TaskCard";
import { getAllTasks, insertTask, updateTaskById } from "../../api";

const KanbanBoard = () => {

    const [showModal, setShowModal] = useState(false);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks()
            .then((response) => {
                const _tasks = response.data.map((task) => ({
                    id: task.id,
                    title: task.name,
                    description: task.description,
                    pomodoroCount: task.estimated_pomodoros,
                    status: task.status,
                }));

                setTasks(_tasks);
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao carregar as tarefas");
                console.log(error);
            })
            .finally(() => {
                // console.log("Finalizando a requisição");
            });
    }, []);

    const saveNewTask = ({ title, description, pomodoroCount, status }) => {
        console.log("AQUI ENTRA O BACKEND");
        console.log("Salvando nova tarefa");
        console.table({ title, description, pomodoroCount, status });

        const objToSend = {
            name: title,
            description,
            pomodoroCount,
            status,
        };

        insertTask(objToSend)
            .then((response) => {
                console.log('response', response);
                console.log("Tarefa salva com sucesso");
                setTasks(prevState => [...prevState, { id: response.data.id, title, description, pomodoroCount, status: Number(status) }]);
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao salvar a tarefa");
                console.log(error);
            })
            .finally(() => {
                // fecha o modal
                setShowModal(false);
                console.log("Finalizando a requisição");
            });
    };

    const tasksToDo = useMemo(() => tasks.filter((task) => task.status === 0), [tasks]);

    const tasksDoing = useMemo(() => tasks.filter((task) => task.status === 1), [tasks]);

    const tasksDone = useMemo(() => tasks.filter((task) => task.status === 2), [tasks]);

    const updateStatusTask = useCallback((idTask, newStatus) => {
        updateTaskById(idTask, { status: newStatus })
            .then(() => {
                setTasks((prevState) => {
                    const newStateTasks = prevState.map((task) => {
                        if (task.id === idTask) {
                            return {
                                ...task,
                                status: Number(newStatus),
                            };
                        }
                        return task;
                    });
                    return newStateTasks;
                });
            })
            .catch((error) => {
                alert('Não foi possível atualizar a tarefa. Entre em contato com o administrador do sistema!');
                console.log("Ocorreu um erro ao updatar a tarefa");
                console.log(error);
            })
            .finally(() => {
                // console.log("Finalizando a requisição");
            });
    }, [])

    return (
        <>
            {showModal && <TaskFormModal showModal={showModal} onClose={() => setShowModal(false)} onSubmit={saveNewTask} />}
            <div className="quadro">
                <div className="coluna">
                    <div className="titulo-coluna">A fazer</div>
                    {tasksToDo.map((task) => (
                        <TaskCard key={task.id} task={task} updateStatusTask={updateStatusTask} />
                    ))}
                </div>
                <div className="coluna">
                    <div className="titulo-coluna">Fazendo</div>
                    {tasksDoing.map((task) => (
                        <TaskCard key={task.id} task={task} updateStatusTask={updateStatusTask} />
                    ))}
                </div>
                <div className="coluna">
                    <div className="titulo-coluna">Concluído</div>
                    {tasksDone.map((task) => (
                        <TaskCard key={task.id} task={task} updateStatusTask={updateStatusTask} />
                    ))}
                </div>
                <button className="botao-adicionar" onClick={() => setShowModal(true)}>Adicionar Tarefa</button>
            </div>
        </>
    );
};

export default KanbanBoard;
