// const itens = [20, 30, 10]; // 60
// const desconto20real = () => 20; // 40
// const desconto20porcento = (total) => total * 0.2; // 48

// const checkout = (itens, callback) => {
//   let total = 0;
//   for (const item of itens) {
//     total += item
//   }
//   total -= callback(total);
//   return total;

// }

// console.log(`valor total da compra com desconto ${checkout(itens, desconto20real)}`);

// const numbers = [1, 12, 10, 3, 325]
// numbers.sort()
// console.log(numbers);

const userProfile = (fullName, age) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {
    fullName: fullName,
    email: `${email}@betrybe.com`,
    age: `${age} anos.`,
  };
};
// console.log(userProfile('Pedro Henrique'));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra', 30),
    id2: callback('Luiza Drumond', 22),
    id3: callback('Carla Paiva', 10),
  };
  return employees;
};
// console.log(newEmployees(userProfile))

const sorteio = (numberBet) => {
  const numberGenerated = Math.floor(Math.random() * 5 + 1);
  return {
    myNumber: numberBet,
    number: numberGenerated,
    result: numberBet == numberGenerated ? 'Você ganhou' : 'Tente Novamente',
  };
};
// console.log(sorteio(2))

const retornoCheck = (numeroEscolhido, meuNumero) =>
  numeroEscolhido === meuNumero;

const result = (meuNumero, callback) => {
  const numero = Math.floor(Math.random() * 5 + 1);
  return callback(meuNumero, numero)
    ? `Ganhou, numero escolhido ${numero}`
    : `Perdeu, seu número foi ${meuNumero}, o numero escolhido foi ${numero}`;
};

// console.log(result(2, retornoCheck));

const cadUser = (fullName, age) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {
    name: fullName,
    email: `${email}@gmail.com`,
    age: `${age} anos.`,
  };
};

const newUsers = (callback) => {
  let usersNew = {
    id: callback('Ernani Avila', 30),
    id2: callback('Joao Filho', 29),
  };
  return usersNew;
};
// console.log(newUsers(cadUser))
// const people = [
//   {
//     name: 'Ernani Avila',
//     age: 30,
//   },
//   {
//     name: 'Nicholas Eduardo',
//     age: 30,
//   },
//   {
//     name: 'João Mesquita',
//     age: 30,
//   },
//   {
//     name: 'Camila Kita',
//     age: 30,
//   },
//   {
//     name: 'Fernando Santos',
//     age: 30,
//   },
//   {
//     name: 'Rob Amo Akombi',
//     age: 40,
//   },
//   {
//     name: 'Kasa Akite Oku',
//     age: 10,
//   },
//   {
//     name: 'Kuaki Napika',
//     age: 22,
//   },
// ];

const registerEmplooyes = () => {
  people.map((users) => {
    const size = Math.random() * 5 + 1;
    const email = users.name.toLowerCase().split(' ').join('_');
    const newUser = {
      fullName: users.name,
      email: `${email}@betrybe.com`,
      age: `${users.age} anos`,
      dickSize: `${size} cm`,
      da_a_bunda: `${size < 3 ? 'Da a bunda' : 'Não da a Bunda'}`,
    };
    // console.log(newUser);
  });
};
// console.log(registerEmplooyes())

const dirigir = [
  { name: 'paulo', dirige: true },
  { name: 'Henrique', dirige: true },
];

// dirigir.some((d) =>
//   console.log(d.dirige === true ? `${d.name} dirige` : `${d.name} não dirige`)
// );

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const juntar = arrays.reduce((acc, curr) => {
  return acc.concat(curr)
}, [])

console.log(juntar)
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

const book = books.reduce(
  (acc, curr, i, arr) =>
    i === arr.length
      ? `${acc} ${curr.author.name}.`
      : `${acc} ${curr.author.name},`,
  ''
);
// console.log(book);
// console.log([1, 2, 3, 4].reduce((acc, curr, i, arr) => console.log()))

// const book = books.reduce((acc, curr, i, arr) => {
//   return acc + (curr.releaseYear - curr.author.birthYear) / arr.length
// }, 0)
// console.log(Math.floor(book));
// function teste() {
//   const nhe = books.reduce((acc, curr) => {
//     return acc + (curr.releaseYear - curr.author.birthYear)
//   }, 0)
//   return nhe / books.length
// }
// console.log(teste())

// const pick = books.reduce((acc, curr) =>
//   acc > curr ? curr : acc
// ).name
// console.log(pick)

// const names = [
//   'Aanemarie',
//   'Adervandes',
//   'Akifusa',
//   'Abegildo',
//   'Adicellia',
//   'Aladonata',
//   'Abeladerco',
//   'Adieidy',
//   'Alarucha',
// ];

// function containsA() {
//   return names.reduce((acc, curr) =>
//     acc + curr.split('').reduce((accu, curre) => {
//       if (curre === 'a' || curre === 'A') return accu + 1;
//       return accu;
//     }, 0), 0);
// }

// console.log(containsA());
// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage(students, grades) {
//   return students.map((student, i) => ({
//     name: student,
//     average: grades[i].reduce((acc, curr) => {
//       return (acc + curr)
//     }) / grades[i].length
//   }))
// }
// console.log(studentAverage(students, grades))

[
  {
    tech: 'CSS',
    name: 'Lucas',
  },
  {
    tech: 'HTML',
    name: 'Lucas',
  },
  {
    tech: 'JavaScript',
    name: 'Lucas',
  },
  {
    tech: 'Jest',
    name: 'Lucas',
  },
  {
    tech: 'React',
    name: 'Lucas',
  },
];

function teste(...args) {
  [...args].map((x, index) => console.log(x, index));
}

// teste([1, 2, 3], true, false, 'oi')

const people = [
  {
    name: 'Ernani Avila',
    age: 30,
  },
  {
    name: 'Nicholas Eduardo',
    age: 30,
  },
  {
    name: 'João Mesquita',
    age: 30,
  },
  {
    name: 'Camila Kita',
    age: 30,
  },
  {
    name: 'Fernando Santos',
    age: 30,
  },
  {
    name: 'Rob Amo Akombi',
    age: 40,
  },
  {
    name: 'Kasa Akite Oku',
    age: 10,
  },
];

// function arrayIsa() {
//   const array = []
//   people.forEach((currentValue, index, arr) => {
//     const obj = {
//       id: index + 1,
//       name: currentValue.name,
//       age: currentValue.age,
//       email: `${currentValue.name
//         .split(' ')
//         .join('_')
//         .toLowerCase()}@gmail.com`,
//     };
//     array.push(obj);
//   });
//   return array

// }
// console.log(arrayIsa())

// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
//   console.log(rectangle[0] * rectangle[1]);
// });
// //

console.log(typeof {}, typeof []);


