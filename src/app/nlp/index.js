const natural = require('natural');
const  tokenizer = new natural.WordTokenizer();

const tokenizeString = (word) => { return tokenizer.tokenize(word) };

module.exports = tokenizeString;
