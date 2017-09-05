const $ = require('jquery')

class Words {
  static topWord() {
    this.getTopWord()
    .then((word) => {
      const topWord = Object.keys(word.word)[0]
      const numTimes = word.word[topWord]
      $('h3').append(`${topWord} (${numTimes})`)
    })
  }

  static getTopWord() {
    return $.getJSON(`https://wordwatch-api.herokuapp.com//api/v1/top_word`)
  }

  static showWordFrequency() {
    const allWords = $('.text-to-break-down').val().split(/[ :;,-.\]\[\n)(]+/)
    const wordCount = {}
    Words.createWordCount(allWords, wordCount)
    Words.addWordsToWordCount(wordCount)
    $('.text-to-break-down').val("")
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
        $('.word-count').append(`<span style="font-size:${wordCount[property]}em">${property} </span>`)
      }
    }
  }

}

module.exports = Words
