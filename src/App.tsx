import "./App.css";
import RunForm from "./components/RunForm";

function App() {
  return (
    <div className="grid  grid-cols-6 ">
      <div className="col-start-2 col-span-4 ">
        <div className="flex justify-evenly">
          <h1 className="text-3xl text-center m-8"> Runners ration</h1>
          <img className="h-20" src="src\assets\runner.gif" />
        </div>
        <RunForm />
      </div>
    </div>
  );
}

export default App;
