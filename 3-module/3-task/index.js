function camelize(str) {
  let arr = str.split('-');
  return arr.map((item, index) => index ? item.slice(0, 1).toUpperCase() + item.slice(1) : item).join('');
}
