---
title: Markdown-Syntax - Automatische Maskierung besonderer Zeichen
description: Markdown-Syntax - Automatische Maskierung besonderer Zeichen
---

## Automatische Maskierung besonderer Zeichen

In HTML kommt zwei Zeichen eine besondere Bedeutung zu: Die öffnene spitze Klammer (`<`) und das `&`-Zeichen. Wenn man diese beiden Zeichen in einem Text verwenden möchte, dann müssen sie maskiert (in Entities umgewandelt) werden. Da dies aber immer wieder zu Fehlern führt und die erzeugten HTML-Seiten dann nicht mehr valid sind, greift dem Schreiber an dieser Stelle *Markdown* unter die Arme und erledigt die Maskierung ganz automatisch.

### `<`

Die öffnende spitze Klammer (`<`) wir innerhalb von HTML für die Kennzeichnung von HTML-Tags verwendet. Soll dieses Zeichen aber in einem Text als "sich selbst" verwendet werden, dann muss es als `&lt;` geschrieben werden. Diese Umwandlung wird von *Markdown* automatisch durchgeführt. Die Verwendung dieses Zeichens bei Inline-HTML zwischen *Markdown*-Auszeichnungen bleibt von der automatischen Umwandling unberührt.

Aus dem Text `dies & das` wird also der HTML-Quelltext `dies &amp; das`.

### `&`

Das `&`-Zeichen wird innerhalb von HTML für das Einleiten von benannte Zeichen (Entities) verwendet. Soll dieses Zeichen aber in einem Text als "sich selbst" verwendet werden, dann muss es als `&amp;` geschrieben werden. Diese Umwandlung wird von *Markdown* automatisch durchgeführt.

Aus dem Text `4 < 5` wird somit der HTML-Quelltext `4 &lt; 5`.
