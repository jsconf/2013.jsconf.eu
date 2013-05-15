---
  layout: default
  title: Location
  background: background5
---

# Location

{% assign map_url="https://maps.google.com/maps?q=Radialsystem+V,+Holzmarktstra%C3%9Fe+33,+Berlin,+Germany&hl=en&ie=UTF8&ll=52.510527,13.428726&spn=0.036671,0.077677&sll=52.510893,13.428555&sspn=0.073341,0.155354&hq=Radialsystem+V,+Holzmarktstra%C3%9Fe+33,+Berlin,+Germany&t=m&z=14" %}
<a href="{{ map_url }}"><address>
  <strong>Radialsystem V</strong><br>
  Holzmarktstraße 33<br>
  10243 Berlin, Germany
</address></a>
{% include map.md %}
{% assign image_url="/img/radialsystem.jpg" %}
{% assign image_alt="Radialsystem V" %}
{% include image.md %}
{% assign image_url="/img/radialsystem-outside.jpg" %}
{% assign image_alt="Yes, it is by the water :)" %}
{% include image.md %}