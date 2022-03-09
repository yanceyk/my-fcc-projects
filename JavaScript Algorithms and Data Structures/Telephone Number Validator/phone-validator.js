function telephoneCheck(str) {
    const regEx = /^1\d{10}|^\d{10}$|^\(\d{3}\)\d{3}-\d{4}|^1\s*\(\d{3}\)\s*\d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}|^1\s+\d{3}-*\s*\d{3}-*\s*\d{4}$/;
    if( regEx.test(str) ) {
      return true;
    } else {
      return false;
    }
  }
  
  telephoneCheck("555-555-5555");