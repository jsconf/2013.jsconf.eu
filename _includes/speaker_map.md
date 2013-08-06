{% if page.from != "" %}
<a style="display:none" href="https://www.google.com/maps/preview#!q={{ page.from | cgi_escape }}" target="_blank"><img id="speaker_map" src="{{ site.speaker_map_base_url | uri_escape }}0xE10079%7C{{ page.from | cgi_escape }}" /></a>
{% endif %}