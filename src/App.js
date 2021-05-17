import { useEffect } from "react";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import Player from "./components/Player";
import { useDataLayerValue } from "./GlobalState/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", payload: _token });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", payload: user });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", payload: playlists });
      });

      spotify.getPlaylist("2sgFAUC4NjcScrEfxqofDs").then((response) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", payload: response });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
