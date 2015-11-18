---
title: Markdown-Syntax - Quelltext
description: Markdown-Syntax - Quelltext
---

## Quelltext

*Markdown* bietet Ihnen eine einfache Möglichkeit, Quelltext innerhalb eines Textes kenntlich zu machen. Sie müssen dazu den Quelltext mit Backtick-Zeichen (`` ` ``) umschließen. Das folgende Beispiel zeigt dies.

{% highlight text %}
Verwenden Sie die `echo`-Funktion.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Verwenden Sie die <code>echo</code>-Funktion.</p>
{% endhighlight %}

Wenn Sie innerhalb des Textes des Backtick-Zeichen (`` ` ``) selbst als Quelltext ausgeben möchten, dann umschließen Sie es mit doppelten Backtick-Zeichen. Das folgende Beispiel zeigt dies.

{% highlight text %}
``Verwenden Sie das Backtick-Zeichen (`)``.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p><code>Verwenden Sie das Backtick-Zeichen (`)</code>.</p>
{% endhighlight %}
