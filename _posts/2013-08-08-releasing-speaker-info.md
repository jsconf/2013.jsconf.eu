---
layout: default
title: Speakers
category: news
tags: news
---

{% include header.md %}

We started releasing info about the <a href="/speakers/">talks and speakers</a> for this year. We'll add more daily over the coming weeks.
<div class="embed_container">
  <a href="/speakers/">
    <img src="{{ site.news_map_base_url | uri_escape }}0xE10079{% for post in site.tags.speaker %}%7C{% if post.from != "" %}{{ post.from | cgi_escape }}{% endif %}{% endfor %}" />
  </a>
</div>