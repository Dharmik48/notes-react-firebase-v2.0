import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import Account from "./Account";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import "../css/NotesDark.css";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import sun from "../images/icons8-sun-48.png";
import moon from "../images/icons8-moon-64.png";
const colors = [
  {
    order: 1,
    color: "yellow",
  },
  {
    order: 2,
    color: "orange",
  },
  {
    order: 3,
    color: "purple",
  },
  {
    order: 4,
    color: "blue",
  },
  {
    order: 5,
    color: "green",
  },
];

const App = () => {
  const [createNote, setCreateNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [color, setColor] = useState("");
  const [mode, setmode] = useState("light"); // states for light and dark mode
  const [mode_img, setmode_img] = useState(moon); // states for images mode wise
  const [mystyle, setmystyle] = useState({
    backgroundColor: "white",
  }); // setting style for default i,e. light state

  // function to toggle mode
  const toggle = () => {
    if (mode === "light") {
      setmystyle({
        transition: "0.5s",
        backgroundColor: "#010824",
        color: "white",
      });

      setmode((prevmode) => "dark");
      setmode_img((prevmode_img) => sun);
    } else {
      setmystyle({
        transition: "0.5s",
        backgroundColor: "white",
      });
      setmode((prevmode) => "light");
      setmode_img((prevmode_img) => moon);
    }
  };
  useEffect(() => {
    (async () => {
      if (user) {
        const res = await db.collection("notes").doc(user.uid).get("notes");
        if (res.exists) {
          if (res.data().notes) {
            console.log("data is available");
            setNotes(res.data().notes);
          }
        }
        // console.log(res)
      }
    })();
  }, [user]);

  return (
    <>
      <div className="mode">
        {" "}
        {/* // button to switch mode */}
        <img
          src={mode_img}
          height="40px"
          width="40px"
          alt=""
          onClick={toggle}
          className="toggle-img"
        />
      </div>
      <div className="app" style={mystyle}>
        <SideBar
          colors={colors}
          setColor={setColor}
          setCreateNote={setCreateNote}
          user={user}
          mode={mode}
        />
        <main>
          <nav>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Account
              user={user}
              setUser={setUser}
              setNotes={setNotes}
              setCreateNote={setCreateNote}
              setSearchTerm={setSearchTerm}
            />
          </nav>
          <h1>Notes.</h1>
          {createNote ? (
            <CreateNote
              color={color}
              notes={notes}
              user={user}
              setCreateNote={setCreateNote}
              setNotes={setNotes}
              mode={mode}
            />
          ) : (
            <Notes
              searchTerm={searchTerm}
              notes={notes}
              user={user}
              setNotes={setNotes}
              mode={mode}
            />
          )}
        </main>
      </div>
    </>
  );
};

export default App;
