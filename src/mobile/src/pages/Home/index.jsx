import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>PÁGINA INICIAL</h1>
            <p>Colocar os projetos desse usuario aqui!</p>
            <button onClick={() => navigate('/kanban')}>Projeto 1</button>
            <button onClick={() => navigate('/kanban')}>Projeto 2</button>
            <button onClick={() => navigate('/kanban')}>Projeto 3</button>
        </div>
    );
};

export default HomePage;
