const assert = require('assert');

// 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

for (rectangle of rectangles) {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]);
}

// 2
const sum = (...values) => values.reduce((previousValue, current) => (previousValue += current), 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

// 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = (person) => {
  const { name, age, likes } = person;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
};

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(
  personLikes(gunnar),
  'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
);

// 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
function filterPeople(people) {
  return people.filter((person) => {
    const { nationality, bornIn } = person;
    return nationality === 'Australian' && bornIn <= 1999;
  });
}

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], {
  name: 'Nicole',
  bornIn: 1992,
  nationality: 'Australian',
});
assert.deepStrictEqual(filteredPeople[1], {
  name: 'Toby',
  bornIn: 1901,
  nationality: 'Australian',
});

// 5
const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (swapping) => (swapping = [3, 2, 1]);
const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

// 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (cars) => {
  const [name, brand, year] = cars;
  return { name, brand, year };
};

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });

// 7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = (ship) => {
  const { name, length, measurementUnit = 'meters' } = ship;
  return `${name} is ${length} ${measurementUnit} long`;
};

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');

// 8
// escreva greet abaixo
const greet = (name, greetings = 'Hi') => `${greetings} ${name}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
