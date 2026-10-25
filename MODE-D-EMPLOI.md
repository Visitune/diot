# Mode d'emploi — Audit Insight

Application : **https://visitune.github.io/diot/** (le même texte est dans l'application, menu **Guide**).

## En 30 secondes
Vous avez un fichier Excel (ou CSV) où **chaque ligne est un audit** et **chaque colonne est un point contrôlé**, avec une réponse du type Conforme / Non conforme. Vous le glissez dans l'application : elle reconnaît les colonnes, calcule les taux de conformité, repère les points qui reviennent, et prépare un plan d'actions et une synthèse imprimable. Tout reste dans votre navigateur.

## 1. Préparer votre fichier
- **Export SafetyCulture / iAuditor** (Excel ou CSV) : utilisez-le tel quel, sans rien modifier.
- **Votre propre Excel** : une ligne par audit ; une colonne par point contrôlé ; dans chaque case, une réponse (Conforme, Non conforme, À améliorer, N/A, OK, KO, Oui, Non, Partiel…).
- **Pas encore d'outil d'inspection ?** Le **Modèle Excel vierge** (menu de gauche, ou page d'accueil) est prêt à remplir, avec son mode d'emploi. « Paramétrage → Modèle de ma checklist » refait un modèle vide à partir d'une checklist déjà chargée.
- Colonnes facultatives mais utiles : **Date** (JJ/MM/AAAA, pour les courbes), **Auditeur**, **Nom de l'audit**. Pour un commentaire sur un point, ajoutez une colonne `…_notes` ou « Commentaire » juste après.
- Pour regrouper les points par section, écrivez les en-têtes sous la forme **Section_Point** (par exemple `Cuisine_Sol propre`).

## 2. Charger le fichier
Glissez-le n'importe où dans la page, ou cliquez **Ajouter des fichiers**. Vous pouvez en charger plusieurs. Si des réponses ne sont pas reconnues (par exemple « Acquis / En cours »), l'application vous demande une seule fois ce qu'elles signifient, puis s'en souvient. La démo disparaît dès que vous chargez votre fichier.

## 3. Mêmes colonnes = comparables
**Pour compiler plusieurs audits, les colonnes doivent être les mêmes.** On ne peut comparer que ce qui est comparable.
- **Mêmes colonnes** (même modèle SafetyCulture, ou même Excel mois après mois) : les audits sont compilés → tendances, récurrences, comparaison. Peu importe le nom du fichier.
- **Colonnes différentes** (autre checklist) : c'est un autre **type d'audit**. Il est gardé à part ; le sélecteur « Type d'audit » en haut du tableau de bord permet de passer de l'un à l'autre.
- **Colonnes presque identiques** (une colonne renommée) : à partir de **80 %** de colonnes communes, les audits sont compilés. Entre 30 % et 80 %, l'application affiche les colonnes qui diffèrent et vous laisse choisir **Comparer quand même** ou **Garder séparés**.

## 4. Lire les écrans
- **Tableau de bord** : taux de conformité, évolution, conformité par section, points critiques. Cliquez une section ou un audit pour filtrer.
- **Audits** : la liste de vos audits (avec leur type) ; cliquez pour le détail point par point ; la corbeille retire un audit ; **Tout effacer** vide l'application.
- **Non-conformités** : le plan d'actions. Cliquez le statut pour passer Ouvert → En cours → Clos ; ouvrez une ligne pour ajouter responsable, action, photos. L'étoile épingle le point au one-pager.
- **One-pager** : une page de synthèse à votre image (logo, couleurs), exportable en PDF ou JPEG, ou imprimable. Cliquez le « message clé » pour le réécrire.

## 5. Paramétrer
- **Paramétrage** : indiquez les mots de vos réponses (par exemple « Validé » = Conforme), choisissez la colonne date / auditeur / nom d'audit si elle n'est pas trouvée, ou le séparateur de sections (`_`, `-`, `>`, `/` ou aucun). Le fichier est relu aussitôt. Le réglage est mémorisé.
- **Identité visuelle** : nom, logo, couleur et objectif de conformité (la ligne verte des graphiques).

## 6. Sauvegarder son travail (menu Sessions)
- **Dans ce navigateur** : enregistrez sous un nom (« Suivi 2026 »), rouvrez ou supprimez.
- **Dans un fichier** : téléchargez un fichier de session `.json` à ranger ou à partager ; rouvrez-le plus tard, sur n'importe quel ordinateur.
- **Sauvegarde automatique** : votre dernière session est reprise à la prochaine ouverture (bandeau « Session précédente trouvée »). Décochez-la et supprimez la sauvegarde sur un ordinateur partagé.
- Une session contient : audits chargés, statuts, responsables, actions, photos, étoiles, mise en page du one-pager. Vos fichiers Excel ne sont jamais modifiés.

## 7. Exporter et partager
- **One-pager** : PDF, JPEG ou impression. **Plan d'actions** : export CSV.
- **Télécharger l'application** : un seul fichier HTML, à vos couleurs, qui fonctionne sans internet. À donner à un collègue ou à Copilot pour l'adapter (voir `COPILOT.md`).

## Questions fréquentes
- **Où vont mes données ?** Nulle part : tout se passe dans votre navigateur.
- **Comment effacer la démo ?** Chargez votre fichier, ou cliquez « Effacer la démo » dans le bandeau orange.
- **Mon fichier contient deux types d'audit.** Chacun est reconnu à part grâce à ses colonnes (et au nom du modèle pour SafetyCulture) ; choisissez le « Type d'audit » en haut du tableau de bord.
- **Je charge le fichier du mois suivant.** Si les colonnes sont les mêmes, les nouveaux audits s'ajoutent. Les audits déjà chargés sont ignorés (pas de doublons). Gardez le même nom de fichier : sans identifiant d'audit, nom de fichier + numéro de ligne servent d'identifiant.
- **J'ai corrigé une ligne dans Excel.** Retirez l'audit concerné (corbeille dans « Audits »), puis rechargez le fichier.
- **Les courbes sont plates ou les dates absentes.** Il faut une colonne date ; sinon choisissez-la dans Paramétrage.
- **Une réponse est mal classée.** Paramétrage → « Vos réponses ».
- **Comment le taux est-il calculé ?** Conformes ÷ (conformes + non conformes + à améliorer). Les « N/A » et « non audité » ne comptent pas.
