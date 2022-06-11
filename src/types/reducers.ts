
export interface IAuthReducer {
  loading: boolean,
  error: null | string
  code?: string,
  token: undefined | string
}

export interface IToken {
  token: string
};

export interface IMessage {
  message: string
};


export interface IUserReducer {
  loading: boolean,
  errors?: null ,
  user: {}
  users: []
}
