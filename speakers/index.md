---
  layout: default
  title: Speakers of JSConf EU 2013
  background: background7
---

{% assign overview=true %}
<h1>Speakers</h1>
{% assign speakers=site.tags.speaker %}
<p>We're just getting started announcing our speakers – check back often.</p>
<div class="embed_container">
  <img width="560" height="315" src="http://maps.googleapis.com/maps/api/staticmap?&amp;zoom=13&amp;size=601x368&amp;sensor=false&amp;markers=color:0xE10079{% for post in speakers %}%7C{% if post.from != "" %}{{ post.from | uri_escape }}{% endif %}{% endfor %}&amp;visual_refresh=1">
</div>
{% for post in speakers %}
  <article>
    {{ post.content }}
  </article>
{% endfor %}