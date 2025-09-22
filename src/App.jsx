import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/NavBar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

//fetch
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
//fetch promise
const playersPromise = fetchPlayers();

function App() {
  //toggle state
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(7000000);
  const [chosenPlayers, setChosenPlayers] = useState([]);
  //
  const removePlayer = (p) => {
    const filteredData = chosenPlayers.filter((ply) => ply.id !== p.id);
    // console.log(filteredData);
    setChosenPlayers(filteredData);
    setAvailableBalance(availableBalance + parseInt(p.price));
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="mt-10 max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold">
          {toggle === true
            ? "Available Players"
            : `Selected Player (${chosenPlayers.length}/6)`}
        </h1>
        <div className="">
          <button
            onClick={() => setToggle(true)}
            className={`btn font-semibold rounded-r-none rounded-l-lg ${
              toggle === true ? "bg-[#e7fe29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn font-light rounded-r-lg rounded-l-none ${
              toggle === false ? "bg-[#e7fe29]" : ""
            }`}
          >
            Selected{" "}
            <span className="font-semibold">({chosenPlayers.length})</span>
          </button>
        </div>
      </div>
      {/* toggle page */}
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            chosenPlayers={chosenPlayers}
            setChosenPlayers={setChosenPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          chosenPlayers={chosenPlayers}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}
export default App;
