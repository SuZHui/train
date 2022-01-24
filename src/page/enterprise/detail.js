import API from './api'

$(document).ready(function () {
  const id = getId()
  API.getNewsItem(id)
    .then(res => {
      renderDetail(res)
      // debugger
    })
    .catch(() => {
      $('.no-data').removeClass('d-none')
    }).finally(() => {$('.loading').addClass('d-none')})
})

function getId () {
  const params = new URLSearchParams(location.search)
  return params.get('id')
}

function renderDetail (data) {
  const title = $('<div class="row"></div>').append($('<h2 class="col-12 section-title"></h2>').text(data.title))
  const image = $('<div class="mx-auto col-12 col-md-7"></div>')
    .append($('<img class="w-100 lazyload" data-sizes="auto" />').attr('data-src', data.img))
  const desc = $('<p class="col-12 py-2 text-break text-justify"></p>').text(data.desc)
  const content = $('<div class="row"></div>')
    .append([image, desc])
  $('.detail').append([title, content])
}
