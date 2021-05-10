let num = prompt('Введите число:')

num = +num;
if (!isNaN(num) && typeof num === 'number') {
    if (num % 2) {
        console.log('Это нечетное число');
    } else {
        console.log('Это четное число');
    }
} else {
    console.log('Упс, кажется вы ошиблись!');
}