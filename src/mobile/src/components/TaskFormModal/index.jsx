/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles.css';

function TaskFormModal({ showModal, onClose, onSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pomodoroCount, setPomodoroCount] = useState(0);
    const [status, setStatus] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, description, pomodoroCount });
        setTitle('');
        setDescription('');
        setPomodoroCount(0);
    }

    return (
        <div className={showModal ? "modal show" : "modal"}>
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Título:</label>
                    <input id="title" type="text" className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="description">Descrição:</label>
                    <textarea id="description" className="form-input" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <label htmlFor="pomodoroCount">Quantidade de pomodoros:</label>
                    <input id="pomodoroCount" type="number" className="form-input" value={pomodoroCount} onChange={(e) => setPomodoroCount(e.target.value)} />

                    <label htmlFor="status">Status:</label>
                    <select id="status" className="select-input" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="A fazer">A fazer</option>
                        <option value="Fazendo">Fazendo</option>
                        <option value="Concluído">Concluído</option>
                    </select>

                    <div className="buttons-wrapper">
                        <button onClick={onClose} className="button-modal">Cancelar</button>
                        <button type="submit" className="button-modal">Salvar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default TaskFormModal;
