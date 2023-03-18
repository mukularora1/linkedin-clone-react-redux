import "./App.css";
import Feed from "./feedBody/Feed";
import Header from "./header/Header";
import RightSideWiget from "./rightSidewidget/RightSideWidget";
import SideBar from "./sideBar/SideBar";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <RightSideWiget />
      </div>
      {/* main body */}
      {/* side bar */}
      {/* feed */}
      {/* widget */}
    </div>
  );
}

export default App;
