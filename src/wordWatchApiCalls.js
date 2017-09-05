const $ = require('jquery')
const host = "https://wordwatch-api.herokuapp.com/api/v1"

class wordWatchApiCalls {
  static getTopWord() {
    return $.getJSON(`${host}/top_word`)
  }


  static postTextToAPI(aSingleWord) {
    const data = { word: { value: aSingleWord } }
    $.post(`${host}/words`, data)
  }
}

module.exports = wordWatchApiCalls
