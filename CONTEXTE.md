# TempoTexte — estimateur de temps de lecture

## Charte

Concevoir, tester et publier une application web statique, épurée et accessible qui estime instantanément le temps nécessaire pour lire un texte collé. Le traitement restera entièrement local dans le navigateur. L’équipe étudiera les recommandations anti-slop d’Impeccable, en tirera une compétence Hermès réutilisable et apportera des preuves de son application réelle au produit.

## Critères d’acceptation

- Une URL HTTPS publique permet d’utiliser l’application depuis un Mac sans accès au VPS, installation, compte ou environnement local.
- La fonction principale est unique et achevée : coller ou saisir un texte produit instantanément une estimation compréhensible de son temps de lecture.
- Le calcul est déterministe, testé et documenté, avec un comportement défini pour le texte vide, les espaces multiples, les retours à la ligne, la ponctuation, les nombres et les textes longs.
- L’application est statique, sans serveur applicatif, sans authentification, sans collecte de données et sans transmission du texte saisi.
- L’interface est utilisable au clavier, responsive sur mobile et ordinateur, lisible, correctement contrastée et compatible avec prefers-reduced-motion.
- Les états vide, actif et erreur ou limite sont explicites, sans faux éléments interactifs ni contenu décoratif gênant.
- Les pratiques pertinentes de https://impeccable.style/#slop sont relevées avec leur source, traduites en règles actionnables et reliées à des décisions visibles dans le produit.
- Une compétence Hermès réutilisable issue de cet apprentissage est versionnée, possède un SKILL.md valide, peut être chargée dans une session propre et a été utilisée pour auditer ou améliorer l’application.
- Un relevé avant/après ou une matrice de traçabilité prouve les changements concrets provoqués par la compétence, plutôt qu’une simple citation de celle-ci.
- Les tests automatisés du calcul et les contrôles de qualité du dépôt réussissent sur une machine propre avec des commandes documentées.
- Un contrôle réel dans un navigateur couvre au minimum Safari ou un moteur WebKit si disponible, Chromium, les largeurs mobile et desktop, le clavier et l’absence d’erreurs console bloquantes.
- Le code, la compétence, les tests et les décisions importantes sont versionnés dans GitHub sans secret ni donnée personnelle.
- La publication n’utilise aucun fichier .github/workflows ni GitHub Actions personnalisé ; elle repose sur une méthode statique compatible avec workflow_write=false.
- La réalisation et la publication n’engendrent aucune dépense et n’élargissent aucune autorisation existante.
- La livraison finale fournit l’URL HTTPS vérifiée et la phrase : « TempoTexte estime instantanément le temps nécessaire pour lire un texte, sans l’envoyer hors de votre navigateur. »
- Le contrôle final est rendu selon le schéma zebras-quality-review/v1 et distingue clairement les critères réussis, échoués, bloqués ou insuffisamment prouvés.

## Décisions

## Sources

## Risques

## Progression

## Livrables
