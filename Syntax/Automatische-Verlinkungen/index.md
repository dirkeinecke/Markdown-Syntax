---
title: Markdown-Syntax - Automatische Verlinkungen
description: Diese Seite zeigt Ihnen, wie Sie mit Markdown URLs und E-Mail-Adressen automatisch verlinken lassen.
---

## Automatische Verlinkungen

*Markdown* stellt Ihnen die automatische Verlinkung von URLs und von E-Mail-Adresse zur Verfügung.

### Automatische Verlinkung von URLs

Wenn Sie mittels *Markdown* einen URL automatisch in einen Link umwandeln lassen möchten, dann umschließen Sie den URL mit spitzen Klammern (`<` und `>`). Das folgende Beispiel zeigt dies exemplarisch.

{% highlight text %}
<https://markdown-syntax.de>
{% endhighlight %}

Dieser HTML-Quelltext zeigt Ihnen, was aus dem vorherigen *Markdown*-Beispiel generiert wird.

{% highlight html %}
<a href="https://markdown-syntax.de">https://markdown-syntax.de</a>
{% endhighlight %}

### Automatische Verlinkung von E-Mail-Adressen

Wenn Sie mittels *Markdown* eine E-Mail-Adresse automatisch in einen Link umwandeln lassen möchten, dann umschließen Sie die E-Mail-Adresse mit spitzen Klammern (`<` und `>`). Das folgende Beispiel zeigt dies exemplarisch.

{% highlight text %}
<max@mustermann.de>
{% endhighlight %}

Dieser HTML-Quelltext zeigt Ihnen, was aus dem vorherigen Markdown-Beispiel generiert wird.

{% highlight html %}
<a href="&#109;&#x61;&#x69;&#108;&#x74;&#111;:&#x6D;&#x61;&#x78;&#64;&#109;u&#x73;&#x74;&#101;&#x72;&#109;&#x61;&#x6E;&#x6E;&#46;&#100;&#x65;">&#x6D;&#x61;&#x78;&#64;&#109;u&#x73;&#x74;&#101;&#x72;&#109;&#x61;&#x6E;&#x6E;&#46;&#100;&#x65;</a>
{% endhighlight %}

Wie Sie sehen, wird bei der Erzeugung des HTML-Quelltextes per Zufallsprinzip die E-Mail-Adresse in dezimale und hexadezimale Entity-Kodierungen umgewandelt. Dies hat den Grund, dass es Spam-Bots erschwert werden soll, die E-Mail-Adresse zu erkennen. So werden zwar nicht alle Spam-Bots ausgetrickst, aber ein kleiner Schutz ist besser als gar kein Schutz.

Der Besucher der Website bemerkt von dieser Umwandlung nichts. Im Browser wird die E-Mail-Adresse ganz normal als klickbarer Link 
dargestellt.

### Siehe auch

* [GitHub Flavored Markdown > Automatische Verlinkungen](/Syntax-GFM/Automatische-Verlinkungen/)
