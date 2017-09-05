const $ = require('jquery')

class htmlHelper {
  static appendTopWord(topWord, numTimes) {
    $('h3').append(`${topWord} (${numTimes})`)
  }

  static getAllWords() {
    return $('.text-to-break-down').val().replace( /\n/g, " " ).split( " " )
  }

  static resetTextEntry() {
    $('.text-to-break-down').val("")
  }

  static addWordToWordCount(wordCount, property) {
    $('.word-count').append(htmlHelper.wordBuilder(wordCount, property))
  }

  static wordBuilder(wordCount, property) {
    return `<span style="font-size:${wordCount[property]}em; padding-right:5px;">${property} </span>`
  }
}

module.exports = htmlHelper
