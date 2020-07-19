let N = +prompt("enter first integer");

if (Number.isInteger(N) && !isNaN(N)) {
  console.log(`first number:`, N);
} else {
  console.log(`its not an integer:`, N);
}

let M = +prompt("enter second integer");

if (Number.isInteger(M) && !isNaN(M)) {
  console.log(`second number:`, M);
} else {
  console.log(`its not an integer:`, M);
}

//(M ^ 0) == M

let i;

let evenNumbers = confirm(`To skip even numbers?`);
console.log(`to skip even numbers?`, evenNumbers);

if (N < M) {
  let sum = 0;
  for (i = N; i <= M; i++) {
    if (evenNumbers) {
      if (i % 2 != 0) {
        sum += i;
      }
    } else {
      sum += i;
    }
  }
  console.log(sum);
} else {
  let sum = 0;
  for (i = M; i <= N; i++) {
    if (evenNumbers) {
      if (i % 2 != 0) {
        sum += i;
      }
    } else {
      sum += i;
    }
  }
  console.log(`total :`, sum);
}
