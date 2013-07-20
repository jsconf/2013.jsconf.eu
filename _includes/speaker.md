{% if page.website %}
  {% assign website=page.website %}
{% elsif page.twitter %}
  {% assign website=page.twitter %}
{% endif %}

<div itemscope="" itemtype="http://schema.org/Person">
  <header class="scrollTarget">
    <h3><a href="{{ page.url }}"><span itemprop="name">{{ page.speaker }}</span>: {{ page.talk }}</a></h3>
  </header>

  <section class="description">
    <a href="{{ website }}"><img src="{{ page.image }}" itemprop="image" class="speaker" /></a>{{ page.description }}
  </section>
  <section>
    <ul class="info">
      {% if page.from %}<li><a href="https://www.google.com/maps/preview#!q={{ page.from }}">{{ page.from }}</a></li>{% endif %}
      {% if page.website %}<li><a href="{{ page.website }}" itemprop="url">Website</a></li>{% endif %}
      {% if page.github %}<li><a href="{{ page.github }}" itemprop="url">Github</a></li>{% endif %}
      {% if page.twitter %}<li><a href="{{ page.twitter }}" itemprop="url">Twitter</a></li>{% endif %}
      {% if page.gplus %}<li><a href="{{ page.gplus }}" itemprop="url">Google+</a></li>{% endif %}
    </ul>
  </section>
</div>