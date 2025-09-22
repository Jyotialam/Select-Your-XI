import React from "react";

const SelectedCard = ({ chosenPlayer, removePlayer }) => {
  // console.log(chosenPlayer);
  const handleRemove = () => {
    removePlayer(chosenPlayer);
  };
  return (
    <div className="border-2 border-gray-300 mt-3 rounded-lg p-2 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <img
          className="h-[50px] w-[50px] rounded-md"
          src={chosenPlayer.playerImage}
          alt=""
        />
        <div>
          <h1 className="font-bold">{chosenPlayer.playerName}</h1>
          <p className="text-sm font-light">{chosenPlayer.battingStyle}</p>
        </div>
      </div>
      <div onClick={handleRemove} className="cursor-pointer">
        <img src="https://i.ibb.co.com/Vc5jwKFS/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
