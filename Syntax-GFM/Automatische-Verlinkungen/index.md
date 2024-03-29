---
title: Markdown-Syntax - Automatische Verlinkungen (GitHub Flavored Markdown)
description: Diese Seite zeigt Ihnen die vereinfachte automatische Verlinkung von URLs, die GitHub mit 'GitHub Flavored Markdown' (kurz 'GFM') bereitstellt.
---

## Automatische Verlinkungen

GitHub hat unter dem Begriff "GitHub Flavored Markdown" (kurz *GFM*) die Standardsyntax von *Markdown* u. a. um eine noch einfachere automatische Verlinkung erweitert.

**Hinweis:**  
Diese vereinfachte automatische Verlinkung von *GFM* funktioniert nur direkt auf der GitHub-Seite. Auf GitHub-Pages funktioniert sie *nicht*.

[Standardmäßig](/Syntax/Automatische-Verlinkungen/) muss man einen URL mit spitzen Klammern (`<`, `>`) umschließen, damit der URL automatisch zu einem Link umgewandelt wird. Mit *GFM* wird automatisch jeder URL (auch ohne die umschließenden Klammern) zu einem Link umgewandelt.

{% highlight text %}
https://markdown-syntax.de
{% endhighlight %}

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen *GFM*-Beispiel erzeugt wird.

{% highlight html %}
<a href="https://markdown-syntax.de">https://markdown-syntax.de</a>
{% endhighlight %}
