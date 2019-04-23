const checkIsElementOf = (number) => {
  console.log(
    (number > -15 && number <= 12) || (number > 14 && number < 17) || number >= 19
    ? 'True'
    : 'False'
  );
};

checkIsElementOf(20);
checkIsElementOf(-20);
