---
layout: layout.njk
title: MAKOTO SUGAWARA
---

# エッセイ／開発記録

<ul class="post-list">
{%- for post in collections.post | reverse -%}
  <li>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{%- endfor -%}
</ul>