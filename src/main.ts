import $ from 'jquery'
import Livro from './modelo/livro'

const livro = new Livro('The Hobbit', 350, 0.10)
// console.log(livro.precoComDesconto())
$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2> Preco:${livro.precoComDesconto()}</h2>`)