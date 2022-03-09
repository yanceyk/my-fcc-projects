// Set up cipher characters.
const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

function rot13(str) {

// Create empty string for deciphered string. (accumulator)
let decipher = '';

// Loop through the cipher characters
for( let i = 0; i < str.length; i++ ) {

const isLetter = alphabet.includes( str[i] );
// If char is not a letter, add to accumulator
if( !isLetter ) {
decipher += str[i];
} else {
// Otherwise, rotate + or - 13 and add to accumulator
const index = alphabet.findIndex( (char) => char === str[i] );
decipher += alphabet[ index + 13 ] || alphabet[ index - 13 ];
}

}

return decipher;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")