import './index.css'
import Task from './components/Task.jsx'
import StateObj from './components/StateObj.jsx'
import GetInput from './components/GetInput.jsx';
import SetTimeOut from './components/SetTimeOut.jsx';
import UserList from './components/UserList.jsx';
const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Task />
      <GetInput />
      <UserList/>
      <SetTimeOut />
      <StateObj />
    </div>
    
  );
}
export default App;   