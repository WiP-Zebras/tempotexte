# TempoTexte

TempoTexte estime instantanément le temps nécessaire pour lire un texte, sans l’envoyer hors de votre navigateur. L’application est statique : le texte est saisi, compté et estimé localement, sans compte ni collecte.

## Utiliser l’application

Pour lancer une version locale :

```sh
npm install
npm run build
npm run dev
```

Ouvrir ensuite <http://localhost:4173>. `npm run dev` sert le dossier `docs/`, qui est produit par le build à partir de `public/` et `src/`.

## Calcul

Le moteur compte les séquences contiguës de lettres, marques Unicode ou chiffres (`/[\p{L}\p{M}]+|\p{N}+/gu`). La ponctuation, les espaces multiples, les retours à la ligne et les apostrophes séparent les mots ; les nombres sont comptés.

La durée affichée est calculée ainsi :

```text
minutes = plafond(nombre_de_mots / vitesse_en_mots_par_minute)
```

La vitesse initiale est de 200 mots/minute et peut être réglée dans l’interface entre 1 et 2 000 mots/minute. Un texte vide donne 0 minute. Toute durée non nulle est arrondie à la minute supérieure : c’est une estimation, pas une mesure de la vitesse réelle. La saisie et la vitesse recalculent le résultat immédiatement.

La règle et ses cas limites sont détaillés dans [CONTEXTE.md](CONTEXTE.md) ; l’implémentation se trouve dans [src/reading-time.js](src/reading-time.js).

## Commandes vérifiées

Depuis la racine du dépôt :

```sh
npm test                    # 14 tests passés
npm run build               # régénère docs/ depuis public/ et src/
node --check public/app.js
node --check src/reading-time.js
node --check scripts/build.mjs
```

Les tests couvrent le texte vide, les espaces et retours à la ligne, la ponctuation, les nombres, Unicode, un texte long, l’arrondi, une vitesse personnalisée, l’absence de requête réseau et les garde-fous de l’interface. Le build vérifie aussi que le dossier publiable est régénéré.

## Confidentialité

Le traitement se fait dans le navigateur. Le texte reste dans la mémoire de la page et n’est envoyé à aucun service ; l’application ne nécessite ni compte, ni serveur applicatif, ni base de données. Elle ne conserve pas le texte entre deux visites. Aucun analytics, stockage distant ou appel réseau ne doit être ajouté sans décision dédiée.

Cette promesse est limitée au code statique présent dans ce dépôt et ne vaut pas preuve générale de conformité WCAG, de performance ou d’absence de risque dans un hébergement tiers.

## Limites du produit

TempoTexte estime une durée à partir d’un nombre de mots et d’une vitesse choisie. Il ne tient pas compte de la langue, de la difficulté, des images, des tableaux, des pauses ni de la vitesse individuelle. L’outil ne fait pas de synthèse vocale, traduction, correction, import de fichier, extraction d’URL ou de PDF, partage, historique, synchronisation ou collaboration.

## Traçabilité Impeccable

La source consultée est la section [Slop d’Impeccable](https://impeccable.style/#slop), consultée le 15 août 2026. Les prescriptions de la source et les décisions de l’équipe sont séparées dans le guide : [public/impeccable-guide.md](public/impeccable-guide.md), copié dans [docs/impeccable-guide.md](docs/impeccable-guide.md) par le build.

Le guide contient :

- les six règles retenues, leur provenance et leurs limites ;
- les décisions observables dans `public/index.html`, `public/styles.css` et `public/app.js` ;
- une matrice avant/après ;
- les critères de contrôle et les commandes exécutées.

Les preuves d’application sont donc le guide versionné, ses références de fichiers et les tests automatisés. Elles montrent les changements réalisés ; elles ne prétendent pas mesurer un gain d’utilisabilité.

## Décisions et journal

Le journal daté, les hypothèses, le périmètre, les états d’interface, la confidentialité et les exclusions sont dans [CONTEXTE.md](CONTEXTE.md), notamment la section « Journal des hypothèses et décisions ». Les choix principaux sont le traitement local, l’application statique, une action unique et une vitesse de référence transparente de 200 mots/minute, avec réglage utilisateur dans l’interface.

## Publication trusted, sans workflow

Le contenu publiable est le dossier `docs/`. `npm run build` le régénère à partir des sources ; aucun fichier `.github/workflows` ni GitHub Actions personnalisé n’est requis.

Cette carte ne pousse rien, n’appelle pas `gh api`, ne modifie pas GitHub Pages et n’expose aucun credential. Après revue et finalisation, le chemin trusted de l’orchestrateur publie le commit vérifié selon la configuration d’hébergement retenue, puis vérifie l’URL HTTPS publique. La publication ne doit pas ajouter de collecte ni élargir les autorisations.

## Phrase de présentation finale

> TempoTexte estime instantanément le temps nécessaire pour lire un texte, sans l’envoyer hors de votre navigateur.
