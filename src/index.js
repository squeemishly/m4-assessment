const Words = require('./words')
const $ = require('jquery')

$(document).ready(() => {
  Words.topWord()
  $('.btn-break-down').on("click", Words.showWordFrequency)
  $(document).keypress((e) => {
    Words.pressEnterToWord(e)
  })
})
