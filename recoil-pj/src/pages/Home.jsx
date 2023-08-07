import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (  
    <div>
      <button onClick={() => navigate('/todolist')}>TodoList</button>
      <button onClick={() => navigate('/main')}>Main</button>
      <Outlet></Outlet>
    </div>
  );
}

export default Home;