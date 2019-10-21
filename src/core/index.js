import '../scss/animation.scss'
import optionMap from '../util/optionMap.js'

const aniSelect = document.getElementById('aniSelect')
const ani = document.getElementById('ani')

// 添加动画
function startAnimation () {
  if (ani.classList.contains('animated')) return

  ani.setAttribute('class', `${optionMap[aniSelect.value]} animated`)
  setTimeout(function () {
    ani.setAttribute('class', '')
  }, 1000)
}

// 初始化页面
function initRender () {
  let str = ''
  optionMap.map((item, i) => {
    str += `<option value="${i}">${item}</option>`
  })

  aniSelect.innerHTML = str
}

// 事件初始化
function initEvent () {
  const aniBtn = document.getElementById('aniBtn')

  aniSelect.addEventListener('change', function () {
    startAnimation()
  })

  aniBtn.addEventListener('click', function () {
    startAnimation()
  })
}

function init () {
  initRender()
  initEvent()
}

init()
