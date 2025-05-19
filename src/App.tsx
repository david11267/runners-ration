import './App.css';
import RunForm from './components/RunForm';

function App() {
  return (
    <div>
      <div className="flex justify-evenly">
        <h1 className="text-3xl text-center m-8"> Runners ration</h1>
        <img className="h-20" src="src\assets\runner.gif" />
      </div>
      <div className="grid grid-cols  flex flex-col justify-center ">
        <RunForm />
      </div>
    </div>
  );
}

export default App;
