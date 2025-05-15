# Explique com suas palavras o funcionamento do models, controller e fale sobre endpoints no projeto.

   Basicamente, os models são a estrutura que armazena os dados de uma aplicação, no caso desta atividade, os alunos, cursos e professores. Além disso, ele é responsável por armazenar os códigos que realizam o CRUD da implantação, permitindo que os dados sejam alterados pelo usuário do sistema.

   Os controllers atuam como mensageiros, eles interpretam as informações dos models e fazem sua integração com os views da aplicação, processando requisições e retornando respostas. No caso desta aplicação, ele lê os models, interpreta o que, como e onde deve ser feito, recebe alterações no view, permite ou nega ela e retorna o resultado para os models, alterando o banco de dados e tornando as alterações visíveis para o usuário.

   Já os endpoints são basicamnete as rotas da aplicação expostas para o usuário. Nesse caso, eles recebem as alterações feitas pelo usuário, mandam para o controller que retorna uma respota, após isso, ele exibe as alterações feitas. 
