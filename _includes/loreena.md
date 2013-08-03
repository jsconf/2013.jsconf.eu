{% if post.from != "" %}
<style type="text/css">
.stage {
  background-image: url("http://maps.googleapis.com/maps/api/staticmap?size=640x340&scale=2&sensor=false&zoom=5&markers=color:0xE10079%7C{{ page.from | cgi_escape }}&visual_refresh=1") !important;
  background-repeat: repeat;
}
</style>
{% endif %}

<div itemscope="" itemtype="http://schema.org/Person">
  <header class="scrollTarget">
    <h3><a href="{{ page.url }}"><span itemprop="name">{{ page.speaker }}</span>: {{ page.talk }}</a></h3>
  </header>

  <section class="description">

    <div class="speaker_avatar">
      <a target="_blank" href="https://plus.google.com/+LoreenaLee">
        <img height="200" class="speaker" alt="Loreena Lee" width="200" itemprop="image" src="/speakers/images/loreena-lee.jpg">
      </a>
      <a target="_blank" href="https://plus.google.com/+JohnMcCutchan">
        <img height="200" class="speaker" alt="John McCutchan" width="200" itemprop="image" src="/speakers/images/john-mccutchan.png">
      </a>
    </div>
    <div>
      {{ page.description | markdownify }}
    </div>

    <ul class="info">
      {% if page.from != "" %}<li>» <a href="https://www.google.com/maps/preview#!q={{ page.from }}"  target="_blank">{{ page.from != ""  }}</a></li>{% endif %}
      <li>» <a href="https://plus.google.com/+LoreenaLee" itemprop="url" target="_blank">Loreena on Google+</a></li>
      <li>» <a href="https://plus.google.com/+JohnMcCutchan" itemprop="url" target="_blank">John on Google+</a></li>
    </ul>
  </section>
</div>