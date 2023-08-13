import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import ToDoList from './Page/ToDoList';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/RegisterPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode='wait' >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/todolist/:list/:id' element={<ToDoList/>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
