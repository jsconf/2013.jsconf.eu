---
  layout: default
  title: Speakers of JSConf EU 2013
  background: background7
---

{% assign overview=true %}
<h1>Speakers</h1>
<p>We're just getting started announcing our speakers – check back often.</p>
{% assign speakers=site.tags.speaker %}
{% for post in speakers %}
  <article>
    {{ post.content }}
  </article>
{% endfor %}