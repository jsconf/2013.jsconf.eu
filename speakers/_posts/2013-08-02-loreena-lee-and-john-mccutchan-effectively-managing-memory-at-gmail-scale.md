---
layout: default
tags: speaker
title: Effectively Managing Memory At Gmail Scale – Loreena Lee
permalink: "/speakers/loreena-lee-and-john-mccutchan-effectively-managing-memory-at-gmail-scale.html"
speaker: Loreena Lee and John McCutchan
talk: Effectively Managing Memory At Gmail Scale
gplus: "https://plus.google.com/+LoreenaLee"
from: "Mountain View, CA, USA"
description: "Automatic garbage collection in JavaScript isn't a substitute for effective memory management, especially in large, long-running web apps. Memory leaks, frequent garbage collection pauses, and overall memory bloat can really drag you down. Come take a trip down memory lane with us and learn how we tackled these performance issues in Gmail. We'll share best practices for memory management and demonstrate how to use the Chrome DevTools Heap Profiler like a wizard to optimize your site."
---

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

