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
            
            div_2.style.height = "50px"
            div_2.style.width = "50px"

            if (a === '' && n === ''){
                div_2.style.backgroundColor = "gray"
                div_2.style.height = "20px"
                div_2.style.width = "20px"
            } else if (a === ''){
                div_2.style.backgroundColor = "gray"
                div_2.style.width = "20px"
                div_2.textContent = n
                div_2.style.textJustify = "centr"
            } else if (n === ''){
                div_2.style.backgroundColor = "gray"
                div_2.style.height = "20px"
                div_2.textContent = alphas[a]
                
                div_2.style.text = "centr"
            } else {
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
                if (n === 1) {
                    if (a === 1 || a === 8){
                        let wr = document.createElement("img")
                        wr.setAttribute("src", "img/wR.png")
                        wr.setAttribute("width", "40px");
                        wr.setAttribute("height", "40px");
                        wr.style.backgroundColor = "gray"
                        div_2.appendChild(wr)
                    } else if (a === 2 || a === 7){
                        let wn = document.createElement("img")
                        wn.setAttribute("src", "img/wN.png")
                        wn.setAttribute("width", "40px");
                        wn.setAttribute("height", "40px");
                        wn.style.backgroundColor = "gray"
                        div_2.appendChild(wn)
                    } else if (a === 3 || a === 6){
                        let wb = document.createElement("img")
                        wb.setAttribute("src", "img/wB.png")
                        wb.setAttribute("width", "40px");
                        wb.setAttribute("height", "40px");
                        wb.style.backgroundColor = "gray"
                        div_2.appendChild(wb)
                    } else if (a === 4){
                        let wq = document.createElement("img")
                        wq.setAttribute("src", "img/wQ.png")
                        wq.setAttribute("width", "40px");
                        wq.setAttribute("height", "40px");
                        wq.style.backgroundColor = "gray"
                        div_2.appendChild(wq)
                    } else if (a === 5){
                        let wk = document.createElement("img")
                        wk.setAttribute("src", "img/wK.png")
                        wk.setAttribute("width", "40px");
                        wk.setAttribute("height", "40px");
                        wk.style.backgroundColor = "gray"
                        div_2.appendChild(wk)
                    }
                } else if (n === 8) {
                    if (a === 1 || a === 8){
                        let br = document.createElement("img")
                        br.setAttribute("src", "img/bR.png")
                        br.setAttribute("width", "40px");
                        br.setAttribute("height", "40px");
                        br.style.backgroundColor = "gray"
                        div_2.appendChild(br)
                    } else if (a === 2 || a === 7){
                        let bn = document.createElement("img")
                        bn.setAttribute("src", "img/bN.png")
                        bn.setAttribute("width", "40px");
                        bn.setAttribute("height", "40px");
                        bn.style.backgroundColor = "gray"
                        div_2.appendChild(bn)
                    } else if (a === 3 || a === 6){
                        let bb = document.createElement("img")
                        bb.setAttribute("src", "img/bB.png")
                        bb.setAttribute("width", "40px");
                        bb.setAttribute("height", "40px");
                        bb.style.backgroundColor = "gray"
                        div_2.appendChild(bb)
                    } else if (a === 4){
                        let bq = document.createElement("img")
                        bq.setAttribute("src", "img/bQ.png")
                        bq.setAttribute("width", "40px");
                        bq.setAttribute("height", "40px");
                        bq.style.backgroundColor = "gray"
                        div_2.appendChild(bq)
                    } else if (a === 5){
                        let bk = document.createElement("img")
                        bk.setAttribute("src", "img/bK.png")
                        bk.setAttribute("width", "40px");
                        bk.setAttribute("height", "40px");
                        bk.style.backgroundColor = "gray"
                        div_2.appendChild(bk)
                    }
                }
            }
            div_2.style.textAlign = "center"
            //div_2.style.verticalAlign = "middle"
            div_2.style.borderWidth = "1px"
            div_2.style.borderColor = "black"
            div_2.style.borderStyle = "solid"
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