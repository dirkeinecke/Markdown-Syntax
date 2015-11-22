---
title: Markdown-Syntax
description: In diesem Kapitel lernen Sie die Syntax von Markdown kennen.
---

## Syntax

Da *Markdown* einzig für das Schreiben von Texten im Web konzipiert wurde, ist der Umfang der *Markdown*-Syntax relativ gering und auch einfach gestaltet. Es soll ja nicht der gesamte Umfang von HTML ersetzt werden. Es geht nur darum, einen sehr kleinen Teil von HTML in eine noch einfachere (HTML ist nämlich schon recht einfach) Syntax zu verpacken. Für alles, was Sie mit *Markdown* nicht machen können, können Sie einfach HTML-Tags verwenden.

Das bedeutet, dass Sie in einem *Markdown*-Dokumente (Dateiendung .md oder .markdown) beliebig zwischen *Markdown* und HTML wechseln können. Bei diesem Wechsel müssen Sie jedoch eine Kleinigkeit beachten: Wenn Sie HTML-Block-Tags (zum Beispiel `<div>`, `<table>`, `<pre>`, `<p>`) verwenden, dann müssen Sie diese mit einer Leerzeile darüber und darunter vom Rest trennen. Auch dürfen die Start- und Endelemente der HTML-Block-Tags nicht mit Tabs oder Leerzeichen eingerückt werden. Innerhalb der Start- und Endelemente darf dann wieder ganz normal eingerückt werden. Das folgende Beispiel zeigt dies.

{% highlight html %}
Das ist eine Zeile Text über der Tabelle.

<table>
  <tr>
    <td>Hier steht ein Text in der Tabelle.</td>
  </tr>
</table>

Das ist eine Zeile Text unter der Tabelle.
{% endhighlight %}
