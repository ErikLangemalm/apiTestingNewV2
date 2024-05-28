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
* Test 1: Testet verifierar att statuskoden vid ett GET anrop returnerar statuskod 200(ok). (**Passerar**)
* Test 2: Testet verifierar att formatet på responsen är av typen json. (**Passerar**)
* Test 3: Testet verifierar att ett felaktigt GET request hanteras korrekt. (**Passerar**)
* Test 4: Testet verifierar att filtret fungerar korrekt och returnerar rätt mängd objekt. (**Passerar**)
* Test 5: Testet verifierar att rätt mängd objekt returneras när man paginerar. (**Passerar**)
* Test 6: Testet verifierar att UTF-8 tecken går att filtrera efter. (**Passerar**)
* Test 7: Verifierar att flera requests hanteras och går igenom. (**Passerar**)
* Test 8: Verifierar att GET och POST requests för endpointen books fungerar och att statuskoderna är OK. (**Passerar**)
* Test 10: Verifierar att anslutningen misslyckas vid ett felaktigt anrop till en tabell som inte finns längre. (**Passerar**)
* Test 13: Verifierar att efter en förbestämd mängd anrop(se apiLimiter i server.js) under en viss tid inte överskrids. (**Passerar**)

## Vad visar testerna på - finns det buggar/fel i produkten?
* Test 1:   Testet verifierar att statuskoden vid ett GET request till Books routen är OK och att anropet därmed går igenom. Hade statuskoden inte varit 200 så hade det visat på att APIet inte är uppsatt korrekt. Testet körs och verifierar att enpointen går att nå.
* Test 2:   Testet visar att responsen vid ett GET request är av typen json, d.v.s att GET requestet returnerar datan i ett format man kan hantera. Rest APIs behöver inte använda sig av just json formatet men eftersom det är uppsatt för att returnera det då json formatet är kompakt och lätt att processa så är det viktigt att formatet behålls vid ett anrop.
* Test 3:  Testet visar att det inte går att göra ett GET request med felaktig URL där URLen består av tecken. Testet passerar då det inte finns en endpoint med den strängen i testet.
* Test 4:  Testet visar att filtreringen på de olika variablerna varje bok objekt innehåller enbart returnerar rätt mängd data för det filtret i URLen. Filtret möjliggör det för användare att hitta specifika objekt efter rating men även alla andra variabler som ingår. 
* Test 5: Testet visar att paginering av datan delas upp utefter mängden objekt användaren sätter samt vilken av "sidorna" användaren vill de. Implementeringen av pagineringen har page numret förinställt till 1 om inget specifikt deklareras i filtret.
* Test 6: Testet verifierar att det går att filtrera data baserat på UTF-8 karaktärer sim inte är inkluderat i standard UTF 
* Test 7: Testet simulerar flera requests till books endpointen och är tänkt att verifiera att de anropen går igenom och behandlas.
* Test 8:
* Test 10:
* Test 13:
Testerna 1-13 visar att APIn returnerar rätt statuskoder vid anrop, att filtrering för specifika fält fungerar samt att flera requests hanteras och sedan nekas då en viss mängd requests har gjorts inom ett visst tidsintervall
## Tester som inte han genomföras
Testerna 8 och 9 gick inte att genomföra då jag inte implementerade en PUT endpoint för mitt API.
Sedan på grund utav tid så genomförde jag inte testerna 11 och 12.

### Övrigt angående uppgiften
Siktar på ett godkänt med denna uppgiften
