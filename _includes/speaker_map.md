{% if page.from != "" %}
<style type="text/css">
.tags_speaker .stage {
  background-image: url("{{ site.speaker_map_base_url | uri_escape }}0xE10079%7C{{ page.from | cgi_escape }}");
  background-repeat: repeat;
  background-color: #B1D0FE;
  cursor: pointer;
}
</style>
<script>
(function() {
var target = document.querySelector('.tags_speaker .stage')
if (target) {
  target.onclick = function(e) {
    if (e.target == target) {
      window.open('https://www.google.com/maps/preview#!q={{ page.from | cgi_escape }}')
    }
  }
}
})();
</script>
{% endif %}