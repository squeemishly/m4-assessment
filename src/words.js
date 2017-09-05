const $ = require('jquery')
const htmlHelper = require('./htmlHelper')
const wordWatchApiCalls = require('./wordWatchApiCalls')

class Words {
  static topWord() {
    wordWatchApiCalls.getTopWord()
    .then((word) => {
      const topWord = Object.keys(word.word)[0];
      const numTimes = word.word[topWord];
      htmlHelper.appendTopWord(topWord, numTimes);
    })
  }

  static showWordFrequency() {
    const allWords = htmlHelper.getAllWords();
    const wordCount = {};
    Words.createWordCount(allWords, wordCount);
    Words.addWordsToWordCount(wordCount);
    htmlHelper.resetTextEntry();
  }

  static createWordCount(allWords, wordCount) {
    allWords.forEach((word) => {
      word = word.toLowerCase();
      wordCount[word] = wordCount[word] + 1 || 1;
    })
  }

  static addWordsToWordCount(wordCount) {
    for (var property in wordCount) {
      if (wordCount.hasOwnProperty(property)) {
        htmlHelper.addWordToWordCount(wordCount, property);
        wordWatchApiCalls.postTextToAPI(property);
      }
    }
  }

  static pressEnterToWord(e) {
    if (e.keyCode == 13) {
        Words.showWordFrequency();
    }
  }
}

module.exports = Words
