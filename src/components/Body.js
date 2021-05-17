import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../GlobalState/DataLayer";
import PlayerCircleFilledIcon from "@material-ui/icons/PlayCircleFilledRounded";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayerCircleFilledIcon className="body__shuffle" />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks?.items?.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
