var SWU__currentScript = document.currentScript || {};
var SWU__DOMReady = function(callback) {
  document.readyState === 'interactive' || document.readyState === 'complete' ? callback() :
        document.addEventListener('DOMContentLoaded', callback);
}

SWU__DOMReady(function() {
    const el = document.querySelector('div.wswu') || document.createElement('div')

  // Options
  const url = SWU__currentScript.getAttribute('url')
  const title = SWU__currentScript.getAttribute('title')
  const position = SWU__currentScript.getAttribute('position')

  // Set custom title
  el.title = title || 'We stand with Ukraine'

  const a = document.querySelector('a', el)
  if(a)
        a.style.display = 'block'
  // Set custom URL
  if (url || a) {
    el.style.cursor = 'pointer'
    el.target = '_blank'
    el.addEventListener('click', function() {
        if(a)
          a.click()
        else
          window.open(url, '_blank')
    })
  }

  // Set custom position (left, right)
  if (position === 'right') {
    el.style.right = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(135deg)'
    el.style.background = 'linear-gradient(-360deg, #005BBB 50%, #FFD500 50%)'
      var style = document.createElement('style')
      style.innerHTML = '.wswu a { ' +
          'margin-top:43px;' +
          'text-decoration:none;' +
          'font-family:Verdana;' +
          'color:yellow;' +
          'display:inherit;' +
          'text-align:center;' +
          'width:100%; ' +
          'transform: rotate(-180deg); }'
      var ref = document.querySelector('script');
      ref.parentNode.insertBefore(style, ref);
  } else {
    el.style.left = '-80px'
    el.style.bottom = '20px'
    el.style.transform = 'rotate(45deg)'
    el.style.background = 'linear-gradient(-180deg, #005BBB 50%, #FFD500 50%)'

      var style = document.createElement('style')
      style.innerHTML = '.wswu a { ' +
          'margin-top:0;' +
          'text-decoration:none;' +
          'font-family:Verdana;' +
          'color:yellow;' +
          'display:inherit;' +
          'text-align:center;' +
          'width:100%; ' +
          'transform: rotate(0deg); }'
      var ref = document.querySelector('script');
      ref.parentNode.insertBefore(style, ref);

  }

  el.style.width = '300px'
  el.style.height = '84px'
  el.style.position = 'fixed'
  el.style.zIndex = '999'

  el.setAttribute('id', 'we-stand-with-ukraine')
  if(el.parentNode === null)
        document.body.appendChild(el)
})
