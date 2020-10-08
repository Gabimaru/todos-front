Dans le serveur, créer une route qui affiche les todos :
(elle sera récupérée ici et les todos de la database devraient s'afficher sur le rendu)

```
// Show todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todos.findAll({ attributes: ['task'] })
    res.json({ code: 200, data: todos })
  } catch (e) {
    res.status(500).json({ code: 500, data: 'Pierre test erreur' })
  }
})
```

La récupération des todos se passe ligne 30 dans Todos.js
