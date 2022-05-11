export const saveToLocalStorage = (token: string) => {
  try {
    localStorage.setItem('token', token);
  } catch (e) {
    console.log('Could not save state');
  }
}
