---
layout: page
title: Lagu
---
<ul class="posts">
  {% for musik in site.musik %}
  <li>
    <small class="datetime muted" data-time="{{ musik.date }}">{{ musik.date | date_to_string }} </small>
    <a href="{{ musik.url }}">{{ musik.title }}</a>
  </li>
  {% endfor %}
</ul>