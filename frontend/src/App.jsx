import PostsList from "./components/PostsList";
import "./App.css";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function showModalHandler() {
    setModalIsOpen(true);
  }

  function setHideModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <PostsList
          isPosting={modalIsOpen}
          onStopPosting={setHideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
