const Words = require('./words')
const $ = require('jquery')


document.addEventListener("DOMContentLoaded", () => {
  Words.topWord()
  $('.btn-break-down').on("click", Words.showWordFrequency)
  $(document).keypress(function (e) {
    if (e.keyCode == 13) {
        Words.showWordFrequency()
    }
  })
})
