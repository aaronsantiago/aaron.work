---
layout: index
date:   2013-12-09 12:00:00
---
<div class="project-list">
{% for post in site.posts %}
{% if post.hidden != true %}

  <div class="project-list__project project-list__project_{{ post.size }}">
      <a href="{{ post.url }}">
          <div class="card">
            {% if post.cardImage %}
            <div class="card__image_container" style="background-image: url({{post.cardImage}}); background-position: center; background-size:cover;">
              <!-- <img class="card__image" src="{{post.cardImage}}" alt="image loading..."> -->
              <div class="card__caption_container">
                <div class="card__caption card__caption_{{ post.size }}">
                  <div class="card__caption_excerpt">{{post.title}} </div>
                  <div class="card__caption_excerpt card__caption_excerpt2">{{post.title}} </div>
                  <div class="card__caption_excerpt card__caption_excerpt3">{{post.title}} </div>
                  <div class="card__caption_excerpt card__caption_excerpt4">{{post.title}} </div>
                  <!-- <div class="card__caption_excerpt">{{post.excerpt}}</div> -->
                </div>
              </div>
            </div>
            {% endif %}
          </div>
      </a>
  </div>
{% endif %}
{% endfor %}
</div>