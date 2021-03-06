import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import './App.css';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidUpdate from './ComponentDidUpdate';
import Hooks from './Hooks';
import HooksUI from './HooksUI';
import HotelsUI from './HotelsUI';
import Increment from './Increment';
import Login from './Login';
import MainClass from './MainClass';
import MaterialUI from './MaterialUI';
import Profile from './Profile';
import ReducBasics from './ReduxBasics';
import SignUp from './SignUp';
import SimpleJest from './SimpleJest';
import SliceUI from './SliceUI';
import { UserContext } from './UserProvider';
import UserClass from './UsersClass';
import WebsiteReducerUI from './WebsitereducerUI';

function App() {
  const context = useContext(UserContext)
  return (
    <switch>
      <Route exact path='/a' component={ComponentA}/>
      <Route exact path='/b/:name' component={ComponentB}/>
      <Route exact path='/c' component={ComponentC}/>
      <Route exact path='/main' component={MainClass}/>
      <Route exact path='/increment' component={()=> <Increment init={8}/>}/>
      <Route exact path='/users' component={UserClass}/>
      <Route exact path='/Hooks' component={Hooks}/>
      <Route exact path='/ComponentDidMount' component={ComponentDidMount}/>
      <Route exact path='/ComponentDidUpdate' component={ComponentDidUpdate}/>
      {/* Redux */}
      <Route exact path='/ReduxBasics' component={ReducBasics}/>
      <Route exact path='/WebsiteReducerUI' component={WebsiteReducerUI}/>
      <Route exact path='/SliceUI' component={SliceUI}/>
      <Route exact path='/HooksUI' component={HooksUI}/>
      {/* MaterialUi */}
      <Route exact path='/MaterialUI' component={MaterialUI}/>
      {/* Project */}
      <Route exact path='/HotelsUI' component={HotelsUI}/>
      {!context?.uid && <Route exact path='/Login' component={Login}/>}
      {!context?.uid && <Route exact path='/SignUp' component={SignUp}/>}
      {context?.uid && <Route exact path='/Profile' component={Profile}/>}

    {/* Jest tests */}
    <Route exact path='/SimpleJest' component={SimpleJest}/>



      <Route exact path='/' render={() => <Redirect to="/HotelsUI"/>}/>


    </switch>
  );
}

export default App;
