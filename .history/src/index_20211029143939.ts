const sumFunction = (
  n1: number,
  n2: number,
  cb = (n: number): void => {}
): void => {
  console.log("n1", n1);
  console.log("n2", n2);
  const result = n1 + n2;
  console.log("cb", cb(result));
};

sumFunction(2, 3, (number) => {
  console.log(number);
  return;
});
