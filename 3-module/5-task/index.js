function getMinMax(str) {
  let arr = str.split(' ').map(item => Number(item)).filter(item => Number.isFinite(item));
  arr.sort((a,b) => a - b);
  return { min: arr[0],
           max : arr[arr.length-1]};
}
