export interface ILoginBody {
  email?: string,
  password?: string,
  isChecked?: boolean,
}

export interface IRegistrationBody {
  email?: string,
  username?: string,
  password?: string
}

export interface IForgotPassword {
  email?: string,
  code?: string,
}
