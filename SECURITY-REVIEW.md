# Revue technique et de confidentialité

Date de la revue : 2026-08-15
Périmètre : source `public/`, copie publiable `docs/`, moteur `src/`, tests, script de build et manifeste npm.

## Résultat

Aucun défaut de sécurité ou de confidentialité nécessitant une correction n’a été identifié.
L’estimation s’effectue localement dans le navigateur : le texte saisi reste dans le DOM, n’est ni envoyé ni stocké, et le résultat est injecté avec `textContent`.

## Contrôles effectués

- `npm test` : 14 tests réussis, 0 échec.
- `npm run build` : réussi ; `public/` et `docs/` sont identiques pour les fichiers publiables, avec la copie attendue du moteur dans `docs/src/`.
- `package.json` : aucune dépendance runtime ou de développement ; aucun lockfile présent.
- Recherche dans les fichiers applicatifs : aucune utilisation de `fetch`, `XMLHttpRequest`, `WebSocket`, `localStorage`, `sessionStorage`, cookie, télémétrie ou secret.
- Les entrées utilisateur sont validées côté interface ; le résultat est écrit via `textContent`, sans `innerHTML`, `eval` ou exécution de code dynamique.
- Aucun workflow `.github/` n’est présent ; la publication GitHub Pages reste hors du périmètre du code et doit suivre le chemin trusted prévu.
- Les seules URL externes sont des références documentaires dans `CONTEXTE.md` et le guide Impeccable ; elles ne sont pas chargées par l’application.

## Constats restants

- La sécurité des en-têtes et de la configuration de la plateforme d’hébergement (CSP, HSTS, etc.) ne peut pas être prouvée par ce dépôt statique. Elle devra être vérifiée après publication, sans ajouter de dépendance distante au runtime.
- Le formulaire utilise `novalidate` et réalise sa validation dans JavaScript ; ce choix est cohérent avec le retour d’erreur accessible existant, mais devra rester couvert si l’interface évolue.

Aucun texte utilisateur, secret, jeton ou donnée personnelle n’a été collecté ni transmis pendant cette revue.
