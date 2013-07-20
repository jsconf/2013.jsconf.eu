---
  layout: default
  title: Speakers of JSConf EU 2013
  background: background7
---

{% assign overview=true %}
<h1>Speakers</h1>
{% for post in site.tags.speaker %}
  <article>
    {{ post.content }}
  </article>
{% endfor %}