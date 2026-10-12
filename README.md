# MAC — P1A Maps Studio

Éditeur cartographique 2D pour créer une planète fictive réaliste directement dans le navigateur, sans fond terrestre ni génération automatique.

## Démarrage

Ouvrir `index.html` dans Chrome, ou activer GitHub Pages (Settings → Pages → Deploy from a branch → main / root).

## Fonctionnalités V0.1

- Dessin des continents et pays point par point (double-clic ou Entrée pour terminer)
- Dessin des terres à main levée
- Villes, routes, fleuves, voies ferrées, frontières maritimes
- Sélection, déplacement et modification des sommets
- Modes physique et politique, calques activables
- Zoom (molette / boutons) et déplacement (outil Déplacer)
- Annuler et rétablir, raccourci Ctrl+Z
- Sauvegarde locale, import/export JSON, export SVG et PNG

## Limites connues

- V0.1 est un prototype 2D en coordonnées de dessin et non un SIG géoréférencé Mercator.
- Les frontières communes entre pays ne sont pas encore synchronisées automatiquement.
- Le rendu politique utilise une coloration simple; les pays sont tracés indépendamment.
- Le stockage local dépend de l'appareil et du navigateur: exporter des fichiers JSON de sauvegarde régulièrement.

## Données

Aucun serveur, inscription ou dépendance externe. Tout se passe dans le navigateur.
