# Audit Insight — votre tableau de bord d'audit à partir d'un Excel

**👉 https://visitune.github.io/diot/**

Glissez votre fichier Excel dans la page : le tableau de bord se construit tout seul. Rien n'est envoyé sur Internet, tout reste dans votre navigateur.

## Le fichier attendu
- **Une ligne par audit.**
- **Une colonne par point contrôlé** (« Sol propre », « Moulin A_Murs »…), avec la réponse dans la cellule : Conforme / Non conforme / À améliorer / N/A, OK / KO / Partiel, Oui / Non, Satisfaisant…
- Facultatif : une colonne date, auditeur, nom de l'audit, une colonne `…_notes` ou « Commentaire » à côté d'un point.

Tout est deviné : ligne d'en-tête, dates, auditeur, sections (le texte avant `_`, ` - ` ou ` > ` dans l'en-tête), réponses. Export SafetyCulture / iAuditor, Excel maison, CSV : ça marche. Si des réponses sont inconnues (par exemple « Acquis / En cours »), l'application vous demande une seule fois ce qu'elles signifient et s'en souvient.
Des fichiers d'essai sont dans le dossier [`exemples/`](exemples/).

## Ce que vous obtenez
Taux de conformité et tendance, conformité par section, points critiques et récurrents, plan d'actions (statut, responsable, photos), **one-pager** exportable en PDF / JPEG, export CSV, sauvegarde de session.

## À vos couleurs
- Menu **Identité visuelle** : nom, logo, couleur, objectif de conformité.
- Menu **Télécharger l'application** : un fichier HTML autonome, déjà à vos couleurs et à votre logo, qui fonctionne hors ligne. À conserver, à partager, ou à donner à Copilot pour le faire évoluer.

## Avec Copilot
Copilot sert à **modifier** l'application (nouveau graphique, nouvel indicateur…) et à rédiger les rares réglages avancés : voir [`COPILOT.md`](COPILOT.md).

## Pour les développeurs
Un seul fichier, `index.html` (SheetJS et html2canvas embarqués, aucun serveur). Publié par GitHub Pages depuis la branche `main`.
