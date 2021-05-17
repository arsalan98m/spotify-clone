// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-fa6d5.web.app";

const clientId = "adfd78897c8e4b7189669c0d0139bcc9";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-rated",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
