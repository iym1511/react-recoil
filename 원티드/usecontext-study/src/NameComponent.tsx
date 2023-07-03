import { ReactNode } from "react";
import { NameContext } from "./NameContext";
import Header from "./Header";

type NameComponentProps = {
  children: ReactNode;
};

const NameComponent = ({ children }: NameComponentProps) => {
  const name = "문일윤"
  
  return (  
    <div>
      <NameContext.Provider value={name}>
        {children}
        <Header />
      </NameContext.Provider>
    </div>
  );
}

export default NameComponent;