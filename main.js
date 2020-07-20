let N = +prompt("enter first integer");
let attemptN = 0;
while (attemptN < 3 && !(Number.isInteger(N) && !isNaN(N))) {
  console.log(`its not an integer,try again:`, N);
  N = +prompt("enter first integer");
  attemptN++;
}
console.log(`first number:`, N);

let M = +prompt("enter second integer");
let attemptM = 0;
while (attemptM < 3 && !(Number.isInteger(M) && !isNaN(M))) {
  console.log(`its not an integer,try again:`, M);
  M = +prompt("enter second integer");
  attemptM++;
}
console.log(`second number:`, M);

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
