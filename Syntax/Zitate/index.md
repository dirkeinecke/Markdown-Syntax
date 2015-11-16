---
title: Markdown-Syntax - Zitate
description: 
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

Einigen von Ihnen wird dies sicher aus E-Mails bekannt vorkommen. Und genau aus diesem Zusammenhang ist die Syntax aus entlehnt. 

Dieser HTML-Quelltext zeigt Ihnen nun, was aus dem vorherigen Markdown-Beispiel generiert wird.

{% highlight html %}
<blockquote>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum.</p>
</blockquote>
{% endhighlight %}

Sie können, genauso wie bei E-Mails, auch mehrere Zitatebenen verwenden. Um eine weitere Zitatebene zu kennzeichnen, fügen Sie einfach an den Zeilenanfang weitere `>`-Zeichen gefolgt von einem Leerzeichen. Das folgende Beispiel zeigt Ihnen eine zweite Zitatebene für die ersten beiden Zeilen.

{% highlight text %}
> > Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
> > sed diam nonumy eirmod tempor invidunt ut labore et dolore
> magna aliquyam erat, sed diam voluptua. At vero eos et accusam
> et justo duo dolores et ea rebum.
{% endhighlight %}

> > Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
> > sed diam nonumy eirmod tempor invidunt ut labore et dolore
> magna aliquyam erat, sed diam voluptua. At vero eos et accusam
> et justo duo dolores et ea rebum.
