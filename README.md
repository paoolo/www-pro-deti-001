# LEKCE4
Dnešní úkol, aplikace hodiny: https://codepen.io/paoolo/pen/mdKpyjp

# HTML

**Vloží se dlouhý text (odstavec)**
```htm
<p>Odstavec</p>
```

**Vloží se největší nadpis**
```htm
<h1>Nadpis</h1>
```

**Vloží se obrázek s relativní cestou**
```htm
<img src="beep.jpeg">
```
 
**Vloží se obrázek s absolutní cestou**
```htm
<img src="https://tinyurl.com/lection01">
```

**Když se klikne na obrázek, otevře se stránka**
```htm
<a href="https://www.rtvs.sk">
    <img src="beep.jpeg">
</a>
```

**Když se klikne na text, otevře se stránka**
```htm
<a href ="https://www.rtvs.sk">
    Text, na který lze kliknout
</a>
```

# CSS

**Nastavení barvy pozadí stránky**
```css
body {
  background-color: blue;
}
```

**Nastavení barvy barvy všech textů**
```css
body {
  color: green;
}
```

**Texty \<p\> se zarovnají na střed (podobně např. nadpis h2)**
```css
p {
  text-align: center;
}
```

**Obrázky v elementu \<img> se zarovná na střed**
```css
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

```
**Všechny obrázky budou mít šířku 400px**
```css
img {
  width: 400px;
}
```

**Všechny obrázky budou mít výšku 400px**
```css
img {
  height: 400px;
}
```

**Velikost rámečku obrázku**
```css
img {
  border-width: 5px;
}
```

**Rámečem obrázku**

Možnosti: dotted solid double dashed
```css
img {
  border-style: solid;
}
```

**Barva rámečku obrázku**
```css
img {
  border-color: red;
}
```

**Velikost vnějšího prostoru kolem obrázku**
```css
img {
  margin: 25px;
}
```

**Velikost vnitřního prostoru kolem obrázku**
```css
img {
  padding: 25px;
}
```

# Vytvoření nového projektu na Firebase
- Vytvořit Firebase projekt v Firebase web konzoli: https://console.firebase.google.com/u/0/
- Iniciovat projekt z konzole pomocí příkazu:
```
firebase init hosting
```

# Build a nahrání projektu na Firebase
- Vytvoření sestavení, které lze publikovat na internet:
```
npm run build
```
- Publikování na internet:
```
firebase deploy
```

**Odkazy**
✅ [Dvousloupcový layout](https://www.w3schools.com/howto/howto_css_two_columns.asp)