
export interface IObjIsAllowed {
  role: string,
}

export interface IPrivateRoute {
  isAllowed: IObjIsAllowed,
  children: JSX.Element
}
