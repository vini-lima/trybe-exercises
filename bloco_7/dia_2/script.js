const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (object, key, value) => object[key] = value;

addShift(lesson2, 'turno', 'manhã');

const listObjectKeys = object => Object.keys(object);

listObjectKeys(lesson1);

const sizeObject = object => Object.keys(object).length;

sizeObject(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const numberStudents = object => {
  let students = 0;
  const array = Object.keys(object);
  for (i in array) {
    students += object[array[i]].numeroEstudantes;
  }
  return students;
}

const getValueKey = (object, pos) => Object.values(object)[pos];

const verifyPair = (object, key, value) => {
  const array = Object.keys(object);
  for (index = 0; index < array.length; index += 1) {  
    if (Object.keys(object)[index] == key && Object.values(object)[index] == value) {
      return true;
    }
  }
  return false;
}

// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (let i in arr) {
//     if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
//   }
//   return isEqual;
// };
// console.log(verifyPair(lesson2,'professor','Carlos'));

// objeto que representa o relatório do professor ou professora, 
// as aulas que ele ou ela ministrou e o número total de estudantes

// console.log(verifyPair(lesson3, 'turno', 'manhã'));

// const getInfo = (obj, name) => {
//   const allLessons = [];
//   let allStudent = 0;
//   const array = Object.values(obj);
//   for (i in array) {
//     if (array[i].professor === name) {
//       allLessons.push(array[i].materia)
//       allStudent += array[i].numeroAlunos;
//     }
//   }
//   return { lessons: allLessons, estudantes: allStudent };
// }

// const createReport = (allLessons, name) => {
//   const report = {};
//   report.professor = name;
//   Object.assign(report, getInfo(allLessons, name));
//   return report;
// }
// console.log(createReport(allLessons, 'Maria Clara'));