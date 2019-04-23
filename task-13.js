const encodeDNK = DNK => {
  let encodedDNK = DNK[0];
  let counter = 0;
  // way 1
  for (let i = 0; i < DNK.length; i++) {
    const currentSymbol = DNK[i];
    if (currentSymbol === encodedDNK[encodedDNK.length - 1]) {
      counter++;
    } else {
      encodedDNK += (counter.toString() + currentSymbol);
      counter = 1;
    }
  }

  // way 2
  // Array.prototype.forEach.call(DNK, s => {
  //    if (s === encodedDNK[encodedDNK.length - 1]) {
  //     counter++;
  //   } else {
  //     encodedDNK += (counter.toString() + s);
  //     counter = 1;
  //   }
  // });

  // way 3
  // [].forEach.call(DNK, s => {
  //    if (s === encodedDNK[encodedDNK.length - 1]) {
  //     counter++;
  //   } else {
  //     encodedDNK += (counter.toString() + s);
  //     counter = 1;
  //   }
  // });

  return encodedDNK + counter.toString();
};

console.log(encodeDNK('aaaaabbc'));
console.log(encodeDNK('a'));
