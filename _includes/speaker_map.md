{% if page.from != "" %}
<style type="text/css">
.tags_speaker .stage {
  background-image: url("http://maps.googleapis.com/maps/api/staticmap?size=640x340&scale=2&sensor=false&zoom=5&markers=color:0xE10079%7C{{ page.from | cgi_escape }}&visual_refresh=1");
  background-repeat: repeat;
  cursor: pointer;
}
</style>
<script>
(function() {
var target = document.querySelector('.tags_speaker .stage')
if (target) target.onclick = function(e) {
  if (e.target == target) {
    window.open('https://www.google.com/maps/preview#!q={{ page.from | cgi_escape }}')
  }
}
})();
</script>
{% endif %}