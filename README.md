# Teste Hoobox - Backend 

## Instrução para rodar
O projeito foi construído utilizando o docker como ambiente, para subir a API e o banco basta utilizar o comando no diretório raiz do projeto:

```
docker-compose up
```

E então a API será iniciada na porta 3000.

## Criando Entidades no banco
Criando um novo usuário. 

Endpoint: /users

```
{
	"name":"Lucas",
	"email":"lucas1@email.com",
	"cpf":"113.323.931-33"
}
```

Criando entidade de Order (compra).

Endpoint: /orders

```
{
    "user": {userId: number}
}
```

Criando uma categoria de produtos.

Endpoint: /items/category

```
{
	"description": "Celulares"
}
```

Vinculando um item (produto) a uma categoria.

Endpoint: /items

```
{
	"name":"Iphone 14",
	"price": 3000,
	"description": "Smarthphone",
	"category": {categoryId: number}
}
```

Adicionando items (produtos) a uma order (compra).

Endpoint: orders/order_item

```
{
	"order": {orderId: number},
	"amount": 2,
	"item": {itemId: number}
}
```

Removendo items (produtos) de uma order (compra).

Endpoint: orders/orders/order_item?id=2

Onde o id passado é o da entidade order_item, tabela intermediária 
que vincula um produto a uma compra.
