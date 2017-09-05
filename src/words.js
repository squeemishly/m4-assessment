const $ = require('jquery')
const htmlHelper = require('./htmlHelper')

class Words {
  static topWord() {
    this.getTopWord()
    .then((word) => {
      const topWord = Object.keys(word.word)[0]
      const numTimes = word.word[topWord]
      htmlHelper.appendTopWord(topWord, numTimes)
    })
  }

  static getTopWord() {
    return $.getJSON(`https://wordwatch-api.herokuapp.com//api/v1/top_word`)
  }

  static showWordFrequency() {
    const allWords = htmlHelper.getAllWords()
    const wordCount = {}
    Words.createWordCount(allWords, wordCount)
    Words.addWordsToWordCount(wordCount)
    htmlHelper.resetTextEntry()
  }

  static createWordCount(allWords, wordCount) {
    allWords.forEach((word) => {
      word = word.toLowerCase()
      if (wordCount[word]) {
        wordCount[word] = wordCount[word] + 1
      } else {
        wordCount[word] = 1
      }
    })
  }

  static addWordsToWordCount(wordCount) {
    for (var property in wordCount) {
      if (wordCount.hasOwnProperty(property)) {
        htmlHelper.addWordToWordCount(wordCount, property)
        Words.postTextToAPI(property)
      }
    }
  }

  static postTextToAPI(aSingleWord) {
    const data = { word: { value: aSingleWord } }
    $.post("https://wordwatch-api.herokuapp.com//api/v1/words", data)
  }

  static pressEnterToWord(e) {
    if (e.keyCode == 13) {
        Words.showWordFrequency()
    }
  }
}

module.exports = Words
