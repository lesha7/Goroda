let cities = ["Москва", "Казань", "Грозный", "Тверь", "Омск", "Сочи", "Рязань",
"Кострома", "Уфа", "Новосибирск", "Тюмень", "Саратов", "Самара", "Волгоград",
"Воронеж", "Краснодар", "Санкт-Петербург", "Хабаровск", "Якутск", "Челябинск",
"Екатеринбург", "Иркутск", "Нижний Новгород", "Калининград", "Владивосток",
"Ростов-на-Дону", "Пермь", "Киров", "Красноярск", "Оренбург", "Томск", "Ульяновск",
"Брянск","Архангельск","Анапа","Адыгея","Кызыл"];

function playCityGame() {
  var currentPlayer = 1;
  var previousCity = "М";
  
  while (true) {
    var city = prompt("Игрок " + currentPlayer + ", введите город:");

    if (city.charAt(0).toUpperCase() != previousCity.slice(-1).toUpperCase()) {
      alert("Город должен начинаться с буквы " + previousCity.slice(-1).toUpperCase() + "!");
      continue;
    }

    if (cities.indexOf(city) == -1) {
      alert("Такого города нет в списке!");
      continue;
    }

    cities.splice(cities.indexOf(city), 1);

    alert("Игрок " + currentPlayer + " называет город " + city + "!");
    previousCity = city;
    currentPlayer = currentPlayer == 1 ? 2 : 1;

    if (cities.length == 0) {
      alert("Игра закончена! Нет больше городов в списке.");
      break;
    }
  }
}
playCityGame();