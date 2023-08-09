import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { autoFamilyState, btnState, objectState, selectorFamilyState, selectorState } from "../hooks/atom";
import useDebounce from "../hooks/useDebounce";

const Main = () => {

  const globalstate = useRecoilValue(btnState);
  const [text, setText] = useRecoilState(btnState);
  const resetState = useResetRecoilState(btnState);
  const result = useRecoilValue(selectorState);

  const [objects, setObject] = useRecoilState(objectState);
  const debounce = useDebounce(objects);
  console.log(debounce)

  const atomFamilyNumber = useRecoilValue(autoFamilyState(2));
  // atomFamilyNumber의setState를 담당한다. state와 같은 인자를넣어 상태를읽고 업데이트함
  const setAtomFamilyNumber = useSetRecoilState(autoFamilyState(2));

  const [selectorFamilyResult, setSelectorFamilyResult] = useRecoilState(selectorFamilyState("셀렉터 페밀리 테스트"));

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setObject((prev) => ({...prev, [name]: value}))
  
  }

  const atomFamilyHandler = (e) => {
    const { name, value } = e.target;
    setAtomFamilyNumber((prev) => ({...prev, [name]: value}));
  }

  const selectorFamilyHandler = () => {
    setSelectorFamilyResult("눌러서 변경함!");
  }


  return (  
    <div>
      <h1>atom</h1>
      <button onClick={()=>{setText("문자1로 변환")}}>문자변환1</button>
      <button onClick={()=>{setText("문자2로 변환")}}>문자변환2</button>
      <button onClick={()=> resetState()}>리셋</button>
      <h3>{globalstate}</h3>
      <h3>{text}</h3>
      <h3>selector : {result}</h3>
      {/* 
					selector 에서 가져오는값을 btnState 에서 가져오기에 btnState를 구독중이라는 것이다.
          그래서 atoms 의 값이 바뀌면 구독하고있는 selectors의 값도 바뀐다.
      */}
      <input type="text" name="text" onChange={inputHandler}/>
      <input type="text" name="id" onChange={inputHandler}/>
      <h3>name : {objects.text}</h3>
      <h3>id : {objects.id}</h3>

      <br />

      <h1>atomFamily</h1>
      <input type="text" name="text" onChange={atomFamilyHandler}/>
      <h3>atomFamilyState[number] : {atomFamilyNumber.number}</h3>
      <h3>atomFamilyState[text] : {atomFamilyNumber.text}</h3>

      <br />

      <h1>selectorFamily</h1>
      <button onClick={selectorFamilyHandler}>버튼</button>
      <h3>{selectorFamilyResult}</h3>

    </div>
  );
}

export default Main;