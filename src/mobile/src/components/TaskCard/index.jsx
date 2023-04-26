import "./styles.css"

const TaskCard = ({ task, updateStatusTask }) => {
    return (
        <div key={task?.id} className="card">
            <div className="titulo-card">{task?.title}</div>
            <div className="descricao-card">{task?.description}</div>
            <div className="pomodoros-card">Pomodoro(s): {task.pomodoroCount}</div>
            <select id="status" className="select-input" value={task.status} onChange={(e) => updateStatusTask(task.id, e.target.value)}>
                <option value={0}>A fazer</option>
                <option value={1}>Fazendo</option>
                <option value={2}>Concluído</option>
            </select>
        </div>
    )
}

export default TaskCard
