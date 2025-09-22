import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ chosenPlayers,removePlayer }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {chosenPlayers.map((chosenPlayer) =><SelectedCard removePlayer={removePlayer} chosenPlayers={chosenPlayers} chosenPlayer={chosenPlayer}></SelectedCard>
      )}
    </div>
  );
};

export default SelectedPlayers;
