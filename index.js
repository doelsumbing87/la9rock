function faktorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * faktorial(n - 1);
}

const angka = 5;
const hasilFaktorial = faktorial(angka);
console.log(`Faktorial dari ${angka} adalah: ${hasilFaktorial}`);
