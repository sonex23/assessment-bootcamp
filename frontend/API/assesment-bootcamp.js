import Axios from "axios";

const assestmenBootcampClient = Axios.create({
  baseURL: "https://localhost:8000",
});

export default assestmenBootcampClient;
