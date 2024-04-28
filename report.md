### API
Mock datan som populerar min tabell är genererad av mockaroo.
APIt använder sig av MongoDB atlas för att hosta ett cluster som innehåller tabellen books som i sin tur innehåller titel, författare, betyg, när boken släpptes och en kort sträng
med information kring boken.

Min api använder sig av mongoose samt express för att generera scheman från en förbestämd objekt struktur som jag sedan använder för att antingen lägga upp nya objekt på MongoDB alternativt för filtrering på GET requesten.

### MongoDB Atlas
APIt tar användning av MongoDB Atlas där clusteret hostar servern.
## Compass
Compass används som GUI för att hantera mitt cluster och server.
### Postman
Postman testerna går ut på att testa olika GET anrop för att testa responskoder, filtrering samt paginering

## Vad testar vi?
* Test 1: Testet verifierar att statuskoden vid ett GET anrop returnerar statuskod 200(ok)
* Test 2: Testet verifierar att formatet på responsen är av typen json
* Test 3: Testet verifierar att ett felaktigt GET request hanteras korrekt
* Test 4: Testet verifierar att filtret fungerar korrekt och returnerar rätt mängd objekt
* Test 5: Testet verifierar att rätt mängd objekt returneras när man paginerar
* Test 6: Testet verifierar att UTF-8 tecken går att filtrera efter
* Test 7: Verifierar att flera requests hanteras och går igenom
* Test 10: Verifierar att anslutningen misslyckas vid ett felaktigt anrop till en tabell som inte finns längre
* Test 13: Verifierar att efter en förbestämd mängd anrop(se apiLimiter i server.js) under en viss tid inte överskrids

## Vad visar testerna på - finns det buggar/fel i produkten?
Testerna 1-13 visar att APIn returnerar rätt statuskoder vid anrop, att filtrering för specifika fält fungerar samt att flera requests hanteras och sedan nekas då en viss mängd requests har gjorts inom ett visst tidsintervall
## Tester som inte han genomföras
Testerna 8 och 9 gick inte att genomföra då jag inte implementerade en PUT endpoint för mitt API.
Sedan på grund utav tid så genomförde jag inte testerna 11 och 12.

### Övrigt angående uppgiften
Siktar på ett godkänt med denna uppgiften
