---
title: Markdown-Syntax - Quelltext-Blöcke
description: Markdown-Syntax - Quelltext-Blöcke
---

## Quelltext-Blöcke

*Markdown* bietet Ihnen eine einfache Möglichkeit, Quelltext-Blöcke kenntlich zu machen. Sie müssen dazu den Quelltext-Block mit mindestens vier Leerzeichen oder einem Tab einrücken. Das folgende Beispiel zeigt dies.

{% highlight text %}
Das ist ein normaler Absatz.

    Das ist ein Quelltext-Block.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Das ist ein normaler Absatz.</p>

<pre><code>Das ist ein Quelltext-Block.
</code></pre>
{% endhighlight %}

Wenn Sie innerhalb des Quelltext-Blocks weitere Einrückungen vornehmen, dann wird bei der Umwandlung zu HTML jeweils eine Einrückungsebene (vier Leerzeichen oder ein Tab) entfernt. Das folgende Beispiel zeigt dies.

{% highlight text %}
Das ist ein normaler Absatz.

    <html>
        <head>
          <meta charset="utf-8" />
        </head>
        <body>
        </body>
    </html>
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Das ist ein normaler Absatz.</p>

<pre><code>&lt;html&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
{% endhighlight %}

Ein Quelltext-Block endet entweder bei der ersten Zeile, die nicht mehr eingerückt ist oder (wenn der Quelltext-Block am Ende des Dokuments steht) am Ende des Dokuments. Das folgende Beispiel zeigt dies.

{% highlight text %}
Das ist der erste Absatz.

    <html>
        ...
    </html>

Das ist der zweite Absatz.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Das ist der erste Absatz.</p>

<pre><code>&lt;html&gt;
    ...
&lt;/html&gt;
</code></pre>

<p>Das ist der zweite Absatz.</p>
{% endhighlight %}

Innerhalb von Quelltext-Blöcken wird *Markdown*-Syntax nicht verarbeitet/ interpretiert. So sind Sternchen dann auch einfach nur Sternchen - so wie es das nächste Beispiel zeigt.

{% highlight text %}
Das ist der erste Absatz.

    Text können Sie mit Sternchen *betonen*.

Das ist der zweite Absatz.
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<p>Das ist der erste Absatz.</p>

<pre><code>Text können Sie mit Sternchen *betonen*.
</code></pre>

<p>Das ist der zweite Absatz.</p>
{% endhighlight %}
