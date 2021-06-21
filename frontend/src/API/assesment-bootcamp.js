import Axios from "axios";

const assestmenBootcampClient = Axios.create({
  baseURL: "http://localhost:8000",
});

export default assestmenBootcampClient;
