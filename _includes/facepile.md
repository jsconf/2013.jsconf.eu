 <a href="/speakers/">
{% for post in site.tags.speaker %}
    {% if post.image %}
    <img src="{{ post.image.filename }}" alt="{{ post.speaker }}" height="80" />
    {% endif %}
{% endfor %}…
</a>