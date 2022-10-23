export type ResponseType<T = any> = {
  code?: number;
  data?: T;
  msg?: string;
};
