function Snades(number) {
  console.log(number);

  if (number == 1) {
    process.exit(0);
  }

  if (number % 2 === 0) {
    number /= 2;
    Snades(number);
  } else {
    number = number * 3;
    number++;
    Snades(number);
  }
}
Snades(278915);
