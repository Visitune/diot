# Audit Insight — votre tableau de bord d'audit à partir d'un Excel

**👉 https://visitune.github.io/diot/**

Glissez votre fichier Excel dans la page : le tableau de bord se construit tout seul. Rien n'est envoyé sur Internet, tout reste dans votre navigateur.

## Le fichier attendu
- **Une ligne par audit.**
- **Une colonne par point contrôlé** (« Sol propre », « Moulin A_Murs »…), avec la réponse dans la cellule : Conforme / Non conforme / À améliorer / N/A, OK / KO / Partiel, Oui / Non, Satisfaisant…
- Facultatif : une colonne date, auditeur, nom de l'audit, une colonne `…_notes` ou « Commentaire » à côté d'un point.

Tout est deviné : ligne d'en-tête, dates, auditeur, sections (le texte avant `_`, ` - ` ou ` > ` dans l'en-tête), réponses. Export SafetyCulture / iAuditor, Excel maison, CSV : ça marche. Si des réponses sont inconnues (par exemple « Acquis / En cours »), l'application vous demande une seule fois ce qu'elles signifient et s'en souvient.
Des fichiers d'essai sont dans le dossier [`exemples/`](exemples/).

## Mode d'emploi
Le guide complet est dans l'application (menu **Guide**) et dans [`MODE-D-EMPLOI.md`](MODE-D-EMPLOI.md).

**À retenir : pour compiler plusieurs audits, les colonnes doivent être les mêmes.** Mêmes colonnes → compilés (quel que soit le nom du fichier). Colonnes différentes → autre type d'audit, gardé à part. Colonnes presque identiques (≥ 80 %) → compilés ; entre 30 et 80 %, l'application affiche les différences et vous laisse choisir.

## SafetyCulture : toutes les checklists
Chaque export SafetyCulture (Excel ou CSV, séparateur `;` ou `,`) est lu tel quel. Si un export mélange **plusieurs types de checklists** (colonnes différentes), l'application les sépare grâce au modèle (`templateID` / `templateName`) : un sélecteur « Modèle » apparaît en haut du tableau de bord, avec ses propres sections et indicateurs. Vous pouvez aussi charger plusieurs fichiers à la suite.

## Votre propre Excel (sans outil d'inspection)
- **Modèle Excel vierge** (menu de gauche) : un fichier prêt à remplir (une ligne par audit, une colonne par point, mode d'emploi inclus). Renommez, ajoutez ou supprimez des points à volonté. Depuis **Paramétrage**, « Modèle de ma checklist » reconstruit un modèle vide à partir d'une checklist déjà chargée.
- **Paramétrage** : dites quels mots signifient Conforme / Non conforme / À améliorer / N/A (OK, KO, Validé…), choisissez la colonne date, auditeur ou nom d'audit, ou le séparateur de sections. Le fichier est relu aussitôt ; le réglage est mémorisé et inclus dans l'application téléchargée.

## Sessions
Menu **Sessions** : enregistrer sous un nom dans le navigateur, télécharger/ouvrir un fichier de session (.json), sauvegarde automatique de la dernière session (désactivable). Une session garde audits, statuts, responsables, photos et mise en page du one-pager.

## La démo
« Voir une démo » charge des données fictives. Pour passer à vos données : déposez votre fichier (la démo disparaît automatiquement) ou cliquez **Effacer la démo** dans le bandeau orange. **Tout effacer** (page Audits) vide l'application à tout moment.

## Ce que vous obtenez
Taux de conformité et tendance, conformité par section, points critiques et récurrents, plan d'actions (statut, responsable, photos), **one-pager** exportable en PDF / JPEG, export CSV, sauvegarde de session.

## À vos couleurs
- Menu **Identité visuelle** : nom, logo, couleur, objectif de conformité.
- Menu **Télécharger l'application** : un fichier HTML autonome, déjà à vos couleurs et à votre logo, qui fonctionne hors ligne. À conserver, à partager, ou à donner à Copilot pour le faire évoluer.

## Avec Copilot
Copilot sert à **modifier** l'application (nouveau graphique, nouvel indicateur…) et à rédiger les rares réglages avancés : voir [`COPILOT.md`](COPILOT.md).

## Pour les développeurs
Un seul fichier, `index.html` (SheetJS et html2canvas embarqués, aucun serveur). Publié par GitHub Pages depuis la branche `main`.
