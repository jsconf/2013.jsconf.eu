$(function() {
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