import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    
    if(toDo === "") {
      return;
    } 
    
    // 새로운 변수 활용 예시
    // const newToDos = [...toDos]
    // newToDos.push({
    //   title:toDo
    // });    
    // setToDos(newToDos);    

    setToDos((current) => [...current, {title:toDo}]);
    setToDo("");
  }
  
  useEffect(() => console.log(toDos), [toDos]);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <div>
        <ul>
          {toDos.map((item, index) => <li key={index}>{item.title}</li>)}
        </ul>
      </div>
      <form onSubmit={onSubmit}>
        <input value={toDo}
            type="text"
            onChange={onChange}
            placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
