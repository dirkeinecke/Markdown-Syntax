---
title: Markdown-Syntax - Durchgestrichener Text (GitHub Flavored Markdown)
description: Markdown-Syntax - Durchgestrichener Text (GitHub Flavored Markdown)
---

## Durchgestrichener Text

GitHub hat unter dem Begriff "GitHub Flavored Markdown" (kurz *GFM*) die Standardsyntax von *Markdown* u. a. um die Tectauszeichnung für durchgestrichenen Text (`<del>`-Tag, Text nicht länger gültig | **del**eted Text | gelöschter Text) erweitert. 

**Hinweis:**  
Die Textauszeichnung für durchgestrichenen Text von *GFM* funktioniert nur direkt auf der GitHub-Seite. Auf GitHub-Pages funktioniert sie *nicht*.

Für diese Textauszeichnung wird bei *GFM* der Text mit einer zweifachen Tilde (`~~`) umschlossen. Das folgende Beispiel zeigt dies.

{% highlight text %}
Das ist ~~kein~~ein Text.
{% endhighlight %}

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen *GFM*-Beispiel erzeugt wird.

{% highlight html %}
Das ist <del>kein</del> ein Text.
{% endhighlight %}
