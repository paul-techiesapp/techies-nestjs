export type AppContextReq = {
  headers: Record<string, string>;
  user: any;
};

export type AppContext = {
  req: AppContextReq;
};
