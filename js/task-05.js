const country = prompt(
  "Введите название страны, в которую нужно совершить доставку:"
).toUpperCase();
let message;

switch (
  country // не использую интерполяцию, так как иначе будут проблемы со склонением названий стран и их регистром
) {
  case "КИТАЙ":
    message = "Доставка в Китай будет стоить 100 кредитов";
    break;
  case "ЧИЛИ":
    message = "Доставка в Чили будет стоить 250 кредитов";
    break;
  case "АВСТРАЛИЯ":
    message = "Доставка в Австралию будет стоить 170 кредитов";
    break;
  case "ИНДИЯ":
    message = "Доставка в Индию будет стоить 80 кредитов";
    break;
  case "ЯМАЙКА":
    message = "Доставка в Ямайку будет стоить 120 кредитов";
    break;
  default:
    message = "В вашей стране доставка не доступна";
}

alert(message);