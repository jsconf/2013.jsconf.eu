{% if page.website %}
  {% assign website=page.website %}
{% elsif page.twitter %}
  {% assign website=page.twitter %}
{% endif %}

<header>
  <h3><a href="{{page.url}}">{{ page.speaker }}: {{ page.talk }}</a></h3>
</header>

<section class="description">
  <a href="{{ website }}"><img src="{{ page.image }}" class="speaker" /></a>{{ page.description }}
</section>
<ul class="info">
  {% if page.from %}<li><a href="https://www.google.com/maps/preview#!q={{ page.from }}">{{ page.from }}</a></li>{% endif %}
  {% if page.website %}<li><a href="{{ page.website }}">Website</a></li>{% endif %}
  {% if page.github %}<li><a href="{{ page.github }}">Github</a></li>{% endif %}
  {% if page.twitter %}<li><a href="{{ page.twitter }}">Twitter</a></li>{% endif %}
  {% if page.gplus %}<li><a href="{{ page.gplus }}">Google+</a></li>{% endif %}
</ul>


