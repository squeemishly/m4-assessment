const $ = require('jquery')
const htmlHelper = require('./htmlHelper')
const wordWatchApiCalls = require('./wordWatchApiCalls')

const Words = {
  topWord () {
    wordWatchApiCalls.getTopWord()
    .then((word) => {
      const topWord = Object.keys(word.word)[0];
      const numTimes = word.word[topWord];
      htmlHelper.appendTopWord(topWord, numTimes);
    })
  }, 

  showWordFrequency () {
    const allWords = htmlHelper.getAllWords();
    const wordCount = {};
    this.createWordCount(allWords, wordCount);
    this.addWordsToWordCount(wordCount);
    htmlHelper.resetTextEntry();
  },

  createWordCount (allWords, wordCount) {
    allWords.forEach((word) => {
      word = word.toLowerCase();
      wordCount[word] = wordCount[word] + 1 || 1;
    })
  },

  addWordsToWordCount (wordCount) {
    for (let property in wordCount) {
      if (wordCount.hasOwnProperty(property)) {
        htmlHelper.addWordToWordCount(wordCount, property);
        wordWatchApiCalls.postTextToAPI(property);
      }
    }
  },

  pressEnterToWord (e) {
    if (e.keyCode == 13) {
        this.showWordFrequency();
    }
  }
}

module.exports = Words;
