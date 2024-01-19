/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
let personType: [string, number];
personType = ["Max", 21];

//  кортеж змінної довжини
let tuple: [string, ...number[]];
tuple = ["hello", 42, 100, 200];

export {};
