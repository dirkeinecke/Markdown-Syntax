---
title: Markdown-Syntax - Überschriften
description: Markdown-Syntax - Überschriften
---

## Überschriften

*Markdown* bietet Ihnen zwei verschiedene Möglichkeiten, Überschriften auszuzeichnen.

### Möglichkeit 1 (Setext)

Überschriften ersten Grades (`<h1>`) werden durch **Gleichheitszeichen** unter dem Text der Überschrift kenntlich gemacht. Dabei ist es egal, wieviele Gleichheitszeichen Sie verwenden.

{% highlight text %}
Überschrift ersten Grades
=========================
{% endhighlight %}

Überschriften zweiten Grades (`<h2>`) werden durch **Bindestriche** unter dem Text der Überschrift kenntlich gemacht. Dabei ist es egal, wieviele Bindestriche Sie verwenden.

{% highlight text %}
Überschrift zweiten Grades
--------------------------
{% endhighlight %}

Weitere Überschriftenebenen (`<h3>` bis `<h6>`) sind mit dieser Variante nicht möglich. Wenn Sie bereits wissen, dass Sie mehr als zwei Ebenen bei den Überschriften benötigen, dann sollten sie von Anfang an auf die nun folgende zweite Möglichkeit setzen.

### Möglichkeit 2

Überschriften ersten Grades (`<h1>`) werden durch **eine Raute** am Zeilenanfang kenntlich gemacht.

{% highlight text %}
# Überschrift ersten Grades
{% endhighlight %}

Überschriften ersten Grades (`<h2>`) werden durch **zwei Rauten** am Zeilenanfang kenntlich gemacht.

{% highlight text %}
## Überschrift zweiten Grades
{% endhighlight %}

Überschriften dritten Grades (`<h3>`) werden durch **drei Rauten** am Zeilenanfang kenntlich gemacht.

{% highlight text %}
### Überschrift dritten Grades
{% endhighlight %}

Überschriften vierten Grades (`<h4>`) werden durch **vier Rauten** am Zeilenanfang kenntlich gemacht.

{% highlight text %}
#### Überschrift vierten Grades
{% endhighlight %}

Überschriften fünften Grades (`<h5>`) werden durch **fünf Rauten** am Zeilenanfang kenntlich gemacht.

{% highlight text %}
##### Überschrift fünften Grades
{% endhighlight %}

Überschriften sechsten Grades (`<h6>`) werden durch **sechs Rauten** am Zeilenanfang kenntlich gemacht.

{% highlight text %}
###### Überschrift sechsten Grades
{% endhighlight %}

Wie Sie sehen, können Sie so alle durch HTML bekannten Überschriftenebenen umsetzen.