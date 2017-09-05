const $ = require('jquery')

class wordWatchApiCalls {
  static getTopWord() {
    return $.getJSON(`https://wordwatch-api.herokuapp.com//api/v1/top_word`)
  }


  static postTextToAPI(aSingleWord) {
    const data = { word: { value: aSingleWord } }
    $.post("https://wordwatch-api.herokuapp.com//api/v1/words", data)
  }
}

module.exports = wordWatchApiCalls
