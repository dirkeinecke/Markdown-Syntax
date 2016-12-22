---
title: Markdown-Syntax Suche
description: Markdown-Syntax Suche
---

## Suche

<div id="tipue_search_content"></div>

<script>
var tipuesearch = {"pages": [
  {% for page in site.pages %}
    {% if page.url contains "/Suche/" or page.url contains "/Sitemap/" or page.url contains "/sitemap.xml" or page.url contains "/assets/css/style.css" %}
    
    {% else %}
      {"title": "{{page.title}}", "text": "{{page.content | markdownify | strip_html | strip_newlines | xml_escape}}", "tags": "", "url": "{{page.url}}"},
    {% endif %}
  {% endfor %}
  {"title": "", "text": "", "tags": "", "url": ""}
]};

$(document).ready(function() {
  $('#tipue_search_input').tipuesearch({
    'mode': 'static',
    'show': 100,
    'showTitleCount': false,
    'minimumLength': 1
  });
});
</script>
