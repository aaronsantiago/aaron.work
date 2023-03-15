---
layout: index
date:   2013-12-09 12:00:00
---
<div class="project-list">
{% for post in site.posts %}
{% if post.hidden != true %}

  <div class="project-list__project project-list__project_{{ post.size }}">
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