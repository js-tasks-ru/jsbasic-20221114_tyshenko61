function showSalary(users, age) {
  let arr = users.filter(item => item.age <= age);
  return arr.map(item => `${item.name}, ${item.balance}`).join('\n');
}
