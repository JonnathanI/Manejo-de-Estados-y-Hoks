interface M {
  [key: string]: string;
}

const Map: M = { 
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

const toRna = (dna: string): string => {
  if (/[^ACGT]/.test(dna)) {
      throw new Error('Invalid input DNA.');
  }

  return dna.replace(/[ATCG]/g, m => Map[m]);
};

export default toRna;
