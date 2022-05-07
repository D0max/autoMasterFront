
export interface IAuthReducer {
  loading: boolean,
  error: null | string
  code?: string,
  token: undefined | string
}
