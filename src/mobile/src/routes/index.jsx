import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Page
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login/Login';
import KanbanPage from '../pages/Kanban';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/kanban" element={<PrivateRoute> <KanbanPage /> </PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
