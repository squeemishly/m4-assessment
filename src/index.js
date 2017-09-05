const Words = require('./words')
const $ = require('jquery')


document.addEventListener("DOMContentLoaded", () => {
  Words.topWord()
  $('.btn-break-down').on("click", Words.showWordFrequency)
})
