---
title: Markdown-Syntax - Bilder
description: Markdown-Syntax - Bilder
---

## Bilder

*Markdown* besitzt zwei Arten um Bilder einzubinden. Zum einen "Inline" und zum anderen per "Referenz". Im Folgenden werden Ihnen beide Arten beschrieben und mit Beispielen veranschaulicht. Die Angabe der Größe (Höhe & Breite) eines Bildes ist mit *Markdown* nicht möglich.

### Inline

Die Inline-Syntax um eine Bild mit *Markdown* einzubinden sieht im einfachsten Fall so aus, wie es das folgende Beispiel zeigt. Dabei notiert man zunächst ein Ausrufezeichen (`!`). In den darauf folgenden eckigen Klammern (`[`, `]`) wird der Wert des `alt`-Attributs angegeben. Danach folgt in runden Klammern (`(`, `)`) der Pfad bzw. URL des Bildes. Dieser wird dann bei der Ausgabe als Wert des `src`-Attributs gesetzt.

{% highlight text %}
![Alt-Text](/Pfad/zum/Bild.jpg)
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<img src="/Pfad/zum/Bild.jpg" alt="Alt-Text" title="" />
{% endhighlight %}

Zusätzlich kann man noch den Wert des `title`-Attributs des `<img>`-Tags angeben. Dieser wird innerhalb der runden Klammern (`(`, `)`) hinter den Pfad bzw. URL mit einem Leerzeichen als Trenner geschrieben. Der Text muss mit Anführungszeichen umschlossen werden. Das folgende Beispiel zeigt dies.

{% highlight text %}
![Alt-Text](/Pfad/zum/Bild.jpg "optionaler Titel")
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<img src="/Pfad/zum/Bild.jpg" alt="Alt-Text" title="optionaler Titel" />
{% endhighlight %}

### Referenz

Um mit *Markdown* ein Bild per Referenz einzubinden, müssen Sie als erstes diese Referenz definieren. Dabei wird der Referenz zunächst in eckigen Klammern (`[`, `]`) eine ID (ein Name) gegeben. Danach folgt ein Doppelpunkt (`:`) und dann der Pfad bzw. URL des Bildes. Der optionale Titel kann am Ende getrennt mit einem Leerzeichen und umschlossen von Anführungszeichen angegeben werden. Das folgende Beispiel zeigt die vollständige *Markdown*-Syntax zur Definition einer Bildreferenz.

{% highlight text %}
[Bild 1]: Pfad/zum/Bild.jpg  "Optionaler Titel"
{% endhighlight %}

Diese Definition einer Bildreferenz allein bewirkt noch keine Ausgabe. Für die Ausgabe des Bildes anhand einer Referenz notieren Sie die *Markdown*-Syntax wie im folgenden Beispiel.

{% highlight text %}
![Alt-Text][Bild 1]
{% endhighlight %}

Wie Sie sehen, ist dies sehr ähnlich der bereits weiter oben gezeigten Inline-Syntax. Notieren Sie am Anfang wieder ein Ausrufezeichen (`!`). In den darauf folgenden ersten Paar eckigen Klammern (`[`, `]`) wird der Wert des `alt`-Attributs angegeben. Danach folgt ein zweites Paar eckiger Klammern (`[`, `]`). Diese umschließen den Namen der zuvor definierten Bildreferenz.

Das folgenden *Markdown*-Beispiel zeigt noch einmal Referenzdefinition und Bildausgabe zusammen.

{% highlight text %}
[Bild 1]: Pfad/zum/Bild.jpg  "Optionaler Titel"
![Alt-Text][Bild 1]
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<img src="Pfad/zum/Bild2.jpg" alt="Alt-Text" title="Optionaler Titel" />
{% endhighlight %}

Wenn Sie eine Bildreferenz doppelt definieren, dann wird immer die zuletzt definierte Bildreferenz verwendet. Das folgende Beispiel zeigt dies.

{% highlight text %}
[Bild 1]: Pfad/zum/Bild.jpg  "Optionaler Titel"
[Bild 1]: Pfad/zum/AnderesBild.jpg  "Optionaler Titel"

![Alt-Text][Bild 1]
{% endhighlight %}

Durch dieses *Markdown*-Beispiele wird folgender HTML-Quelltext erzeugt.

{% highlight html %}
<img src="Pfad/zum/AnderesBild.jpg" alt="Alt-Text" title="Optionaler Titel" />
{% endhighlight %}
