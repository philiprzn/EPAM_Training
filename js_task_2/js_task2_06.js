function isPrime(number) {
    if (number >= 1000) return 'Неверные данные';
    if (number == 1) return true;

    for (var i = 2; i < number; i++){
        if ((number % i) == 0){
            return false;
        }
    }
    return true;
}


var number= 7;

var isPrimeNumber = isPrime(number);

if (isPrimeNumber == true){
    console.log('Число ' + number + ' --' + ' простое число');
} else if (isPrimeNumber == false) {
    console.log('Число ' + number + ' --' + ' составное число')
};
