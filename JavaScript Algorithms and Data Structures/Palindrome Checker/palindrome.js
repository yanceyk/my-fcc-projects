function palindrome(str) {
    let regEx = /[\W_]/g;
    let pal = str.replace( regEx, '' ).toLowerCase();
    let reverseStr = pal.split('').reverse().join('');
    
    if( reverseStr === pal ) {
      return true;
    } else {
      return false;
    }
    
}
  
  
// Tests  
palindrome("_eye");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("not a palindrome");
