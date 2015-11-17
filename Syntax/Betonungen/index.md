---
title: Markdown-Syntax - Betonungen
description: Markdown-Syntax - Betonungen
---

## Betonungen

Mit *Markdown* können Sie Text als _betont_ (englisch _emphasized_, `<em>`-Tag) und als __stark betont__ (englisch __strong emphasized__, `<strong>`-Tag) kennzeichnen.

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

Das*ist*ein
