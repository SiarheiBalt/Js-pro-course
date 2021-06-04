import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sideBar/SideBar';
import Main from './components/main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import Education from './components/education/Education';
import UsedWorks from './components/usedWorks/UsedWorks';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header fullName={props.fullName} />
        <SideBar avatar={props.avatar} />
        <div className="app_wrapper__content">
          <Route path="/Main" render={()=> <Main desc={props.description}/>}/>
          <Route path="/Education" render={()=> <Education content={props.content.education}/>}/>
          <Route path="/UsedWorks" render={()=> <UsedWorks content={props.content.usedWorks}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;