import API from './api'

$(document).ready(function() {
  API.getHots()
    .then(res => {
      renderHots(res.data || [])
    })
    .catch(err => {
      console.error(err)
      showError()
    })
    
})

function showError () {
  $('.news .no-data').removeClass('d-none')
}

function renderHots (list = []) {
  const wrapper = $('.news .news-wrapper.row')
  list.forEach(li => {
    const a = $('<a></a>').addClass('col-12 col-md-6 col-sm-6 col-lg-3 mb-4')
      .attr('href', `detail.html?id=${li.id}`)
    const img = $('<div></div>').addClass('news-image')
      .append($('<img>').addClass('lazyload').attr({
        src: 'https://i.stack.imgur.com/ATB3o.gif',
        'data-src': li.img,
        'data-sizes': 'auto'
      }))
    const info = $('<div></div>').addClass('news-info')
      .append($('<h4 class="title"></h4>').text(li.title))
      .append($('<span class="date"></span>').text(li.date))
      .append($('<p class="desc"></p>').text(li.desc))
      a.append($('<div class="news-item">').append(img).append(info))
      wrapper.append(a)
  })
}
