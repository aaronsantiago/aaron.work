---
layout: index
date:   2013-12-09 12:00:00
---

<div>
{% for post in site.posts %}
{% if post.hidden != true %}
  {% if post.size == "big" %}
  <div class="{{ post.gridclass }}">
  {% elsif post.size == "medium" %}
  <div class="{{ post.gridclass }}">
  {% else %}
  <div class="{{ post.gridclass }}">
  {% endif %}
      <a href="{{ post.url }}">
          <div>
            {% if post.cardImage %}
              <div>
                    <!-- <img class="cover-image" src="{{post.cardImage}}" alt="image loading..."> -->
              </div>
            {% endif %}
            <div>
              <p> {{post.title}} </p>
              {{post.excerpt}}
            </div>
          </div>
      </a>
  </div>
  {% endif %}
{% endfor %}
</div>