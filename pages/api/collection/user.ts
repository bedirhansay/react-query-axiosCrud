import { Api } from "../api";

export class UserApi {
  private api: Api;
  constructor(api: Api) {
    this.api = api;
  }
  async getUser(asPath: string) {
    try {
      const response = await this.api.instance.get("/user");
      if (!(response.status === 200)) {
        return { error: "Error" };
      }
      const { data } = response;
      return { succes: data };
    } catch (e) {
      return { error: "invalid credits" };
    }
  }
}
