import '../../style/enterprise.scss';

$(document).ready(function () {

})

/**
 * 获取新闻列表
 * @param {number} page 
 */
function fetchList (page = 1) {
  // https://61e80b15e32cd90017acbfb7.mockapi.io/enterprise/:endpoint
  return Promise.resolve({
    page: 1,
    data: [],
    total: 36
  })
}

/**
 * 获取链接查询参数
 * @returns 
 */
function getSearchParams () {
  return {}
}
