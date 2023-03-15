import { Api } from "../api";
export class ArticleApi {
  private api: Api;
  constructor(api: Api) {
    this.api = api;
  }
  async getAllIds(lan: string) {
    try {
      const response = await this.api.instance.get(`/blogs`, {
        headers: {
          "X-localization": lan,
        },
      });
      if (!(response.status === 200)) {
        return { kind: "error" };
      }
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "invalid-creds" };
    }
  }
  async getSingleID(id: string, lan: string) {
    try {
      const response = await this.api.instance.get(`/blogs/${id}`, {
        headers: {
          "X-localization": lan,
        },
      });
      if (!(response.status === 200)) {
        return { kind: "error" };
      }
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "invalid-creds" };
    }
  }

  async getRecommended(lan: string) {
    try {
      const response = await this.api.instance.get(`/recommended_blogs`, {
        headers: {
          "X-localization": lan,
        },
      });
      if (!(response.status === 200)) {
        return { kind: "error" };
      }
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "invalid-creds" };
    }
  }

  async getRelated(id: string, lan: string) {
    try {
      const response = await this.api.instance.get(
        `/related_blogs?blog_id=${id}`,
        {
          headers: {
            "X-localization": lan,
          },
        }
      );
      if (!(response.status === 200)) {
        return { kind: "error" };
      }
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "invalid-creds" };
    }
  }
}
