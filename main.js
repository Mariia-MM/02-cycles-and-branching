let N;
let M;

N = +prompt("enter first integer");
let attemptN = 0;
let attemptM = 0;

while ((Number.isInteger(N) == false || N === 0) && attemptN < 3) {
  console.log(`its not an integer,try again:`, N);
  N = +prompt("enter first integer");
  attemptN++;
}

if (Number.isInteger(N) == false || N === 0) {
  console.log(`integer not entered`);
} else {
  console.log(`first number:`, N);

  M = +prompt("enter second integer");

  while ((Number.isInteger(M) == false || M === 0) && attemptM < 3) {
    console.log(`its not an integer,try again:`, M);
    M = +prompt("enter second integer");
    attemptM++;
  }
}
if (Number.isInteger(M) == false || M === 0) {
  console.log(`integer not entered`);
} else {
  console.log(`second number:`, M);
}

//(M ^ 0) == M

let i;
if (
  Number.isInteger(N) == false ||
  N === 0 ||
  Number.isInteger(M) == false ||
  M === 0
) {
  console.log(`the number o both are not integer`);
} else {
  let evenNumbers = confirm(`To skip even numbers?`);
  console.log(`to skip even numbers?`, evenNumbers);

  let sum = 0;
  for (i = Math.min(M, N); i <= Math.max(M, N); i++) {
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
