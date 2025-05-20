# 1.
O model guarda os códigos responsáveis pelo CRUD da aplicação, permitindo sua alteração. Com isso, o view possibilita a visualização das informações criadas e armazenadas pelo model e possibilita a interação com o usuário. Já o controller funciona como uma ponte que liga o view e o model, basicamente ele recebe do view as alterações feitas, interpreta as informações, envia para o model, que manda de volta uma resposta, então ele pega essa resposta e manda de volta para o view. Assim, as alterações feitas no localhost realmente interferem na aplicação.

# 2.
Para enviar dados, o JSON pega as informações, que estão em formato de objetos, e altera seu formato. Após isso, esses dados no novo formato são enviados para seu destino e, se houver uma resposta, o JSON faz o processo inverso, ou seja, traduz essas informações e a transformam em objetos novamente.
Uma rota que responde em JSON é a rota:
   ```
   router.get('/', controller.index);
   ```
   Essa rota recebe as informações do controller em formato JSON e transforma elas no formato de objeto, permitindo uma visualização mais clara delas.

# 3.
A utilização do HTML é essencial para um projeto back-end, pois na maioria das vezes esses projetos envolvem uma grande quantidade de dados e tabelas e processos muito complexos. Por conta disso, se torna muito difícil verificar todas as alterações e concultar o estado do banco de dados. Assim, a página em HTML torna a visualização dessas informações mais fácil e dinâmica, permitindo uma consulta e/ou alteração mais eficaz. 