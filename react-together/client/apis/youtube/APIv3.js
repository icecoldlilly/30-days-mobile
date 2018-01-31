import {GOOGLE_API_KEY} from 'react-native-dotenv'
export default class Api {
  static search(query) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${query}&key=${GOOGLE_API_KEY}`;

    return fetch(url)
    .then(response => response.json())
    .then(json     => json)
    .catch(error   => console.warn(error));
  }
  static featured() {
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&type=video&chart=mostPopular&maxResults=20&key=${GOOGLE_API_KEY}`;

    return fetch(url)
    .then(response => response.json())
    .then(json     => {json; console.log(json)})
    .catch(error   => console.warn(error));
  }
}