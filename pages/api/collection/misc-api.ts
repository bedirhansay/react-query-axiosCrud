import { Api } from "..";
export class MiscApi {
  denyBlogComments(id: string) {
    throw new Error("Method not implemented.");
  }
  private api: Api;
  constructor(api: Api) {
    this.api = api;
  }

  async subscribeEmail(email: string) {
    let form = new FormData();
    form.append("email", email);
    try {
      const response = await this.api.instance.post(
        "/email_subscription",
        form
      );
      if (!(response.status === 200)) {
        return { kind: "error" };
      }
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "email already in use" };
    }
  }

  async approveMerchantApplication(id: string) {
    try {
      const response = await this.api.instance.post(
        `/panel/merchant_application/${id}/approve`
      );

      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "email already in use" };
    }
  }

  async denyMerchantApplication(id: string) {
    try {
      const response = await this.api.instance.post(
        `/panel/merchant_application/${id}/deny`
      );

      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "email already in use" };
    }
  }
  async approveBlogComments(id: string) {
    try {
      const response = await this.api.instance.post(
        `/panel/blog_comment/${id}/approve`
      );
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "Approved doesn't allow" };
    }
  }
  async refuseBlogComments(id: string) {
    try {
      const response = await this.api.instance.post(
        `/panel/blog_comment/${id}/refuse`
      );
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "Refused doesn't allow" };
    }
  }
  async waitingBlogComments(id: string) {
    try {
      const response = await this.api.instance.post(
        `/panel/blog_comment/${id}/waiting`
      );
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "Waiting" };
    }
  }
  async approveReviews(id: string) {
    try {
      const response = await this.api.instance.post(
        `/panel/review/${id}/approve`
      );
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "Approved doesn't allow" };
    }
  }
  async refuseReviews(id: string) {
    try {
      const response = await this.api.instance.post(
        `/panel/review/${id}/refuse`
      );
      const { data } = response;
      return { kind: "ok", data };
    } catch (e) {
      return { kind: "Refused doesn't allow" };
    }
  }
}
