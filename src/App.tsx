import logo from './logo.svg';
import './App.css';
import { Redirect, Route } from 'react-router';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import MainClass from './MainClass';
import Increment from './Increment';
import UserClass from './UsersClass';
import Hooks from './Hooks';
import ComponentDidMount from './ComponentDidMount';
import ComponentDidUpdate from './ComponentDidUpdate';
import ReducBasics from './ReduxBasics';
import WebsiteReducerUI from './WebsitereducerUI';
import SliceUI from './SliceUI';
import HotelsUI from './HotelsUI';
import HooksUI from './HooksUI';
import SignUp from './SignUp';
import Login from './Login';
import MaterialUI from './MaterialUI';
import Profile from './Profile';

function App() {
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
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/SignUp' component={SignUp}/>
      <Route exact path='/Profile' component={Profile}/>
      <Route exact path='/' render={() => <Redirect to="/HotelsUI"/>}/>


    </switch>
  );
}

export default App;
