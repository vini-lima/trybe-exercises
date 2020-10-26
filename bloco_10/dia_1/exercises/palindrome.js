function palindrome(str) {
  const newStr = str.split('').reverse().join('');
  if (newStr === str) {
    return true;
  }
  return false;
}

module.exports = palindrome;
