import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config";
import axios, { AxiosError, AxiosInstance } from "axios";

export class Api {
  instance!: AxiosInstance;
  config!: ApiConfig;
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.setup();
  }
  setup() {
    const api = axios.create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
    });
    api.interceptors.request.use(
      (config) => {
        config.baseURL = this.config.url;
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        return config;
      },
      (error: AxiosError) => {
        Promise.reject(error);
      }
    );
    this.instance = api;
  }
  setAuth(jwt: string) {
    this.instance.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }
  setLanguage(language: string) {
    this.instance.interceptors.request.use((config) => {
      axios.defaults.headers.common["X-localization"] = language;
      return config;
    });
  }
  get auth() {
    return new AuthApi(this);
  }

  get features() {
    return new FeaturesApi(this);
  }

  get cart() {
    return new CartApi(this);
  }

  get google() {
    return new GoogleApi(this);
  }

  get article() {
    return new ArticleApi(this);
  }

  get createCategories() {
    return new CategoryMutate(this);
  }
  get miscEndpoints() {
    return new MiscApi(this);
  }
}
export default new Api();
