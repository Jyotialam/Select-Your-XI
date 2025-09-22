import React, { useState } from "react";
import userIcon from "../../assets/user.png";
import flagIcon from "../../assets/flag.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  chosenPlayers,
  setChosenPlayers,
}) => {
  // console.log(player);
  const [isSelected, setIsSelected] = useState(false);

  //
  const handleSelected = (playerData) => {
    if (chosenPlayers.length === 6) {
      toast("⭕6 Players already selected");
      return;
    }
    //
    if (availableBalance < playerData.price) {
      toast("❌Insufficient coin ");
      return;
    }

    setIsSelected(true);
    setAvailableBalance(availableBalance - playerData.price);

    //selected Player
    setChosenPlayers([...chosenPlayers, playerData]);
    toast("✅Player Selected")
  };
  return (
    <div className="card bg-base-100 w-96 shadow-md p-4 mx-auto">
      <figure>
        <img
          className="h-[300px] object-cover w-full"
          src={player.playerImage}
          alt="Shoes"
        />
      </figure>
      <div className="">
        <div className="flex gap-2 mt-2 items-center">
          <img className="w-[20px] h-[20px]" src={userIcon} alt="" />
          <h2 className="card-title">{player.playerName}</h2>
        </div>
        <div className="flex justify-between items-center mb-2 pb-3 border-b-1 border-gray-300">
          <div className="flex gap-2 items-center">
            <img className="w-[18px] h-[18px]" src={flagIcon} alt="" />
            <span>{player.country}</span>
          </div>
          <button className="btn py-1">{player.playingRole}</button>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between items-center mb-1">
          <span className="font-bold">{player.bowlingStyle}</span>
          <span>{player.battingStyle}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">Price: ${player.price}</span>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn "
          >
            {isSelected === true ? "Selected" : "Choose player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
