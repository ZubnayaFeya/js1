//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, 
//т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
let chees = function() {
    let div = document.createElement("div")
    let table = document.createElement("table")

    let numbers = ['', 1, 2, 3, 4, 5, 6, 7, 8, '']
    let alphas = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '']

    for (a of alphas){

        let td = document.createElement("td")

        if (a === ''){
            td.style.backgroundColor = "gray"
            td.style.width = "20px"
            td.style.height = "50px"
        } else {
            td.style.width = "50px"
            td.style.height = "50px"
        }

        //td.style.width = "50px"

        for (n of numbers.reverse()){

            let tr = document.createElement("tr")

            if (n === ''){
                tr.style.backgroundColor = "gray"
                tr.style.height = "20px"
                tr.style.width = "50px"
            } else {
                tr.style.height = "50px"
                tr.style.width = "50px"
            }
            
            //tr.style.width = "50px"
            td.appendChild(tr)
        }
        table.appendChild(td)
    }


    div.appendChild(table)
    document.body.appendChild(div)
}


//2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть 
//соответственно черными и белыми.


//3. *Заменить буквы, обозначающие фигуры, картинками.
Window.onload = chees;  // думал что вызывает функцию после загрузки страницы, а по факту не вызывает вовсе.
chees()