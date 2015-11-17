---
title: Markdown-Syntax - Zeilenumbrüche
description: Markdown-Syntax - Zeilenumbrüche
---

## Zeilenumbruche

Um mit *Markdown* einen Zeilenumbruch (`<br>`-Tag) zu erzeugen, setzen Sie zwei Leerzeichen an das Zeilenende.

Der folgende Quelltext zeigt Ihnen, wie man mit *Markdown* einen Zeilenumbruch erzeugt. Beachten Sie, dass hier die Lerrzeichen am Ende von Zeile eins und Zeile zwei nicht direkt sichtbar sind. Aber glauben Sie mir, sie sind vorhanden.

{% highlight text %}
Das ist ein Text in Zeile 1.  
Das ist ein Text in Zeile 2.  
Das ist ein Text in Zeile 3.
{% endhighlight %}

Dieser HTML-Quelltext zeigt Ihnen nun, was aus dem vorherigen Markdown-Beispiel generiert wird.

{% highlight html %}
<p>Das ist ein Text in Zeile 1. <br>
Das ist ein Text in Zeile 2. <br>
Das ist ein Text in Zeile 3.</p>
{% endhighlight %}
