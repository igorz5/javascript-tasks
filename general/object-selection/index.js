const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1500 },
];

function getWorthyWorkers(workers) {
  return workers.reduce((acc, worker) => {
    if (worker.salary > 1000) {
      acc.push(worker.name);
    }

    return acc;
  }, []);
}

console.log(getWorthyWorkers(workers)); // Mike, Linda
