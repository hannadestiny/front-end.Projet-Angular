# Projet Final d'Angular

## Par Rania BORDJIBA et Destiny HANNA

Ce README contiendra une présentation du fonctionnement du projet et de ses fonctionnalités, ainsi qu'une courte vidéo à la fin pour illustrer ces détails de manière approfondie.

### 1. Lancement du projet
Une fois le code téléchargé, procédez à l'ouverture de deux terminaux pour démarrer le projet :

Après avoir téléchargé le code, il est nécessaire d'ouvrir deux terminaux pour mettre en marche le projet :

1. Ouvrez un premier terminal intégré au dossier `front-end`. Exécutez d'abord la commande `npm install` pour télécharger toutes les dépendances requises.
2. Dans le même terminal, lancez ensuite la commande `ng serve`. Cela démarrera le front-end du projet.
3. Puis, ouvrez un second terminal intégré au dossier `api`. Exécutez la commande `npm run start` pour établir la connexion avec le back-end du projet, en particulier avec la base de données MongoDB.
4. Une fois les deux terminaux opérationnels, accédez à l'adresse `http://localhost:4200` dans votre navigateur pour visualiser le projet.
<br>

### 2. Vision visiteur

Au premier coup d'œil, vous observerez un tableau de devoirs accompagné d'une barre d'outils (toolbar) offrant les options suivantes : menu, home et sign in. Lorsque vous cliquez sur 'menu', un volet latéral (sidenav) s'ouvre, révélant différents boutons : liste des devoirs, ajouter un devoir, noter/restituer un devoir, supprimer un devoir, et générer un devoir. Vous remarquerez que seul le premier bouton est actif, tandis que les autres restent inaccessibles et apparaissent en grisé.

<br>
<img width="1680" alt="0" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/33ebfb4e-0837-46ea-8112-f58963cbe8ac">
<br>

En tant que visiteur du site sans droits d'accès particuliers, les options sont limitées, mais vous pouvez néanmoins visualiser tous les éléments du tableau. Vous avez la possibilité d'appliquer des filtres selon différents critères, tels que le nom du devoir, le statut du devoir (rendu ou non rendu), ou encore la matière. Ces filtres peuvent être utilisés individuellement ou de manière combinée.
<br>

<img width="1680" alt="2" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/d3ed5c83-d95b-4045-9cf2-bc1c5b95285b">
<br>

Aussi, vous pouvez organiser les devoirs selon l'ordre croissant ou décroissant en fonction de la date de rendu ou de l'ID, simplement en cliquant sur les en-têtes 'Date du rendu' ou 'ID' dans le tableau.

De plus, en tant que visiteur, vous avez la possibilité de consulter les détails d'un devoir spécifique en cliquant sur celui-ci dans le tableau. Suite à votre sélection, une nouvelle fenêtre s'ouvrira,affichant toutes les informations pertinentes du devoir sélectionné, y compris: le titre du devoir, son état actuel (complété ou en attente), la date limite de soumission. Si le devoir est déjà soumis et évalué, la note obtenue est affichée, ainsi que tout commentaire associé. Enfin, le nom du cours correspondant est indiqué, accompagné d'une image spécifique et distincte pour chaque matière, en plus du nom de l'enseignant responsable du cours, avec sa photo respective.
On peut voir que les bouttons modifier et supprimer sont grisés.
<br>

<img width="1680" alt="3" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/08c9a9d2-1989-4a9f-8e07-c035ee82f374">
<br>

### 3. La connection


Pour accéder à davantage de fonctionnalités, il est nécessaire de se connecter. Vous pouvez initier ce processus en cliquant sur le bouton de connexion (login). Suite à cela, un formulaire de connexion apparaîtra, vous permettant de saisir vos identifiants.
<br>

<img width="1680" alt="1" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/201e79f4-a0e4-475c-8b4a-babd9bdf16de">
<br>

Pour la connexion, le système propose deux rôles distincts, chacun offrant des niveaux d'accès spécifiques : administrateur (admin) et utilisateur (user). Pour expérimenter avec les différentes fonctionnalités, voici les identifiants pour chaque rôle :

Utilisateurs existants :
- Nom d'utilisateur : 'user', Mot de passe : 'user'
- Nom d'utilisateur : 'Geraldine', Mot de passe : 'abc'

Administrateurs existants :
- Nom d'utilisateur : 'admin', Mot de passe : 'admin'
- Nom d'utilisateur : 'David', Mot de passe : '123'

Peu importe le rôle avec lequel vous vous connectez, un message contextuel (snackbar) s'affichera pour confirmer le rôle de la personne connectée (admin ou user). Si les identifiants sont incorrects, le message indiquera une erreur de connexion et encouragera à vérifier les identifiants saisis.

<br>
<img width="973" alt="5" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/88874f4b-bb75-4884-9774-3e41e5518ef2">
<br>

Après une connexion réussie, le bouton "Login" situé dans la barre d'outils se transforme automatiquement en "Logout". Ce bouton reste ainsi tant que l'utilisateur est connecté. Pour se déconnecter, il suffit de cliquer sur ce bouton "Logout". Un message apparaît alors pour confirmer la déconnexion, et le bouton reprend sa fonction initiale de "Login".

### 4. Vision user

Une fois connecté en tant qu'utilisateur standard, les fonctionnalités de base restent accessibles. En plus, deux nouvelles options sont disponibles: un formulaire pour ajouter un devoir, accessible depuis la barre latérale, et un formulaire pour modifier un devoir, accessible depuis la page de détails du devoir concerné.
<br>
<img width="1680" alt="6" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/6833593f-5940-4f05-91de-63ab259d621b">
<br>

#### 4.1. Le formulaire d'ajout user

Ce formulaire se présente sous la forme d'un processus par étapes, certaines étant obligatoires et d'autres optionnelles. Il est impératif de renseigner le nom du devoir, de choisir une matière parmi celles proposées (chaque matière étant associée à son enseignant respectif), de fixer la date de rendu et d'indiquer le nom de l'auteur. L'utilisateur a également la possibilité d'ajouter un commentaire s'il le souhaite. Si tous les champs requis ne sont pas correctement remplis, il ne sera pas possible d'ajouter le devoir et une alerte apparaîtra pour signaler la nécessité de compléter les champs manquants. Il est important de noter qu'un utilisateur ne peut pas définir le statut du devoir ; ainsi, tout devoir ajouté sera automatiquement considéré comme non rendu.

<br>
<img width="1680" alt="7" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/ce161ad5-cd23-44f1-a5b0-cff38948ab70">
<br>

Une fois l'ajout validé, le devoir est directement ajouté à la fin de la liste des devoir, et un snackbar apparaît pour valider que le devoir a été ajouté.

#### 4.2. Le formulaire de modification user

Ce formulaire, également structuré en étapes, affiche par défaut les informations actuelles du devoir sélectionné pour chaque champ accessible à un utilisateur normal. Pour modifier un devoir, il est nécessaire d'apporter des changements à au moins un des champs ; sans modification, le devoir ne pourra pas être mis à jour. Après avoir effectué et enregistré les modifications, un message apparaîtra pour confirmer que les détails du devoir ont été mis à jour. Ensuite, l'utilisateur est automatiquement redirigé vers la page du devoir récemment modifié, où les changements apportés sont immédiatement visibles.

<br>
<img width="1680" alt="8" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/c96a7a89-dea9-46e6-b76a-f84405ddef79">
<br>

### 5. Vision admin

Une fois connecté en tant qu'administrateur, on dispose d'un accès complet à toutes les fonctionnalités disponibles sur le site.
<br>
<img width="1680" alt="9" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/8d43ccb4-4a81-44eb-9470-dee03a3245b0">
<br>

#### 5.1. Le formulaire d'ajout admin

En complément des champs accessibles aux utilisateurs standards, un administrateur a la capacité de déterminer le statut d'un devoir. Si un devoir est marqué comme rendu, l'administrateur a l'option de l'évaluer, attribuant une note entre 0 et 20. Suite à cela, le devoir est considéré comme rendu et noté. L'administrateur a également la possibilité de ne pas attribuer de note, auquel cas le devoir est marqué comme rendu mais reste non noté. Si l'option de rendu n'est pas activée, alors le devoir est considéré comme non rendu et, de fait, non noté.

<br>
<img width="1680" alt="10" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/ce93cdd7-053b-4b9a-a9f2-54450082deea">
<br>

#### 5.2. Le formulaire de modification admin

Similairement au formulaire utilisateur, celui de l'administrateur présente les mêmes caractéristiques de base, avec des fonctionnalités supplémentaires. Si un devoir a déjà été noté, l'administrateur a la possibilité de modifier cette note. De plus, si un devoir est marqué comme rendu mais n'a pas encore été noté, l'administrateur peut lui attribuer une note. Enfin, si un devoir n'est pas encore rendu, l'administrateur a l'option de changer son statut en rendu et, s'il le souhaite, de procéder à son évaluation.

#### 5.3. Button Noter/Rendre un devoir

Ce bouton, accessible depuis la barre latérale, nous redirige vers une page qui affiche une liste de tous les devoirs soit non rendus, soit rendus mais non notés. Cette interface permet de sélectionner et de noter un devoir de manière directe et efficace. En cliquant sur un devoir dans le tableau, une fenêtre apparaît, offrant un espace pour saisir une note entre 0 et 20. Une fois la note entrée dans cet intervalle, il suffit de cliquer sur le bouton de notation pour que la note soit attribuée au devoir choisi. Si le devoir sélectionné était initialement marqué comme non rendu, la saisie d'une note entraîne automatiquement un changement de statut ; le devoir est alors considéré comme rendu et noté.

Un snackbar validera la modification effectuée.

<br>
<img width="1680" alt="11" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/bdb08d82-1aca-4bc1-86ee-3e7e6ca75516">
<br>

#### 5.4. Suppression d'un devoir

Cette fonctionnalité permet à un administrateur de supprimer un devoir par deux méthodes distinctes : soit directement depuis la page de détails du devoir, où un bouton de suppression est présent, soit via une option de suppression de devoir accessible depuis la barre latérale. Les deux méthodes conduisent au même résultat.

En utilisant la première méthode, l'administrateur sait d'emblée quel devoir il souhaite supprimer. Avec la seconde méthode, un tableau listant tous les devoirs s'affiche, et l'administrateur n'a qu'à sélectionner le devoir à supprimer.

Dans les deux cas, après avoir sélectionné le devoir à supprimer, une fenêtre de confirmation apparaît, demandant à l'administrateur s'il souhaite réellement procéder à la suppression du devoir choisi.
<br>

<img width="1680" alt="12" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/c4c07dcb-fe93-41f7-9d81-b0c91e20370f">
<br>

En cliquant sur "Supprimer", le devoir est immédiatement retiré de la liste des devoirs, et un message de confirmation s'affiche pour indiquer que le devoir sélectionné a été supprimé avec succès. Si vous utilisez la première méthode (suppression depuis la page de détails du devoir), vous serez redirigé vers la liste complète des devoirs après la suppression. Cependant, si vous utilisez la seconde méthode (suppression via la liste des devoirs), vous resterez sur la page de suppression des devoirs. Cette dernière option est particulièrement utile si vous avez besoin de supprimer plusieurs devoirs consécutivement, car elle évite de revenir à chaque fois aux détails du devoir, permettant ainsi de gagner du temps.

#### 5.5. Générer des devoirs aléatoire

La dernière fonctionnalité est la génération automatique de devoirs. En cliquant sur le bouton situé dans la barre latérale, vous accédez à un formulaire vous permettant de spécifier le nombre de devoirs que vous souhaitez générer automatiquement.

<br>
<img width="1680" alt="13" src="https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/9ca9bfb8-29dc-4169-bcfd-4711e65820a7">
<br>

Après avoir saisi le nombre souhaité de devoirs à générer, il suffit de cliquer sur le bouton "Générer". Immédiatement après, le système ajoutera le nombre demandé de devoirs à la fin de la liste existante. Une fois la génération terminée, vous serez redirigé vers la liste complète des devoirs, où un message de confirmation s'affichera pour valider l'ajout des nouveaux devoirs.

### 6. Video qui montre toutes les fonctionnalités présentées 



https://github.com/hannadestiny/BORDJIBA-HANNA-Projet-Angular/assets/147160467/4cdd84dc-2dfb-44c9-b339-4cdb7dafce9d


