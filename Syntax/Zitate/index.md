---
title: Markdown-Syntax - Zitate
description: Auf dieser Seite wird Ihnen gezeigt, wie Sie mit Markdown Zitate kennzeichnen.
---

## Zitate

*Markdown* verwendet für die Formatierung von Zitaten das `>`-Zeichen.

Der folgende Quelltext zeigt Ihnen die Auszeichnung von Zitaten mit *Markdown*.

{% highlight text %}
> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
> sed diam nonumy eirmod tempor invidunt ut labore et dolore
> magna aliquyam erat, sed diam voluptua. At vero eos et accusam
> et justo duo dolores et ea rebum.
{% endhighlight %}

Einigen von Ihnen wird dies sicher aus E-Mails bekannt vorkommen. Und genau aus diesem Zusammenhang ist die Syntax auch entlehnt. 

Dieser HTML-Quelltext zeigt Ihnen nun, was aus dem vorherigen Markdown-Beispiel generiert wird.

{% highlight html %}
<blockquote>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum.</p>
</blockquote>
{% endhighlight %}

Sie können, genauso wie bei E-Mails, auch mehrere Zitatebenen verwenden. Um eine weitere Zitatebene zu kennzeichnen, fügen Sie einfach an den Zeilenanfang weitere `>`-Zeichen gefolgt von einem Leerzeichen ein. Das folgende Beispiel zeigt Ihnen eine zweite Zitatebene für die ersten beiden Zeilen.

{% highlight text %}
> > Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
> > sed diam nonumy eirmod tempor invidunt ut labore et dolore
> magna aliquyam erat, sed diam voluptua. At vero eos et accusam
> et justo duo dolores et ea rebum.
{% endhighlight %}

Der folgende Quelltext zeigt Ihnen den durch das vorherige Markdown-Beispiel generierten HTML-Quelltext.

{% highlight html %}
<blockquote>
  <blockquote>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum.</p>
  </blockquote>
</blockquote>
{% endhighlight %}

Zitate können natürlich auch selbst andere *Markdown*-Auszeichnungen enthalten. Der folgende Quelltext zeigt Ihnen dazu beispielhaft, wie man innerhalb eines Zitats eine Überschrift (ersten Grades) notiert.

{% highlight text %}
> # Lorem ipsum
> sed diam nonumy eirmod tempor invidunt ut labore et dolore
> magna aliquyam erat, sed diam voluptua. At vero eos et accusam
> et justo duo dolores et ea rebum.
{% endhighlight %}

Das folgende Beispiel zeigt den daraus erzeugen HTML-Quelltext.

{% highlight html %}
<blockquote>
  <h1 id="lorem-ipsum">Lorem ipsum</h1>
  <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum.</p>
</blockquote>
{% endhighlight %}
