import "./App.css";
import RunForm from "./components/RunForm";

function App() {
  return (
    <div className="grid  grid-cols-6 ">
      <div className="col-start-2 col-span-4 ">
        <h1 className="text-3xl text-center m-8"> Runners ration</h1>
        <RunForm />
      </div>
    </div>
  );
}

export default App;
