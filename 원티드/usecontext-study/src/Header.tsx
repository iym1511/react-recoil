import { useContext } from "react";
import { NameContext } from "./NameContext";
import './App.css';


const Header = () => {
  const user = useContext(NameContext);

  console.log('user ------->', user);
  
  return (  
    <header className="App-header">
      <p>환영합니다. {user}님</p>
    </header>
  );
}

export default Header;