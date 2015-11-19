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

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen *GFM*-Beispiel erzeugt wird.

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

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen *GFM*-Beispiel erzeugt wird. Und wie Sie sehen, haben die zusätzlichen Pipes (`|`) am Anfang und am Ende jeder Zeile keinerlei Auswirkung auf den daraus erzeugten HTML-Quelltext.

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

Wie Sie gesehen haben, habe ich bei den *GFM*-Beispielen die Spalten in jeder Zeile immer schön exakt gleich lang gemacht. Das hat allerdings rein ästhetische Gründe und dient der besseren Lesbarkeit der Tabelle im Rohzustand. Beim Bearbeiten der Tabelle sind Sie also nicht gezwungen, die Spalten in jeder Zeile exakt jedentisch lang zu machen. Das folgende Beispiel zeigt dies.

{% highlight text %}
| Spalte 1 | Das ist Spalte 2 | Und hier ist Spalte 3 |
| -------- | -------- | -------- |
| Inhalt | Das ist ein ganz langer Inhalt. | Auch hier steht ein langer Text. |
| Inhalt | Inhalt | Inhalt |
{% endhighlight %}

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen *GFM*-Beispiel erzeugt wird.

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Spalte 1</th>
      <th>Das ist Spalte 2</th>
      <th>Und hier ist Spalte 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Inhalt</td>
      <td>Das ist ein ganz langer Inhalt.</td>
      <td>Auch hier steht ein langer Text.</td>
    </tr>
    <tr>
      <td>Inhalt</td>
      <td>Inhalt</td>
      <td>Inhalt</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

Innerhalb einer Tabelle kann man wiederum auch Standard-*Markdown* und *GFM* verwenden. Im folgenden Beispiel wird Text als betont (`*`), stark betont (`**`) und durchgetsrichen (`~~`) markiert.

{% highlight text %}
Spalte 1 | Spalte 2   | Spalte 3
-------- | ---------- | ----------
*Inhalt* | **Inhalt** | ~~Inhalt~~
Inhalt   | Inhalt     | Inhalt
{% endhighlight %}

Hier sehen Sie den HTML-Quelltext, der aus dem vorherigen *Markdown*/*GFM*-Beispiel erzeugt wird.

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
      <td><em>Inhalt</em></td>
      <td><strong>Inhalt</strong></td>
      <td><del>Inhalt</del></td>
    </tr>
    <tr>
      <td>Inhalt</td>
      <td>Inhalt</td>
      <td>Inhalt</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

*GFM* bietet Ihnen zusätzlich die Möglichkeit, Text innerhalb einer Spalte nach links, mittig oder nach rechts auszurichten. 

{% highlight text %}
| Links ausgerichtet | Mittig ausgerichtet | Rechts ausgerichtet |
|:------------------ |:-------------------:| -------------------:|
| Inhalt             | Inhalt              | Inhalt              |
| Inhalt             | Inhalt              | Inhalt              |
{% endhighlight %}

| Links ausgerichtet | Mittig ausgerichtet | Rechts ausgerichtet |
|:------------------ |:-------------------:| -------------------:|
| Inhalt             | Inhalt              | Inhalt              |
| Inhalt             | Inhalt              | Inhalt              |
