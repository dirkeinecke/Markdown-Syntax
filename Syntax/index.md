---
layout: default
title: Markdown-Syntax
description: Markdown-Syntax
---

## Syntax

Da *Markdown* einzig für das Schreiben von Texten im Web konzipiert wurde, ist der Aumfang der *Markdown*-Syntax relativ gering und auch einfach gehalten. Es soll ja nicht der gesamte Umfang von HTML ersetzt werden. Es geht nur darum, einen sehr kleinen Teil von HTML in eine noch einfachere (HTML ist nämlich schon recht einfach) Syntax zu verpacken. Für alles, was man mit *Markdown* nicht machen kann, können einfach HTML-Tags verwendet werden. Das bedeutet, dass man in einem *Markdown*-Dokumente (Dateiendung .md oder .markdown) beliebig zwischen *Markdown* und HTML wechseln kann. Bei diesem Wechsel muss man jedoch eine Kleinigkeit beachten: Wenn man HTML-Block-Tags (zum Beispiel `<div>`, `<table>`, `<pre>`, `<p>`) verwendet, dann muss man diese mit einer Leerzeile darüber und darunter vom Rest trennen. Auch dürfen die Start- und Endelemente HTML-Block-Tags nicht mit Tabs oder Leerzeichen eingerückt werden. Innerhalb der Start- und Endelemente darf dann wieder ganz normal eingerückt werden. Das folgende Beispiel zeigt dies.

{% highlight html %}
Das ist eine Zeile Text über der Tabelle.

<table>
  <tr>
    <td>Hier steht ein Text in der Tabelle.</td>
  </tr>
</table>

Das ist eine Zeile Text unter der Tabelle.
{% endhighlight %}
