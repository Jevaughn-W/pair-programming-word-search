// Function which flips rowns and columns
const transposeArray = function(letters) {
	result = []
	for (let i = 0; i < letters[0].length; i++) {
		result.push([]);
		for(let j = 0; j < letters.length; j++) {
			result[i].push(letters[j][i]);
		}
	}
	return result;
};

const horizontalJoin =  (letters, word) => {
	const arrayOfStrings = letters.map((ls) => ls.join('').toUpperCase());
	for (l of arrayOfStrings) {
		if (l.includes(word.toUpperCase())) return true;
	}
};

const wordSearch = (letters, word) => { 
	if (horizontalJoin(letters, word)) {
		return true;
	} else {
		const verticalLetters = transposeArray(letters);
		if(horizontalJoin(verticalLetters, word)) {
			return true;
		}
		return false;
	}
};


module.exports = wordSearch;


