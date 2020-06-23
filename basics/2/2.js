const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }];
function getWorthyWorkers(company) {
  let resultArray = []
  for (let i = 0; i < company.length; i++) {
    if (company[i].salary > 1000) {
      resultArray.push(company[i].name);
    }
  }
  return resultArray;
}
console.log(getWorthyWorkers(workers));