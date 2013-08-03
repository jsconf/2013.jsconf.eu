---
  layout: default
  title: Speakers of JSConf EU 2013
  background: background_speakers
---

{% assign speakers=site.tags.speaker %}
{% assign overview=true %}
<style type="text/css">
.background_speakers .stage {
  background-image: url("http://maps.googleapis.com/maps/api/staticmap?size=601x340&sensor=false&markers=color:0xE10079{% for post in speakers %}%7C{% if post.from != "" %}{{ post.from | cgi_escape }}{% endif %}{% endfor %}&visual_refresh=1") !important;
  background-repeat: repeat;
}
</style>

<h1>Speakers</h1>

<p><strong>We're just getting started</strong> announcing our speakers – check back often.</p>
{% for post in speakers %}
  <article>
    {{ post.content }}
  </article>
{% endfor %}