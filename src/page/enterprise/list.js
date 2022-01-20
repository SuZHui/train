import dayjs from 'dayjs'
import API from './api'

$(document).ready(function () {
  const page = getPageIndex() || 1
  
  API.getNewsList(page)
    .then(res => {
      $('.loading').addClass('d-none')
      renderNewsList(res)
      renderPagination(page)
    })
    .catch(err => {
      console.error(err)
      $('.loading').addClass('d-none')
      $('.no-data').removeClass('d-none')
    })
})

/**
 * 获取链接查询参数
 * @returns 
 */
function getPageIndex () {
  const urlParams = new URLSearchParams(location.search)
  return Number(urlParams.get('page'))
}

function renderPagination (page = 1) {
  if (page <= 1) {
    $('.page-item.prev').addClass('disabled')
  }
  if (page >= 3) {
    $('.page-item.next').addClass('disabled')
  }
  $('.jumper').eq(page - 1).addClass('active')
  $('.page-item.prev .page-link').attr('href', `?page=1`)
  $('.page-item.next .page-link').attr('href', `?page=3`)
}

function renderNewsList (list = []) {
  if (list.length <= 0) {
    // TODO: 渲染暂无数据
    $('.no-data').removeClass('d-none')
    return
  }
  $('.pagination').removeClass('d-none')
  const wrapper = $('.news-wrapper')
  list.forEach(news => {
    const a = $('<a></a>')
      .addClass('col-12 col-md-6 col-sm-6 col-lg-3 mb-2')
    const image = $('<div class="news-image"></div>')
    image.append($('<img/>').attr('src', news.img))
    const info = $('<div class="news-info"></div>')
      .append($('<span class="date"></span>').text(dayjs(news.date).format('YYYY.MM.DD')))
      .append($('<p class="desc"></p>').text(news.desc))
    $('<div class="news-item"></div>')
      .append(image)
      .append(info)
      .appendTo(a)
    wrapper.append(a)
  })
}
