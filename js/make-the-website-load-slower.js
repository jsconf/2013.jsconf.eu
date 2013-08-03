$(function() {
  var t = document.querySelectorAll('.scrollTarget');
  if (t && t.length == 1 && t[0].scrollIntoView) {
    t[0].scrollIntoView(true);
    document.body.scrollTop -= 200;
  }
  if (/background/.test(document.body.className)) {
    return;
  }
  var numberOfBackgrounds = 0;
  var rules = document.styleSheets[1].cssRules;
  for (var i = 0; i < rules.length; i++) {
    if (/\.background\d+/.test(rules[i].cssText)) {
      numberOfBackgrounds++;
    }
  }
  $('link[rel=canonical]').each(function() {
    var sum = 0;
    for (var i = 0; i < this.href.length; i++) {
      sum += this.href.charCodeAt(i);
    }
    $(document.body).addClass('background' + (sum % numberOfBackgrounds));
  });
});