import cl from "./App.module.css";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import Main from "./components/main/Main";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Education from "./components/education/Education";
import UsedWorks from "./components/usedWorks/UsedWorks";
import store from "./store";
const App7 = () => {
  let props = store.getState();
  return (
    <BrowserRouter basename="/lesson_07__BusinessCard">
      <div className={cl.app_wrapper}>
        <Header fullName={props.header.fullName} />
        <SideBar avatar={props.sideBar.avatar} />
        <div className={cl.app_wrapper__content}>
          {/* <Switch> */}
          <Route
            exact
            path="/Main"
            render={() => <Main desc={props.content.description} />}
          />
          <Route exact path="/">
            <Redirect to="/Main" />
          </Route>
          <Route
            path="/Education"
            render={() => <Education content={props.content.education} />}
          />
          <Route
            path="/UsedWorks"
            render={() => <UsedWorks content={props.content.usedWorks} />}
          />
          {/* </Switch> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App7;
