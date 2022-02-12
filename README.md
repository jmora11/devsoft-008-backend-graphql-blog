API de GraphQL usando Javascript y Nodejs en el servidor y Mongodb como base de datos NoSQL. La API es la de un Blog básico que cuenta con usuarios que se puedan registrar, crear Posts, y comentar, adicionalmente probaremos cuando un usuario este autenticado a traves de JSON Web Tokens (JWT).

________________________________________________________
Crear usuario:

mutation {
 	register(
    username: "Mario",
    email:"mario11@gmail.com",
    password: "1234",
    displayName: "Hankwek")
}

________________________________________________________