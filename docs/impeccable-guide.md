# Guide Impeccable appliqué à TempoTexte

> Guide de traçabilité produit — version 1, 2026-08-15

## Périmètre et provenance

Ce guide traduit les recommandations anti-slop de la section **Slop** d’Impeccable en critères observables pour TempoTexte. Source : [impeccable.style/#slop](https://impeccable.style/#slop), consultée le 2026-08-15. Les formulations sont des reformulations de travail, distinguées des décisions de l’équipe. La source ne prouve ni conformité WCAG, ni performance, ni utilisabilité ; ces sujets restent couverts par les contrôles dédiés.

## Règles appliquées

### 1. Éviter l’apparence générique et interchangeable

- **Observation :** un estimateur mono-fonction doit expliquer sa proposition de valeur sans sections, badges ou décorations de tableau de bord.
- **Décision :** écran unique, hiérarchie courte (contexte, titre, explication, saisie, résultat), vocabulaire lié à la lecture.
- **Éléments :** `public/index.html:11-20`, `public/index.html:22-48`, copie `docs/index.html`.
- **Critère :** une action principale et un résultat, sans navigation ou bloc décoratif concurrent.

### 2. Choisir une typographie intentionnelle et lisible

- **Observation :** la lisibilité doit venir de la hiérarchie, de la taille et de l’espacement.
- **Décision :** pile système sans dépendance distante, échelle responsive, largeur de lecture limitée et interligne confortable.
- **Éléments :** `public/styles.css:14-19`, `public/styles.css:25-28`, `public/styles.css:41`.
- **Critère :** titre, aides, libellés et résultat ont des niveaux distincts sur petit écran comme sur grand écran.

### 3. Éviter les palettes et effets décoratifs clichés

- **Observation :** la couleur doit avoir une fonction et non servir de remplissage visuel.
- **Décision :** palette courte et mate (encre, secondaire, papier, surface, ligne, actions, focus), sans dégradé, ombre ou animation indispensable.
- **Éléments :** `public/styles.css:1-11`, `public/styles.css:35-40`, `public/styles.css:49-52`.
- **Critère :** chaque couleur nommée a un usage ; la compréhension ne dépend pas d’un effet.

### 4. Limiter cartes, bordures, pastilles et arrondis

- **Observation :** des conteneurs répétés et très arrondis donnent une esthétique interchangeable.
- **Décision :** deux panneaux fonctionnels accolés, bordures fines, rayons modérés, aucune carte imbriquée décorative.
- **Éléments :** `public/index.html:22-48`, `public/styles.css:23-25`, `public/styles.css:29`, `public/styles.css:35`.
- **Critère :** les panneaux correspondent à des états utiles et le résultat reste rattaché à la saisie.

### 5. Ne pas remplacer l’iconographie par des emojis

- **Observation :** cet outil textuel n’a pas besoin d’icônes décoratives pour comprendre son action.
- **Décision :** aucune icône ou emoji nécessaire ; libellés explicites dans le HTML et les messages.
- **Éléments :** `public/index.html:11-54`, `public/app.js:1-39`.
- **Critère :** parcours et résultat restent compréhensibles sans pictogramme.

### 6. Faire primer hiérarchie, contenu, action et résultat

- **Observation :** le texte, l’action d’estimer et la réponse calculée sont la valeur du produit.
- **Décision :** champs reliés à leurs aides, résultat `aria-live`, calcul local dès la saisie, bouton conservé pour l’action clavier ; erreurs lisibles.
- **Éléments :** `public/index.html:22-48`, `public/app.js:5-39`, `src/reading-time.js`.
- **Critère :** une saisie valide met à jour le résultat sans réseau ; une saisie invalide reçoit un message et un focus approprié à la soumission.

## Matrice avant / après

« Avant » désigne l’observation de l’audit de cette carte ; « après » l’état matérialisé par les fichiers actuels. Cette matrice ne mesure pas un gain d’utilisabilité.

| Règle | Avant | Après | Preuve |
|---|---|---|---|
| Apparence générique | Risque de tableau de bord à sections multiples. | Écran unique, titre orienté tâche, formulaire et résultat. | `public/index.html:11-54` |
| Typographie | Hiérarchie à contrôler avant publication. | Pile locale, titre/résultat responsives, largeur et interligne explicites. | `public/styles.css:14-19`, `:25-28`, `:41` |
| Palette/effets | Risque d’effets sans fonction. | Tokens fonctionnels, pas de dégradé/ombre, focus visible et mouvement réduit. | `public/styles.css:1-11`, `:49-52` |
| Cartes/arrondis | Risque de composants décoratifs empilés. | Deux panneaux fonctionnels accolés, bordures fines, rayons modérés. | `public/styles.css:23-25`, `:29` |
| Iconographie | Aucun besoin fonctionnel identifié. | Aucun emoji/icône requis ; libellés textuels. | `public/index.html`, `public/app.js` |
| Hiérarchie/action/résultat | Résultat dépendait d’une soumission explicite. | Recalcul sur `input`, bouton conservé pour soumission clavier et validation. | `public/app.js:5-39`; tests (14) |

## Limites et vérifications

- `docs/` est généré par `npm run build` depuis `public/` et `src/`; ce guide est donc conservé dans `public/impeccable-guide.md` puis copié vers `docs/impeccable-guide.md`.
- Les tests automatisés couvrent métier, chargement local, structure sémantique et garde-fous CSS ; ils ne remplacent pas un test visuel multi-navigateurs.
- La preuve d’absence de transmission repose sur le code statique et les tests du moteur ; toute télémétrie future exige une décision distincte.
- La référence de commit sera ajoutée par la finalisation Git trusted. Les références de fichiers sont dès maintenant reproductibles.

## Vérifications exécutées

```text
npm run build       # réussite : public/ -> docs/
npm test            # réussite : 14 tests
node --check public/app.js  # réussite
```
