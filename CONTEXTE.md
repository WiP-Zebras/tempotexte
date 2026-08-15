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

Le périmètre et les décisions datées sont détaillés dans « Périmètre produit arrêté » et « Journal des hypothèses et décisions » ci-dessous.

## Sources

## Risques

## Progression

## Livrables


## Périmètre produit arrêté — décision du 2026-08-15

### Public visé
TempoTexte s’adresse à toute personne qui veut savoir rapidement combien de temps prendra la lecture d’un texte collé : professionnels, étudiants, enseignants, auteurs et lecteurs occasionnels. Aucun compte, profil, réglage obligatoire ou connaissance technique n’est requis.

### Proposition de valeur
« TempoTexte estime instantanément le temps nécessaire pour lire un texte, sans l’envoyer hors de votre navigateur. » L’outil fournit une estimation immédiate, compréhensible et reproductible ; il ne prétend ni mesurer la vitesse réelle d’une personne ni recommander une méthode de lecture.

### Règle de calcul
- Vitesse par défaut : **200 mots par minute (mots/min)**, hypothèse conventionnelle de lecture silencieuse.
- Comptage : un mot est une séquence de caractères non blancs (`\\S+`). Les espaces multiples, retours à la ligne et ponctuations attachées ne créent pas de mots supplémentaires ; les nombres sont comptés comme des mots.
- Formule : `secondes = nombre_de_mots × 60 / 200` ; l’affichage arrondit à la seconde supérieure pour éviter d’annoncer zéro seconde à un texte non vide. Les durées d’au moins une minute sont affichées en minutes et secondes.
- Le calcul est déterministe, local et relancé à chaque modification du texte. Le texte vide produit zéro mot et aucune durée.

### États de l’interface
1. **Vide / initial** : zone de saisie focalisable, consigne claire, résultat absent ou remplacé par une invitation à coller un texte.
2. **Actif** : dès qu’un texte est présent, afficher immédiatement le nombre de mots, la vitesse de référence et la durée estimée ; aucun bouton obligatoire.
3. **Texte modifié** : le résultat précédent est remplacé immédiatement ; aucune donnée n’est conservée entre deux visites.
4. **Limite / entrée non traitable** : message lisible et non silencieux si une limite technique ou une entrée non traitable survient, avec action possible.
5. **Accessibilité** : résultat annoncé de façon appropriée aux technologies d’assistance, parcours clavier complet, focus visible, contraste lisible et animation désactivable via `prefers-reduced-motion`.

### Limites et exclusions
Inclus : saisie ou collage de texte brut, comptage local, estimation unique à 200 mots/minute, affichage responsive sur mobile et ordinateur.

Exclus du périmètre initial : envoi réseau du texte, stockage distant ou local persistant, compte et authentification, import de fichiers, extraction depuis une URL ou un PDF, synchronisation, partage, collaboration, historique, personnalisation de la vitesse, profils de lecteurs, synthèse vocale, traduction, correction orthographique et mesure comportementale. L’estimation ne tient pas compte de la difficulté, de la langue, des images, des tableaux, des pauses ni de la vitesse individuelle ; elle constitue un ordre de grandeur, pas une garantie.

### Architecture et confidentialité
TempoTexte est une application web statique : HTML, CSS et JavaScript exécutés dans le navigateur, sans serveur applicatif ni base de données. Le texte saisi reste dans la mémoire de la page et n’est transmis à aucun service. L’absence de compte réduit la collecte, les frictions et la surface de risque. Toute évolution nécessitant un backend, une télémétrie ou un stockage devra faire l’objet d’une décision distincte.

## Sources

- Impeccable, section « Slop », https://impeccable.style/#slop, consultée le 2026-08-15. Les prescriptions retenues sont reformulées comme garde-fous visuels : hiérarchie claire, typographie lisible, palette fonctionnelle, peu de décorations et priorité donnée à l’action et au résultat. Cette source ne constitue pas une preuve de conformité WCAG, de performance ou d’utilisabilité.

## Risques

- Une vitesse fixe peut être prise pour une mesure personnelle : afficher explicitement l’hypothèse de 200 mots/minute.
- Les conventions de comptage peuvent diverger d’autres outils : documenter `\\S+` et tester espaces, retours à la ligne, ponctuation, nombres et texte vide.
- Une limite de taille ou une erreur de traitement ne doit jamais perdre silencieusement la saisie : prévoir un état explicite et testable.
- La confidentialité annoncée doit rester vraie : ne pas ajouter d’analytics, de requête réseau ou de stockage sans nouvelle décision.

## Journal des hypothèses et décisions

- **2026-08-15 — H1 :** une estimation simple et immédiate a plus de valeur qu’un modèle prétendument personnalisé ; décision : vitesse fixe à 200 mots/minute et transparence de la formule.
- **2026-08-15 — H2 :** le texte peut être sensible ; décision : traitement entièrement local, aucun compte et aucune transmission.
- **2026-08-15 — H3 :** le produit doit être utilisable depuis un navigateur sans installation ; décision : application statique sans serveur applicatif.
- **2026-08-15 — D1 :** le périmètre initial reste une seule action (saisir/coller → lire le résultat) ; import, partage, historique et personnalisation sont exclus.
- **2026-08-15 — D2 :** la source Impeccable guide les choix de présentation, mais ne remplace ni les tests d’accessibilité ni la validation fonctionnelle.

## Progression

- Cadrage produit arrêté et consigné ; prochaine étape : implémenter puis tester le calcul et les états définis ci-dessus.

## Livrables

- `CONTEXTE.md` : périmètre, règle de calcul, états, limites, architecture locale et journal daté.
