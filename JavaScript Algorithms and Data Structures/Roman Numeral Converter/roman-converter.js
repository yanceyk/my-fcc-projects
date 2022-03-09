function convertToRoman(num) {
    // Set roman numeral variable to empty string. (accumulator)
    let roman = '';
    // Define roman numeral key-value pairs.
    const numerals = { 'M': 1000,
                     'CM': 900,
                     'D': 500,
                     'CD': 400,
                     'C': 100,
                     'XC': 90,
                     'L': 50, 
                     'XL': 40,
                     'X': 10,
                     'IX': 9,
                     'V': 5,
                     'IV': 4,
                     'I': 1 };
  
    // Look through roman numerals and compare to num.
    for ( const value in numerals ) {
      while( num >= numerals[value] ) {
        num -= numerals[value];
        roman += value;
        }
      }
    
  console.log( roman )

  return roman;
}
  
convertToRoman(1980);