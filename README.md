# Slutprojektet

Detta är ett skolprojekt som är utfört av Linus, Simon, Marcus, Jenny, Felicia och Lucas, FED22G - Medieinstitutet Göteborg.

Det här är vårt slutprojekt i JavaScript - Grundkurs.
Uppgiften gick ut på att skapa ett spel från grunden med allt vi har lärt oss under kursens gång med ett extra fokus på OOP, TypeScript och P5-biblioteket.

## Dokument & Artifakter

Alla dokument som har avänts i projektet hittas i mappen `./documents`. [Läs vidare här](./documents/README.md)!

## Utveckling

### Installation

Först behöver ni köra kommandot `npm install` för att installera nödvändiga moduler (p5, typescript, etc).

### Starta projektet

Kör kommandot `npm run dev` för att starta projektet och se det live i din webbläsare!

### Debugger

Vid felsökning är det starkt rekomenderat att ni använder debug-verktyget i VSCode för att hitta och lösa problem. Metoden vi primärt har använt tidigare är att skriva `console.log` men vi kan bli mer effektiva!

Debuggern låter er stanna programmet och stega rad för rad samtidigt som ni kan titta på vad variablerna innehåller. Det är speciellt användbart när ni arbetar med funktioner som anropas 60 gånger per sekund - console overload otherwise... 🤯

#### Starta Debuggern

För att starta debuggern trycker du på `F5` eller via play-knappen i "ActionBaren", se dock till att du har startat projektet innan (`npm run dev`). Ett nytt fönster kommer att öppnas som behöver användas för att få koden att stanna vid utsatta debugg-punkter.

### Potentiella problem

Versionen av p5.js är 1.5.0 medan senaste version av p5 typerna endast är uppdaterad till 1.4.3. Detta skulle kunna orsaka problem och det kan vara så att ni hittar något i p5's dokumention som inte finns tillgängligt i detta projektet - dock osannolikt.

Typings för de globala variablerna relaterat till p5.sound fungerar tyvärr inte - exempel finns för hur ni kan kringå detta. Se [loadSound funktionen](global.d.ts) för hur det kan göras.
