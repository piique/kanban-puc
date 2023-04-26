import "./styles.css"

const TaskCard = (task) => {

    return (
        <div key={task?.id} className="card">
            <div className="titulo-card">{task?.title}</div>
            <div className="descricao-card">{task?.description}</div>
            <div className="pomodoros-card">Pomodoro(s): {task.pomodoroCount}</div>
        </div>
    )
}

export default TaskCard
