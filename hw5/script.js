//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, 
//т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
let chees = function() {
    let div = document.createElement("div")

    let numbers = ['', 1, 2, 3, 4, 5, 6, 7, 8, '']
    let alphas = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']

    for (n of numbers.reverse()){

        let div_1 = document.createElement("div")
        div_1.style.display = "flex"
        div_1.style.flexDirection = "row"

        for (a of numbers){

            let div_2 = document.createElement("div")
            
            if (a === '' && n === ''){
                div_2.style.backgroundColor = "gray"
                div_2.style.height = "20px"
                div_2.style.width = "20px"
            } else if (a === ''){
                div_2.style.backgroundColor = "gray"
                div_2.style.height = "50px"
                div_2.style.width = "20px"
                div_2.textContent = n
                div_2.style.textJustify = "centr"
            } else if (n === ''){
                div_2.style.backgroundColor = "gray"
                div_2.style.width = "50px"
                div_2.style.height = "20px"
                div_2.textContent = alphas[a]
                
                div_2.style.text = "centr"
            } else {
                div_2.style.height = "50px"
                div_2.style.width = "50px"
                if ((a + n ) % 2 == 1){
                    div_2.style.backgroundColor = "black"
                }

                if (n === 7){
                    let bp = document.createElement("img")
                    bp.setAttribute("src", "img/bP.png")
                    bp.setAttribute("width", "40px");
                    bp.setAttribute("height", "40px");
                    bp.style.backgroundColor = "gray"
                    div_2.appendChild(bp)
                }
                if (n === 2){
                    let wp = document.createElement("img")
                    wp.setAttribute("src", "img/wP.png")
                    wp.setAttribute("width", "40px");
                    wp.setAttribute("height", "40px");
                    wp.style.backgroundColor = "gray"
                    div_2.appendChild(wp)
                }
            }
            div_2.style.textAlign = "center"
            //div_2.style.verticalAlign = "middle"
            div_2.style.borderWidth = "1px"
            div_2.style.borderColor = "black"
            div_2.style.borderStyle = "solid"
            //div_2.style.width = "50px"
            div_1.appendChild(div_2)
        }
        div.appendChild(div_1)
    }


    document.body.appendChild(div)
}


//2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть 
//соответственно черными и белыми.


//3. *Заменить буквы, обозначающие фигуры, картинками.
Window.onload = chees;  // думал что вызывает функцию после загрузки страницы, а по факту не вызывает вовсе.
chees()