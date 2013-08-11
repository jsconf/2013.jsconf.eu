 <a href="/speakers/">
{% for post in site.tags.speaker %}
    {% if post.image %}
    <img src="{{ post.image.filename }}" alt="{{ post.speaker }}" height="80" />
    {% endif %}
    {% if post.image2 %}
    <img src="{{ post.image2.filename }}" alt="{{ post.speaker }}" height="80" />
    {% endif %}
{% endfor %}…
</a>