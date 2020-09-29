const newArray = ["Android", "iOS", "Architecture", "Teach", "Run"];
const array = newArray.sort();

function welcomeStr(string) {
    const phraseOne = string => `Tryber ${string} aqui!`

    let result = `${phraseOne(string)};

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `

    return result;
}

console.log(welcomeStr("Lucas"));