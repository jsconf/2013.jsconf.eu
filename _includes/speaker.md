{% if page.website != "" %}
  {% assign website=page.website %}
{% elsif page.twitter != ""  %}
  {% assign website=page.twitter %}
{% elsif page.gplus != ""  %}
  {% assign website=page.gplus %}
{% elsif page.github != ""  %}
  {% assign website=page.github %}
{% endif %}

{% include speaker_map.md %}

<div itemscope="" itemtype="http://schema.org/Person">
  <header class="scrollTarget">
    <h3><a href="{{ page.url }}"><span itemprop="name">{{ page.speaker }}</span>: {{ page.talk }}</a></h3>
  </header>

  <section class="description">
    {% if page.image %}
    {% if website %}<a href="{{ website }}" class="speaker_avatar" target="_blank">{% else %}<span class="speaker_avatar">{% endif %}
      <img src="{{ page.image.filename }}" alt="{{ page.speaker }}" width="200" height="{{ page.image.heightSite }}" itemprop="image" class="speaker" />
      {% if page.image2 %}
      <img src="{{ page.image2.filename }}" alt="{{ page.speaker }}" width="200" height="{{ page.image2.heightSite }}" itemprop="image" class="speaker" />
      {% endif %}
    {% if website %}</a>{% else %}</span>{% endif %}
    {% endif %}
    <div>
      {{ page.description | markdownify }}
    </div>

    <ul class="info">
      {% if page.from != "" %}<li>» <a href="https://www.google.com/maps/preview#!q={{ page.from }}"  target="_blank">{{ page.from != ""  }}</a></li>{% endif %}
      {% if page.website != ""  %}<li>» <a href="{{ page.website }}" itemprop="url" target="_blank">Website</a></li>{% endif %}
      {% if page.github != ""  %}<li>» <a href="{{ page.github }}" itemprop="url" target="_blank">Github</a></li>{% endif %}
      {% if page.twitter != ""  %}<li>» <a href="{{ page.twitter }}" itemprop="url" target="_blank">Twitter</a></li>{% endif %}
      {% if page.gplus != ""  %}<li>» <a href="{{ page.gplus }}" itemprop="url" target="_blank">Google+</a></li>{% endif %}
      {% if page.github2 %}<li>» <a href="{{ page.github2 }}" itemprop="url" target="_blank">Github</a></li>{% endif %}
      {% if page.twitter2 %}<li>» <a href="{{ page.twitter2 }}" itemprop="url" target="_blank">Twitter</a></li>{% endif %}
    </ul>
  </section>
</div>
