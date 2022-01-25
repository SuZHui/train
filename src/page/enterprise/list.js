import dayjs from 'dayjs'
import API from './api'

$(document).ready(function () {
  const params = getParams() || { page: 1, limit: 12 }
  
  API.getNewsList(params.page, params.limit)
    .then(res => {
      renderNewsList(res.items)
      renderPagination(params.page, params.limit, res.count)
    })
    .catch(err => {
      console.error(err)
      $('.no-data').removeClass('d-none')
    })
    .finally(() => {
      $('.loading').addClass('d-none')
    })
})

/**
 * 获取链接查询参数
 * @returns 
 */
function getParams () {
  const urlParams = new URLSearchParams(location.search)
  return {
    page: Number(urlParams.get('page')) || 1,
    limit: Number(urlParams.get('limit')) || 12
  }
}

function renderPagination (page = 1, limit = 12, total) {
  const pagination = {
    current: page,
    sizes: Math.ceil(total / limit)
  }

  if (page <= 1) {
    $('.page-item.prev').addClass('disabled')
  }
  if (pagination.sizes <= pagination.current) {
    $('.page-item.next').addClass('disabled')
  }

  
  $('.page-item.prev .page-link').attr('href', `?page=1&limit=${limit}`)
  $('.page-item.next .page-link').attr('href', `?page=${pagination.sizes}&limit=${limit}`)

  const nodes = Array.from({ length: pagination.sizes }, (_, i) => {
    const index = i + 1
    return $('<div class="page-item jumper">')
      .append($('<a class="page-link">').attr('href', `?page=${index}&limit=${limit}`).text(index))
  })
  $('.pagination .prev')
    .after(nodes)
  $('.jumper').eq(pagination.current - 1).addClass('active')
}

function renderNewsList (list = []) {
  if (list.length <= 0) {
    // 渲染暂无数据
    $('.no-data').removeClass('d-none')
    return
  }
  $('.pagination').removeClass('d-none')
  const wrapper = $('.news-wrapper')
  list.forEach(news => {
    const a = $('<a></a>')
      .attr('href', `detail.html?id=${news.id}`)
      .addClass('col-12 col-md-6 col-sm-6 col-lg-3 mb-4')
    const image = $('<div class="news-image"></div>')
    image
      .append(
        $('<img width="100%" height="160px" class="lazyload" data-sizes="auto"/>')
        .attr({
          'data-src': news.img,
          'src': 'https://i.stack.imgur.com/ATB3o.gif'
        }))
    const info = $('<div class="news-info"></div>')
      .append($('<h4 class="title"></h4>').text(news.title))
      .append($('<span class="date"></span>').text(dayjs(news.date).format('YYYY.MM.DD')))
      .append($('<p class="desc"></p>').text(news.desc))
    $('<div class="news-item"></div>')
      .append(image)
      .append(info)
      .appendTo(a)
    wrapper.append(a)
  })
}
