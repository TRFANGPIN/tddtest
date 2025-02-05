export const stringcalc = (str: string): number => {
  if (str.length == 0) {
    return 0;
  }
  let strarr = str.match(/\d/g);
  let value: any = strarr?.reduce((a: any, b: any) => {
    return parseInt(a) + parseInt(b);
  }, 0);
  return value;
};
