export interface ICheckbox {
  checked: boolean,
  setChecked: <T>(e: T) => void,
  text: string,
  name: string,
}
