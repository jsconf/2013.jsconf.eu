---
  layout: default
  title: Speakers of JSConf EU 2013
---


<h1>Speakers</h1>
{% for post in site.tags.speaker %}
  <article>
    {{ post.content }}
  </article>
{% endfor %}