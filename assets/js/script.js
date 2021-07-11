// These are the arrays of your input values that the generator will accept
var splChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lcChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var ucChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// This prompts the user to create password
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain? (select a value between 8-128'),
    10
  );

  // The following if statements are validating the inputs to confirm it matches the programs criteria
  if (Number.isNaN(length)) {
    alert('Password length has to be a numeric vlaue');
    return null;
  }

  if (length < 8) {
    alert('Password length must be minimum of 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length muct be less than 129 characters');
    return null;
  }

  var hassplChar = confirm(
    'Click OK to include special characters, cancel to opt out.'
  );

  var hasnumChar = confirm(
    'Click OK to include numeric characters, cancel to opt out.'
  );

  var haslcChar = confirm(
    'Click OK to include lowercase characters, cancel to opt out.'
  );

  var hasucChar = confirm(
    'Click OK to include uppercase characters, cancel to opt out.'
  );