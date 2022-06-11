export const objEmptyRemover = (obj: any) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] === '') {
      delete obj[key];
    }
  });
  return obj
}
