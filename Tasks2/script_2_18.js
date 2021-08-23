//1 января 2018 был понедельник.
// Скрипт запрашивает номер месяца (1..12) и число в этом месяце (1..31).
// Выведите имя дня недели (например, «четверг») для введённого числа и месяца.

calendar = (val1, val2) => {
    const date = new Date(2021, val1, val2);

    switch (date.getDay()){
        case 0: return 'Воскресенье'
        case 1: return 'Понедельник'
        case 2: return 'Вторник'
        case 3: return 'Среда'
        case 4: return 'Четверг'
        case 5: return 'Пятница'
        case 6: return 'Суббота'
    }
}

const result = calendar(3, 23);
console.log(result);