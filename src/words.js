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
}

module.exports = Words
