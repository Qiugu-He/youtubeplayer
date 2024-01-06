import axios from 'axios';

export default axios.create({
baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: "AIzaSyCQVq_Bno1EuuF5lkD_N44Fu2myYyyCfLw"
  },
});