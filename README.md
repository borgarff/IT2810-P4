Prosjektoppgave 4 for faget IT2810. Bruk av react native

### For å starte applikasjonen
Hvis du skal teste med din fysiske mobil, så må du endre uri i ApolloLinks.tsx til din IP adresse
kan for eks. uri: 'http://192.168.1.10:4000/'; //linje 7
Hvis du bruker en android eller IOS simulator skal du ikke trenge å endre denne.

for å starte ts-node:
npm install -D ts-node
ts-node backend/index.ts

For å starte prosjektet
npm install
npm start

Hvis du skal kjøre med bare lokal data (Uten API). kan du kjøre den andre backend men vanlig node.
node backend/index.js

## App
Dette er en reise app som du kan søke opp avgangstavler i. Du kan sortere etter type transport f eks. Buss eller Båt

Appen henter innformasjon fra En Tur sitt API, men kan testes lokalt med begrenset data. Dette kan du gjøre hvis du manler internett.

### React Native
Denne appen er laget med React native og typescript. Expo er brukt til dette prosjektet. For å simulere applikasjonen brukte jeg Andorid simulatoren som kommer med ANdorid studio.
Jeg sulle gjerne ha testet applikasjoen min på IOS også, men jeg har ikke iPhone eller en Mac. Dermed fikk jeg ikke testet appen i IOS, hvis det skulle være noe problemer der.
Brukete reactnative.dev ganske mye for å finne relevant innformasjon til prosjektet. Det var også en god del informasjon jeg fant på expo.io.

### GraphQL & Apollo 
Jeg har brukt Apollo sitt GraphQL verktøy både for Frontend og backend (Apollo Server og Apollo Client). Det fungerte like bra her som i prosjekt 3.


### Entur API
Jeg har hentet mye av dataen jeg har brukt fra Entur sitt API. Det skal også være mulig å hente noe data som jeg har laget lokal på den ene backend serveren. 
Hvis det ikke skulle være mulig å få kontakt med API'et.
Under her kan du se en query som kjøres for å hente data.

``` features(name: $name) {
      properties{
        id
        name
        county
        locality
      }
    }
  }
```

#### ts-node, npm & expo
Backend kjører ts-node for typescript. 
Jeg brukte expo for å starte prosjektet
npm install --global expo-cli
expo init prosjekt4

### Funksjonalitet
De meste av de funksjonelle kravene skal være ok (tror jeg). Det eneste som jeg manglet er dynamisk lasting. Skulle gjerne ha fått implementert dette bedre, men jeg fikk dessverre ikke tid.
Utenom det så skal applikasjonen fungere greit. Det er noen småting som kunne ha vært bedre, men jeg fikk ikke tid.


### Kilder

https://api.entur.io/journey-planner/v2/ide/
https://developer.entur.org/
https://reactnative.dev/
https://docs.expo.io/
https://www.apollographql.com/docs/