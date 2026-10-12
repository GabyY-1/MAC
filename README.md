# MAC — P1A Maps Studio

Éditeur 2D de cartes fictives réalistes, sur fond maritime vierge, utilisable sur Chromebook dans Chrome.

## Lancer

Activer **GitHub Pages** dans Settings → Pages → Deploy from a branch → main / root.

## Structure

| Fichier | Fonction |
|---|---|
| `index.html` | Interface et barre d'outils |
| `css/style.css` | Apparence de l'éditeur |
| `js/core.js` | État partagé, outils et fonctions communes |
| `js/render.js` | Dessin vectoriel SVG, calques et propriétés |
| `js/drawing.js` | Création des objets et des tracés |
| `js/interactions.js` | Souris, déplacement, sélection, raccourcis |
| `js/history.js` | Annuler / rétablir |
| `js/navigation.js` | Zoom et déplacement de la carte |
| `js/storage.js` | Sauvegarde, import et exports |

Les scripts sont chargés dans l'ordre par `defer`, sans étape de compilation. Icônes fournies par [Lucide](https://lucide.dev/) via CDN (connexion nécessaire pour leur affichage).

## Dessiner

- **Continent / île** : cliquer pour poser des points, double-cliquer ou appuyer sur Entrée pour fermer.
- **Main levée** : maintenir le clic puis dessiner et relâcher.
- **Pays** : dessiner une zone par points.
- **Route / fleuve** : choisir le type de ligne, tracer les points et terminer.
- **Ville** : cliquer sur la carte pour poser un point.
- **Sélection** : glisser un objet ou un sommet pour le modifier.
- **Zoom** : molette ou boutons +/- ; outil main pour déplacer.
- **Export JSON** pour une sauvegarde portable du projet; import JSON pour reprendre son édition.

## Notes sur la version actuelle

Cette livraison met en place l'ensemble de ces outils **de base**, mais ne constitue pas encore une version finale validée par des tests navigateur automatisés. Elle ne réalise pas de frontières géométriquement partagées, de courbes de Bézier, de géoréférencement Mercator ni de couche bâtiments/quartiers. Le stockage navigateur est local: exporter régulièrement en JSON.

L'outil ne génère pas de continents ou de pays automatiquement. La géographie reste créée par l'utilisateur.
