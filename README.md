Pour récupérer les dépendances faites `yarn` dans le projet

Les routes suivantes devraient être créées dans le serveur pour récupérer les données :

```
/todos -> pour l'affichage des tâches présentes dans la DB
/create -> pour créer un nouveau todo
/delete/:task -> pour supprimer un todo (en fonction de son contenu task)
/complete/:task -> pour marquer un todo comme complété (en fonction de son contenu)
```
