//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
//десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
//соответствующее сообщение с помощью console.log и вернуть пустой объект.
function convertIntToObj(num) {
    let res = {}
    if (num > 9) {
        if (num > 99){
            if(num > 999) {
                console.log('число превышает 999')
                return res
            }
            res['сотни'] = converter(num, 0)
            res['десятки'] = converter(num, 1)
            res['единицы'] = converter(num, 2)
            console.log(res)
            return res
        }
        res['десятки'] = converter(num, 0)
        res['единицы'] = converter(num, 1)
        console.log(res)
        return res
    }
    res['единицы'] = converter(num, 0)
    console.log(res)
    return res
}

function converter(n, i){
    return +(String(n)[i])
}
// тут можно так же сделать через свич кейс, или не вложенными ифами а через элсе иф.


//2. Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.
var basket = {
    products: [],
    summare: function () {
        var sum = 0
        for(var ob of this.products){
            sum = sum + ob.price * ob.count
        }
        return sum
    }
}

var product1 = {
    name: 'apple',
    code: '001',
    price: 32,
    count: 1
}
var product2 = {
    name: 'mellow',
    code: '002',
    price: 30,
    count: 2
}
var product3 = {
    name: 'salt',
    code: '003',
    price: 12,
    count: 6
}
basket.products.push(product1, product2, product3)
console.log(basket.products)
basket.summare()

//3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не
// только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру
// для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.