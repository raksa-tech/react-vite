import './index.css'
import Task from './components/Task.jsx'
import StateObj from './components/StateObj.jsx'
import GetInput from './components/GetInput.jsx';
import SetTimeOut from './components/SetTimeOut.jsx';
import UserList from './components/UserList.jsx';
import Toggle from './components/Toggle.jsx';
import FetchingData from './components/FetchingData.jsx';
import Form from './components/Form.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Form/>
      <FetchingData/>
      <Toggle/>
      <Task />
      <GetInput />
      <UserList/>
      <SetTimeOut />
      <StateObj />
    </div>
    
  );
}
export default App;   