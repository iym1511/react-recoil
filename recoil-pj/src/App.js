import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
    children : [
      {
        path : '/todolist',
        element : <TodoList/>
      },
      {
        path : '/main',
        element : <Main/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
