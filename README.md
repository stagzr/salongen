# Salongen

Skånska Byggvarors arbetsprov för frontend-utvecklare.

Appen är baserad på create-react-app.

Testet skulle utföras på 4-8 timmar men jag har lagt ner ca 10-12 timmar.

Möjliga förbättringar:

- Fler tester givetvis, men ville med detta test visa att jag kan principen.
- Validering av data har jag gjort med Proptypes, det kan dock förbättras en hel del.

## Starta appen

### Installera npm

> https://github.com/nvm-sh/nvm

### Starta via npm

> `npm i`

> `npm start`

## Testa appen

Test är implementerade med Jest och React Testing Library.

> `npm test`

### Krav

Node >16 krävs. Använder du NVM så kan du enkelt ändra genom att köra följande i din terminal.

> `nvm use 16`

### Kända fel

Felaktig React-version med nuvarande testkod

> ` Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot`
