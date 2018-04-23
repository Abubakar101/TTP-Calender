/* 

Question D -- stringPermutations(s): Find all permutations of a string (do not use a built in language method). 

For s = "CBA", the output should be stringPermutations(s) = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]. 
For s = "ABA", the output should be stringPermutations(s) = ["AAB", "ABA", "BAA"].

*/

function stringPermutations(str, currChar = 0, newStr = '', arr = [], loopEnd = 0, map = new Map()) {
	for (let i = 0, j = str.length; i < j; i++) {
		if (currChar !== i) {
			newStr += str[i];
		} else {
			newStr = str[currChar] + newStr;
		}
	}

	currChar++;
	
  // Reversing the given string
	if (currChar === str.length) {
	  let revStr = "";
	  for (let k = str.length-1; k >= 0; k--){
	    revStr += str[k];
	  }
	  str = revStr;
		currChar = 0;
	}

	// Checking for dublicate strings before pushing
	if (!map.has(newStr)) {
		map.set(newStr);
		arr.push(newStr);
	}

	loopEnd++;

	if (loopEnd !== str.length * 2)
		stringPermutations(str, currChar, newStr = '', arr, loopEnd, map);

	return arr;
}

stringPermutations('ABA');
