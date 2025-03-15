import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tileObject, index) => {
        const { name, ...rest } = tileObject;

        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};
