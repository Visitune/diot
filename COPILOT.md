# Instructions pour Copilot (modifier l'application Audit Insight)

L'utilisateur t'a donné le fichier HTML de l'application (téléchargé avec « Télécharger l'application »). C'est **un seul fichier**, déjà complet : tu ne le réécris jamais en entier.

## Ce qui est déjà géré (ne le recode pas)
Lecture de n'importe quel Excel/CSV « une ligne par audit, une colonne par point contrôlé » : détection de l'en-tête, des dates, de l'auditeur, des sections, des réponses ; tableau de bord, plan d'actions, one-pager, exports, logo et couleurs.

## Règles
1. Une seule modification par message. Tu attends « ça marche » avant la suivante.
2. Tu ne renvoies JAMAIS tout le fichier : seulement la fonction modifiée ou ajoutée, avec son nom exact et l'endroit où la coller (« remplace la fonction X » ou « ajoute après la fonction X »).
3. JavaScript simple : pas de framework, pas de CDN, pas d'import, aucune donnée en dur. Les graphiques sont des fonctions `f(données) → texte SVG`.
4. Avant de coder, reformule en 3 lignes ce que tu vas faire et ce que tu ne touches pas. Après le code, donne un test en 3 étapes à faire dans le navigateur.
5. En cas d'erreur, l'utilisateur colle le message de la console (F12) : tu ne corriges que la fonction concernée.
6. Ne touche jamais aux deux premiers blocs `<script>` (bibliothèques SheetJS et html2canvas).

## Où est quoi (dans le dernier `<script>`)
| Besoin | Fonction / bloc |
|---|---|
| Réglages (marque, réponses, format) | `CONFIG`, `cfgModal`, `cfgParse` |
| Mots reconnus comme Conforme / NC / À améliorer / N/A | `BUILTIN`, `statusOf` |
| Lecture d'un fichier « une ligne par audit » | `parseAuto`, `splitHeaders` |
| Fichier « une ligne par réponse » | `autoLong`, `parseLong` |
| Calculs (taux, sections, récurrence) | `analyse`, `ctx` |
| Tableau de bord | `views.dash` |
| Liste des non-conformités / plan d'actions | `views.nc`, `nclist`, `detail` |
| One-pager | `sheetHTML`, `views.op` |
| Graphiques | `gaugeSvg`, `trendSvg`, `secBars` |
| Exports | `doExport`, `csvExport`, `jpegToPdf` |

Données disponibles : `S.audits` (un objet par audit : `name`, `date`, `auditor`, `rate`, `c` = compteurs `C/NC/OBS/NA`, `items`). Chaque item : `{k, sec, q, st, note, val}` avec `st` ∈ `C | NC | OBS | NA | INFO`.

## Si un fichier n'est pas reconnu automatiquement
Dans l'application : **Réglages avancés** → coller un bloc `const CONFIG`. Format exact (aucune autre clé n'existe) :

```js
const CONFIG={
 brand:{name:'Mon entreprise',logo:'',accent:'#0f766e',site:'',target:85},
 statutsExtra:{C:[],NC:[],OBS:[],NA:[]},
 long:null
};
```
- `statutsExtra` : réponses propres au client, en minuscules sans accents, rangées dans `C` (conforme), `NC` (non conforme), `OBS` (à améliorer), `NA` (non applicable).
- `long` : seulement pour un fichier « une ligne par réponse » : `{audit:'N° audit',date:'Date',auditeur:'Contrôleur',section:'Zone',question:'Point de contrôle',statut:'Résultat',note:'Remarque'}` avec les noms EXACTS des colonnes (`question` et `statut` obligatoires). Sinon `null`.
- Réponds par UN SEUL bloc de code, sans commentaire dedans. Ne produis jamais d'autre clé.
