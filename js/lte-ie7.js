/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
  function addIcon(el, entity) {
    var html = el.innerHTML;
    el.innerHTML = '<span style="font-family: \'jsconfeu\'">' + entity + '</span>' + html;
  }
  var icons = {
      'ico-arrow-left' : '&#x2190;',
      'ico-arrow-right' : '&#x2192;',
      'ico-twitter' : '&#x74;',
      'ico-facebook' : '&#x66;',
      'ico-feed' : '&#x72;',
      'ico-google-plus' : '&#x2b;',
      'ico-github-alt' : '&#x67;',
      'ico-youtube' : '&#x79;',
      'ico-circle' : '&#x78;',
      'ico-logo' : '&#x6c;',
      'ico-ticket' : '&#x73;'
    },
    els = document.getElementsByTagName('*'),
    i, attr, html, c, el;
  for (i = 0; ; i += 1) {
    el = els[i];
    if(!el) {
      break;
    }
    attr = el.getAttribute('data-icon');
    if (attr) {
      addIcon(el, attr);
    }
    c = el.className;
    c = c.match(/ico-[^\s'"]+/);
    if (c && icons[c[0]]) {
      addIcon(el, icons[c[0]]);
    }
  }
};