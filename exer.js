const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//exer1
// console.log(books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`))
//
// const exer2 = () => {
//   return books.map((person) => {
//     return {
//       age: person.releaseYear - person.author.birthYear,
//       autor: person.author.name,
//     };
//   }).sort((a, b) => a.age - b.age)
// }
// console.log(exer2());
//
// const exer3 = () => {
//   return books.filter(book => {
//     return book.genre === "Fantasia" || book.genre === "Ficção Científica"
//   })
// }
// console.log(exer3())
//
// const exer4 = () => {
//   return books.filter((book) => 2022 - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);
// }
// console.log(exer4())
//
// const exer5 = books.filter(book => book.genre === "Fantasia" || book.genre === "Ficção Científica").map(x => x.author.name).sort()
// console.log(exer5)
//
// const exer6 = books.filter(book => 2022 - book.releaseYear > 60).map(x => x.name)
// console.log(exer6)



const teste2 = books.find((book) => (
  book.author.name.split(' ')
    .filter((word) => word.endsWith('.')).length === 3
)).name;
console.log(teste2)
