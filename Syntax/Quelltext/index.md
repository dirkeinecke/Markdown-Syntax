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

Wenn Sie innerhalb des Textes das Backtick-Zeichen (`` ` ``) selbst als Quelltext ausgeben möchten, dann umschließen Sie es mit doppelten Backtick-Zeichen. Das folgende Beispiel zeigt dies.

{% highlight text %}
``Verwenden Sie das Backtick-Zeichen (`)``.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p><code>Verwenden Sie das Backtick-Zeichen (`)</code>.</p>
{% endhighlight %}

Möchten Sie innerhalb des Textes nur das Backtick-Zeichen (`` ` ``) als Quelltext kenntlich machen, dann umschließen Sie es wieder mit jeweils zwei Backtick-Zeichen und einem Leerzeichen. Die Leerzeichen stehen dabei nach dem öffnenen doppelten Backtick-Zeichen und vor dem schließenden doppelten Backtick-Zeichen. Das folgende Beispiel veranschaulicht dies.

{% highlight text %}
Verwenden Sie das Backtick-Zeichen (`` ` ``).
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Verwenden Sie das Backtick-Zeichen (<code>`</code>).</p>
{% endhighlight %}

### Automatische Zeichenumwandlung

Innerhalb der Backtick-Zeichen (`` ` ``) werden spize Klammern (`<`, `>`) und das `&`-Zeichen zu ihren HTML-Entities kodiert. dadurch können Sie zum Beispiel sehr bequem HTML-Quelltext innerhab eines Textes notieren, so wie es das folgende Beispiel zeigt.

{% highlight text %}
Das `<html>`-Tag leite ein Dokument ein.

Durch das `&`-Zeichen werden URL-Parameter getrennt.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Das <code>&lt;html&gt;</code>-Tag leite ein Dokument ein.</p>
<p>Durch das <code>&amp;</code>-Zeichen werden URL-Parameter getrennt.</p>
{% endhighlight %}

Sie können innerhalb eines Quelltextbereichs auch HTML-Entities ausgeben, da auch hier das `&`-Zeichen umgewandelt/ kodiert wird. Das folgende Beispiel zeigt dies. 

{% highlight text %}
Das HTML-Entity `&lt;` steht für das `<`-Zeichen.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Das HTML-Entity <code>&amp;lt;</code> steht für das <code>&lt;</code>-Zeichen.</p>
{% endhighlight %}
