export const API_URI = "http://localhost:4000";
export const token = "23asdasdas424323dasdas24";

export interface ApiConfig {
  url: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URI,
  // 10 seconds
  timeout: 10000,
};
