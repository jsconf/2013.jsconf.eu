---
  layout: default
  title: JavaScript conference talk videos [JSConf EU 2013]
  background: background_speakers
  tags: foo
---

{% assign speakers=site.tags.speaker %}
{% assign overview=true %}
<a style="display:none" href="https://maps.google.com" target="_blank"><img id="speakers_map" src="{{ site.speaker_index_base_url | uri_escape }}0xE10079%7Csize:tiny{% for post in speakers %}%7C{% if post.from != "" %}{{ post.from | cgi_escape }}{% endif %}{% endfor %}" /></a>

<h1>Videos</h1>

{% for post in speakers %}
{% if post.video %}
  <article id="{{ post.id }}" class="speaker_list">
    {% assign page = post %}
    {% include speaker.md %}
  </article>
{% endif %}
{% endfor %}
