---
title: blog
excerpt_separator: <!--more-->
---

<div>
    <span class="image main"><img src="assets/images/pic02.jpg" alt=""></span>
    {% for post in site.posts %}
        <h3>
            <a href="{{ post.url | absolute_url  }}">{{ post.title }}</a>
        </h3>

        {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
        <h6> Posted by {{ post.author}} on {{ post.date | date: date_format }} </h6>


        {% assign excerpt_length = site.excerpt_length | default: 50 %}
        {{ post.excerpt | strip_html | truncatewords: excerpt_length }}
        {% assign excerpt_word_count = post.excerpt | number_of_words %}
        {% if post.content != post.excerpt or excerpt_word_count > excerpt_length %}
            <span style="color: #9b8255"><a href="{{ post.url | absolute_url }}"><i>continue reading</i></a></span>
        {% endif %}
        <hr>
    {% endfor %}
</div>

<footer id="page-footer">
    <ul class="icons">
      <li><a href="{{ site.github_url }}" class="icon fa-github" target="_blank"><span class="label">GitHub</span></a></li>
      <li><a href="{{ site.linkedin_url }}" class="icon fa-linkedin" target="_blank"><span class="label">LinkedIn</span></a></li>
      <li><a href="{{ site.instagram_url }}" class="icon fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>
      <li><a href="/#contact" class="icon fa-envelope"><span class="label">Contact</span></a></li>
    </ul>
    <p class="copyright">&copy; {{ site.author }} {{ site.time | date: '%Y' }}. 
    <br> Image: <a href="https://unsplash.com/">Unsplash</a>
    </p>
</footer>
