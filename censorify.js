const censoredWords = ["sad", "bad", "mad"];
const customCensoredWords = [];
const censor = function(inputString) {
    let output;
    for (word in censoredWords) {
        output = inputString.replaceAll(censoredWords[word], '***');
    }
    for (word in customCensoredWords) {
        output = output.replaceAll(customCensoredWords[word], '***');
    }
    console.log(output);
    return output;
}

const addCustomCensoredWord = function(word) {
    customCensoredWords.push(word);
}

const getAllCensoredWords = function() {
    return censoredWords.concat(customCensoredWords);
}

//Exporting important pieces
exports.censor = censor;
exports.addCensoredWord = addCustomCensoredWord;
exports.getCensoredWords = getAllCensoredWords;