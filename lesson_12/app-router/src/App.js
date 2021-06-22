import cl from "./App.module.css";
import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import App7 from "./components/lesson_07__BusinessCard/App";
import App8 from "./components/lesson_08/Clicker/App";
import AppToDo from "./components/lesson_08/ToDo/App";
import AppEmoji from "./components/lesson_09/App.jsx";
import AppPosts from "./components/lesson_10/Posts/App.jsx";
import AppPictures from "./components/lesson_10/Focus/App.jsx";
import { Post } from "./components/lesson_11/components/post/Post.jsx";
import { FacebookPost } from "./components/lesson_11/components/postFacebook/FacebookPost";
import { store } from "./components/lesson_11/store";
import { Banner } from "./components/lesson_11/components/banner/Banner.jsx";
import { Converter } from "./components/lesson_11/components/converter/Converter";
import { CarouselList } from "./components/lesson_13/CarouselList";
import { Info } from "./components/lesson_10/Posts/components/post/Info";
import { Provider } from "react-redux";
import { storeHead } from "./redux/store";

function App() {
  return (
    <Provider store={storeHead}>
      <BrowserRouter>
        <div className={cl.App}>
          <div className={cl.nav_Bar}>
            <ol>
              <NavLink to="/lesson_07__BusinessCard" activeClassName={cl.activ}>
                Busines card
              </NavLink>
            </ol>
            <ol>
              <li>
                <NavLink to="/lesson_08/Clicker" activeClassName={cl.activ}>
                  Clicker
                </NavLink>
              </li>
              <li>
                <NavLink to="/lesson_08/ToDo" activeClassName={cl.activ}>
                  ToDo
                </NavLink>
              </li>
              <li>
                <NavLink to="/lesson_09" activeClassName={cl.activ}>
                  Emoji
                </NavLink>
              </li>
              <li>
                <NavLink to="/lesson_10/Posts" activeClassName={cl.activ}>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/lesson_10/Focus" activeClassName={cl.activ}>
                  Focus
                </NavLink>
              </li>
            </ol>
            <ol>
              <li>
                <NavLink
                  to="/lesson_11/components/post"
                  activeClassName={cl.activ}
                >
                  Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson_11/components/postFacebook"
                  activeClassName={cl.activ}
                >
                  Facebook
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson_11/components/banner"
                  activeClassName={cl.activ}
                >
                  Banner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson_11/components/converter"
                  activeClassName={cl.activ}
                >
                  Converter
                </NavLink>
              </li>
              <li>
                <NavLink to="/lesson_12" activeClassName={cl.activ}>
                  Carousel
                </NavLink>
              </li>
            </ol>
          </div>
          <div className={cl.main}>
            <Route exact path="/lesson_07__BusinessCard" component={App7} />
            <Route exact path="/">
              <Redirect to="/lesson_07__BusinessCard" />
            </Route>
            <Route path="/lesson_08/Clicker" component={App8} />
            <Route path="/lesson_08/ToDo" component={AppToDo} />
            <Route path="/lesson_09" component={AppEmoji} />
            <Route path="/lesson_10/Posts" component={AppPosts} />
            <Route path="/lesson_10/Info/:id" component={Info} />
            <Route path="/lesson_10/Focus" component={AppPictures} />
            <Route
              path="/lesson_11/components/post"
              render={() => (
                <Post
                  title={store.state.posts[0].title}
                  subtitle={store.state.posts[0].subtitle}
                  autor={store.state.posts[0].autor}
                />
              )}
            />
            <Route
              path="/lesson_11/components/postFacebook"
              render={() => (
                <FacebookPost
                  foto={store.state.facebookPosts[0].userFoto}
                  name={store.state.facebookPosts[0].name}
                  location={store.state.facebookPosts[0].location}
                  timeText={store.state.facebookPosts[0].timeText}
                  post={store.state.facebookPosts[0].postDescription}
                />
              )}
            />
            <Route
              path="/lesson_11/components/banner"
              render={() => (
                <Banner
                  title={store.state.banner[0].title}
                  background={store.state.banner[0].backgroundImageUrl}
                  category={store.state.banner[0].category}
                  commentCount={store.state.banner[0].commentCount}
                />
              )}
            />
            <Route
              path="/lesson_11/components/converter"
              component={Converter}
            />
            <Route path="/lesson_12" component={CarouselList} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
