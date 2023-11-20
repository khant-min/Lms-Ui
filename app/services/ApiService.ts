import axios from "axios";

class ApiService {
  private api;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080",
    });
  }

  async call(
    endpoint: string,
    method: HttpMethods,
    payload: unknown = "<BLANK>"
  ) {
    try {
      let response;
      switch (method) {
        case "GET":
          response = await this.api.get(endpoint);
          break;
        case "POST":
          response = await this.api.post(endpoint, payload);
          break;
        case "UPDATE":
          response = await this.api.put(endpoint, payload);
          break;
        case "DELETE":
          response = await this.api.delete(endpoint);
          break;
        default:
          console.log("Invalid call");
          break;
      }
      return Promise.resolve(response!.data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default new ApiService();
