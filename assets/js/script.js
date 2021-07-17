// These are the arrays of your input values that the generator will accept
var splChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lcChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var ucChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// This prompts the user to create password
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain? (select a value between 8-128)'),
    10
  );

  // The following if statements are validating the inputs to confirm it matches the programs criteria
  if (Number.isNaN(length)) {
    alert('Password length has to be a numeric vlaue');
    return;
  }

  if (length < 8) {
    alert('Password length must be minimum of 8 characters');
    return;
  }

  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
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

  // If no criteria is included the program will cancel and have the user start again, this will continue to happen until min criteria is met
  if (
    hassplChar === false &&
    hasnumChar === false &&
    haslcChar === false &&
    hasucChar === false
  ) {
    alert('At least one character type has to be selected');
    return null;
  }

  var passwordOptions = {
    length: length,
    hassplChar: hassplChar,
    hasnumChar: hasnumChar,
    haslcChar: haslcChar,
    hasucChar: hasucChar,
  };
  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function genPw() {
  var doodad = getPasswordOptions();
  var answer = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!doodad) return "";
  if (doodad.hassplChar) {
    possibleCharacters = possibleCharacters.concat(splChar);
    guaranteedCharacters.push(getRandom(splChar));
  }
  if (doodad.hasnumChar) {
    possibleCharacters = possibleCharacters.concat(numChar);
    guaranteedCharacters.push(getRandom(numChar));
  }
  if (doodad.haslcChar) {
    possibleCharacters = possibleCharacters.concat(lcChar);
    guaranteedCharacters.push(getRandom(lcChar));
  }
  if (doodad.hasucChar) {
    possibleCharacters = possibleCharacters.concat(ucChar);
    guaranteedCharacters.push(getRandom(ucChar));
  }
  for (var i = 0; i < doodad.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    answer.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    answer[i] = guaranteedCharacters[i];
  }
  return answer.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = genPw();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// trigger
generateBtn.addEventListener('click', writePassword);


//Copy password to Clipboard
function copyToClipboard() {
  let password = document.getElementById("password");
  password.select();
  password.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert(password.value + " has been copied to your clipboard");
}

