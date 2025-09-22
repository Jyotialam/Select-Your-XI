import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  chosenPlayers,
  setChosenPlayers,
}) => {
  const playerData = use(playersPromise);
  //   console.log(playerData);

  return (
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-[60px]">
      {playerData.map((player) => (
        <PlayerCard
          key={player.id}
          chosenPlayers={chosenPlayers}
          setChosenPlayers={setChosenPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
