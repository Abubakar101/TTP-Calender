// Question A -- sortByStrings(s,t):
// Sort the letters in the string s by the order they occur in the string t.

// You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".

// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(s, t) {
	const obj = {};
	let str = '';

	for (let char of s) {
		if (!obj[char]) {
			obj[char] = 1;
		} else {
			obj[char]++;
		}
	}
	for (let char of t) {
		if (obj[char]) {
			str += char.repeat(obj[char]);
		}
	}
	return str;
}

sortByString('weather', 'therapyw'); // =>  "theeraw"
sortByString('good', 'odg'); // =>  "oodg"
