---
title: Markdown-Syntax - Tabellen (GitHub Flavored Markdown)
description: Markdown-Syntax - Tabellen (GitHub Flavored Markdown)
---

## Tabellen

GitHub hat unter dem Begriff "GitHub Flavored Markdown" (kurz *GFM*) die Standardsyntax von *Markdown* u. a. um Tabellen erweitert. 

Für Tabellen werden bei *GFM* senkrechte Striche (pipe, `|`) zur Abgrenzung der Spalten und Bindestriche (`-`) zur Abgrenzung des Tabellenkopfes (´<thead>`) von Tabellenkörper (`<thody>`) eingesetzt. Das folgende Beispiel zeigt dies.

{% highlight text %}
Spalte 1 | Spalte 2 | Spalte 3
-------- | -------- | --------
Inhalt   | Inhalt   | Inhalt
Inhalt   | Inhalt   | Inhalt
{% endhighlight %}

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen Markdown-Beispiel erzeugt wird.

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Spalte 1</th>
      <th>Spalte 2</th>
      <th>Spalte 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Inhalt</td>
      <td>Inhalt</td>
      <td>Inhalt</td>
    </tr>
    <tr>
      <td>Inhalt</td>
      <td>Inhalt</td>
      <td>Inhalt</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

*GFM* bietet Ihnen auch die Möglichkeit, an den Anfang und an das Ende jeder Zeile Pipes (`|`) zu setzen. Von der Ausgabe ändert sich dadurch nichts. Es sieht nur für den ein oder anderen beim Bearbeiten der Tabelle besser aus.

{% highlight text %}
| Spalte 1 | Spalte 2 | Spalte 3 |
| -------- | -------- | -------- |
| Inhalt   | Inhalt   | Inhalt   |
| Inhalt   | Inhalt   | Inhalt   |
{% endhighlight %}

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen Markdown-Beispiel erzeugt wird.

| Spalte 1 | Spalte 2 | Spalte 3 |
| -------- | -------- | -------- |
| Inhalt   | Inhalt   | Inhalt   |
| Inhalt   | Inhalt   | Inhalt   |
