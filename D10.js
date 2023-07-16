/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const numbers = (num1, num2) => {
  const nums = num1 + num2;
  return nums;
};

//console.log(numbers(10, 20));

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);
//console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Godwin",
  surname: "Ezukuse",
  age: 30,
};

//console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

const removingAge = { ...me };
delete removingAge.age;
//console.log(removingAge);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

//object defined above(34)

me.skills = ["Public speaking", "Communication", "Vintage-realist photographer", "Wev-Development", "etc"];
//console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

const meModified = me;
meModified.skills.push("empathy");

//console.log(meModified.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

meModified.skills.pop("empathy");
//console.log(meModified);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
  let random = Math.floor(Math.random() * 7) + 1;
  return random;
};

//console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

//console.log(whoIsBigger(25, 50));
//console.log(whoIsBigger(2, 27));
//console.log(whoIsBigger(50, 56));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"] 
*/

const splitMe = (str) => {
  let singleWords = str.split(" ");
  return singleWords;
};

//console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str1, str2) => {
  let strToModify = str1;
  let stringToModify2 = str2;

  if (strToModify === true) {
    return stringToModify2.split("Talk");
  } else {
    return stringToModify2.split("NBA");
  }
};

//console.log(deleteOne(true, "Talk NBA"));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche. 
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str1) => {
  let eliminateNums = str1.split(/[0-9]/).join("");
  let result = eliminateNums;
  return result;
};

//console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str1) => {
  let copyOfStr = str1;
  if (copyOfStr.includes("@") && copyOfStr.includes(".")) {
    return true;
  } else {
    return "invalid E-mail";
  }
};

//console.log(isThisAnEmail("kadezomail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

//not functioning, to be written properly
const whatDayIsIt = (day6) => {
  let today = day6;
  let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for (let i = 0; i < daysOfTheWeek.length; i++) {
    let day = daysOfTheWeek;

    if (day[i] !== today) {
      return day[i];
    } else {
      return "It is a sunny day regardless";
    }
  }
};

//console.log("thursday");

//still figuring this out
/*   ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  } */

/*let obj = {
  sum: 0,
  value: [],
};

for (let i = 1; i < 4; i++) {
  let objToFill = obj;
  objToFill["sum"] = i; //this will be * 3
  console.log(objToFill);
}

 //console.log(obj);
const rollTheDices = (num) => {
  //the sum value in the object will be the total of dice function called 3 times and each result will be saved in an array
  //the dice function will be posted into an array the amount of times called
}; */

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (num) => {
  let daysInAMonth = num;
  let daysInAWeek = 7;

  if (daysInAMonth) {
    return daysInAMonth - daysInAWeek + "" + " days since you last met";
  } else {
    return "confirm days";
  }
};

//console.log(howManyDays(31));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  let daysInAMonth = Math.floor(Math.random() * 32) + 1;

  if (daysInAMonth !== 12) {
    return "Today" + " " + daysInAMonth + " " + " is" + " " + false;
  } else {
    return "Today" + "" + daysInAMonth + "is my birthday";
  }
};

//console.log(isTodayMyBirthday());

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

//to confirm
const deleteProp = (objName, str) => {
  let confirm = objName;

  let result = str.split("occupation");

  while (result) {
    return confirm;
  }
};

let objName = { name: "Godwin", age: 30, occupation: "Web-Developer" };
//console.log(deleteProp(objName, "what is his occupation"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
  let max = movies[0];
  for (let i = 0; i < movies.length; i++) {
    const currentMovie = movies[i];
    //console.log(max.Year, currentMovie.Year);
    if (parseInt(currentMovie.Year) > parseInt(max.Year)) {
      //console.log("we found a new max value");
      max = currentMovie;
    }
  }
  return max;
};

const theMostRecentMovie = newestMovie();
//console.log(theMostRecentMovie);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

/* let numOfMovies = [];
const countMovies = () => {
  for (let i = 0; i < movies.length; i++) {
    numOfMovies = movies[i].Title;
    console.log(numOfMovies);
  }
}; */

/* movies.forEach((movie) => {
  for (let i in movies) {
    //console.log(movies[i].Title);
  }
}); */

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

//first loop through the array
//secondly pick out the movies keys
//return its values

const onlyTheYears = () => {
  let releaseYear = [];

  for (let i = 0; i < movies.length; i++) {
    let production = movies[i].Year;
    releaseYear.push(production);
    //console.log(releaseYear);
  }
  return releaseYear;
};

//console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  let millieniumRelease = [0];
  for (let i = 0; i < movies.length; i++) {
    let yearOfRealease = movies[i].Year;
    //console.log(yearOfRealease);
    if (parseInt(yearOfRealease) > 1900 && parseInt(yearOfRealease) < 2000) {
      millieniumRelease.push(yearOfRealease);
      //console.log(millieniumRelease);
    }
  }
  return millieniumRelease;
};
//console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  let allYearsSum = 0;

  for (let i = 0; i < movies.length; i++) {
    let theSummary = movies[i].Year;
    //console.log(theSummary);
    allYearsSum += parseInt(theSummary);
    //console.log(allYearsSum);
  }
  return allYearsSum;
};

//console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (str) => {
  let tileToConfirm = str;
  let titles = [];

  for (let i = 0; i < movies.length; i++) {
    let checkName = movies[i].Title;

    if (checkName.includes(tileToConfirm)) {
      titles.push(checkName);
      //console.log(titles);
    }
  }
  return titles;
};
//console.log(searchByTitle("Lord"));
//console.log(searchByTitle("Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const containerSelector = () => {
  //const newDiv = document.createElement("div");
  //newDiv.setAttribute("id", "container");
  const container = document.getElementById("container");
  return container;
};

//console.log(containerSelector());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const tdSelector = () => {};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

//incomplete
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

//const links = document.getElementsByTagName("a").forEach((e) => (e.style.backgrounColor = "red"));
//console.log(links);

//const linksColorRed = () => {};
//linksColorRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addingLiToUl = () => {
  let ul = document.getElementById("myList");

  const li = document.createElement("li");
  li.innerText = "It is a sunny day";

  ul.appendChild(li);
  //console.log(ul);
};

addingLiToUl();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (num) => {
  let star = "";
  for (let i = 1; i <= num; i++) {
    star = star.concat("*");
    //console.log(star);
  }
};

halfTree(7);

/*let pound = 0;
const halfTree = (num) => {
  let printStar = num;
   let stars = 8;
  for (let i = 0; i <= stars; i++) {
    pound += stars[i];
    console.log(pound);
  } */

//trying the while loop

/*   while (pound.length <= printStar) {
    console.log(pound);
    pound += "*"; // <-- this is the last statement executed, so it is returned
    console.log(pound);
  }
};

halfTree(5); */

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (num) => {
  let star = "";
  for (let i = 0; i < num; i++) {
    star = star.padStart(i + (i + 1), "*");
    //star = star.concat(" ");
    //console.log(star);
  }
};

tree(7);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
