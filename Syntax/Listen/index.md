---
title: Markdown-Syntax - Listen
description: Markdown-Syntax - Listen
---

## Listen

*Markdown* unterstützt Sie bei der Erstellung von unsortierten und sortierten/ nummerierten Listen. Für die Unterscheidung werden jeweils nur andere Eintragskennzeichen verwendet. Das Eintragskennzeichen muss aber immer nach rechts hin mit mindestens einem Leerzeichen oder einem Tab vom Eintragstext abgegrenzt werden. Normalerweise stehen Listen immer am linken Rand. Sie können jedoch bis zu drei Leerzeichen eingerückt werden.

### Unsortierte Listen

Bei unsortierten Listen kann als Eintragskennzeichen das Sternchen, das Plus oder der Bindestrich verwendet werden. Innerhalb einer Liste *können* die Eintragskennzeichen auch gemischt werden. Der Übersichtlichkeit halber sollte man dies aber nicht machen.

Die folgenden *Markdown*-Beispiele sind also, was den daraus erzeugten HTML-Quelltext angeht, identisch.

{% highlight text %}
* Eintrag 1
* Eintrag 2
* Eintrag 3
{% endhighlight %}

{% highlight text %}  
  * Eintrag 1
  * Eintrag 2
  * Eintrag 3
{% endhighlight %}

{% highlight text %}
+ Eintrag 1
+ Eintrag 2
+ Eintrag 3
{% endhighlight %}

{% highlight text %}
- Eintrag 1
- Eintrag 2
- Eintrag 3
{% endhighlight %}

{% highlight text %}
* Eintrag 1
+ Eintrag 2
- Eintrag 3
{% endhighlight %}

Durch alle drei *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<ul>
<li>Eintrag 1</li>
<li>Eintrag 2</li>
<li>Eintrag 3</li>
</ul>
{% endhighlight %}

### Sortierte/ nummerierte Listen

Bei sortierten/ nummerierten Listen wird als Eintragskennzeichen eine Zahl gefolgt von einem Punkt verwendet. Dabei ist es unerheblich, mit welcher Zahl Sie beginnen oder ob Sie für jeden Eintrag die selbe Zahl verwenden. Sie sollten der Übersichtlichkeit halber aber eine richtige Nummerierung verwenden. Auch weil eventuell in Zukunft eine bestimmte Startnummer von *Markdown* unterstützt wird.

Die folgenden *Markdown*-Beispiele sind also, was den daraus erzeugten HTML-Quelltext angeht, identisch.

{% highlight text %}
1. Eintrag 1
2. Eintrag 2
3. Eintrag 3
{% endhighlight %}

{% highlight text %}
1. Eintrag 1
1. Eintrag 2
1. Eintrag 3
{% endhighlight %}

{% highlight text %}
3. Eintrag 1
3. Eintrag 2
3. Eintrag 3
{% endhighlight %}

Durch alle drei *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<ol>
<li>Eintrag 1</li>
<li>Eintrag 2</li>
<li>Eintrag 3</li>
</ol>
{% endhighlight %}
