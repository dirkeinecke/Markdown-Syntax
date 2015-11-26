---
title: Markdown-Syntax - Betonungen
description: Auf dieser Seite wird Ihnen gezeigt, wie Sie mit Markdown Texte als 'betont' und als 'stark betont' markieren.
---

## Betonungen

Mit *Markdown* können Sie Text als "betont" (englisch "emphasized", `<em>`-Tag) und als "stark betont" (englisch "strong emphasized", `<strong>`-Tag) kennzeichnen.

### Betont (`<em>`)

Um mit *Markdown* einen Text als _betont_ zu markieren, müssen Sie ihn entweder mit einem Sternchen (`*`) oder einem Unterstrich (`_`) umschließen, so wie es die folgenden beiden Beispiel zeigen.

{% highlight text %}
Das ist _ein_ Text.
{% endhighlight %}

{% highlight text %}
Das ist *ein* Text.
{% endhighlight %}

Durch beide *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
Das ist <em>ein</em> Text.
{% endhighlight %}

Sie können diese Betonung auch innerhalb eines Wortes verwenden, so wie es das folgende Beispiel zeigt.

{% highlight text %}
Mar_kd_own
{% endhighlight %}

{% highlight text %}
Mar*kd*own
{% endhighlight %}

Durch beide *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
Mar<em>kd</em>own
{% endhighlight %}

**Achtung:** Bei GitHub kann man innerhalb eines Wortes die Betonung mit einem Unterstrich (`_`) nicht verwenden.

### Stark betont (`<strong>`)

Um mit *Markdown* einen Text als __stark betont__ zu markieren, müssen Sie ihn entweder mit zwei aufeinander folgenden Sternchen (`**`) oder zwei aufeinander folgenden Unterstrriche (`_`) umschließen, so wie es die folgenden beiden Beispiel zeigen.

{% highlight text %}
Das ist __ein__ Text.
{% endhighlight %}

{% highlight text %}
Das ist **ein** Text.
{% endhighlight %}

Durch beide *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
Das ist <strong>ein</strong> Text.
{% endhighlight %}

Sie können diese Betonung auch innerhalb eines Wortes verwenden, so wie es die folgenden beiden Beispiel zeigen.

{% highlight text %}
Mar__kd__own
{% endhighlight %}

{% highlight text %}
Mar**kd**own
{% endhighlight %}

Durch beide *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
Mar<strong>kd</strong>own
{% endhighlight %}

**Achtung:** Bei GitHub kann man innerhalb eines Wortes die starke Betonung mit zwei Unterstrichen (`__`) nicht verwenden.
