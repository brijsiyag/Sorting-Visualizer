import "./App.css";
import Body from "./Body/Body";
import Sidebar from "./SideBar/Sidebar";
import Header from "./Header/Header";
import { Notification } from "./Notification";
import Modal from "./ModalHandler/Modal";

const aboutAlgoStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "fit-content",
  overflow: "auto",
  bgcolor: "#222831",
  border: "1px solid gray",
  boxShadow: "white 0 0 5px 0.5px",
  p: 4,
  borderRadius: "5px",
};

function App() {
  const { innerWidth, innerHeight } = window;
  return (
    <div className="main-container">
      <Notification />
      <div>
        <Header />
      </div>
      <div className="sidebar-body-container">
        <Sidebar />
        <Body />
      </div>
      {(innerWidth < 1300 || innerHeight < 620) && (
        <Modal
          Component={() => {
            return (
              <div style={{ textAlign: "center" }}>
                <h3>This App is only for big screens.</h3>
                <br />
                <h4>Please open in bigger screen</h4>
              </div>
            );
          }}
          isOpen={true}
          setIsOpen={(e) => {
            console.log(e);
          }}
          data={{ style: aboutAlgoStyle }}
        />
      )}
    </div>
  );
}

export default App;
