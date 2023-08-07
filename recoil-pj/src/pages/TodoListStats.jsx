import { useRecoilValue } from "recoil";
import { todoListStatesState } from "../hooks/todoRecoil";

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatesState);

  // percentCompleted 값을 100을 곱하여 백분율로 변환하고, 
  // 그 변환된 값을 Math.round() 함수를 사용하여 
  // 가장 가까운 정수로 반올림합니다.
  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (  
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}%</li>
      </ul>
    </div>
  );
}

export default TodoListStats;