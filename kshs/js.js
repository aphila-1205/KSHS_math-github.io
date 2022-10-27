var everyYear = [
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false]
]
output()

function output(){
    if(document.getElementById("S1st").checked == true){
        everyYear[0] = ["S1st","S1st","S1st","S1st","S1st","S1st"]
    }
    else{
        everyYear[0] = [false,false,false,false,false]
    }
    if(document.getElementById("S1nd").checked == true){
        everyYear[1] = ["S1nd","S1nd","S1nd","S1nd","S1nd","S1nd"]
    }
    else{
        everyYear[1] = [false,false,false,false,false]
    }
    if(document.getElementById("S1rd").checked == true){
        everyYear[2] = ["S1rd","S1rd","S1rd","S1rd","S1rd","S1rd"]
    }
    else{
        everyYear[2] = [false,false,false,false,false]
    }
    if(document.getElementById("S2st").checked == true){
        everyYear[3] = ["S2st","S2st","S2st","S2st","S2st","S2st"]
    }
    else{
        everyYear[3] = [false,false,false,false,false]
    }
    if(document.getElementById("S2nd").checked == true){
        everyYear[4] = ["S2nd","S2nd","S2nd","S2nd","S2nd","S2nd"]
    }
    else{
        everyYear[4] = [false,false,false,false,false]
    }
    if(document.getElementById("S2rd").checked == true){
        everyYear[5] = ["S2rd","S2rd","S2rd","S2rd","S2rd","S2rd"]
    }
    else{
        everyYear[5] = [false,false,false,false,false]
    }

    
    if(document.getElementById("1").checked == false){
        for(var n=0; n<6; n+=1){
            everyYear[n][0] = false
        }
    }
    else{
        for(var n=0; n<6; n+=1){
            if(everyYear[n][0] != false){
                everyYear[n][0] += "\_1"
            }
        }
    }
    if(document.getElementById("2N").checked == false){
        for(var n=0; n<6; n+=1){
            everyYear[n][1] = false
        }
    }
    else{
        for(var n=0; n<6; n+=1){
            if(everyYear[n][1] != false){
                everyYear[n][1] += "\_2N"
            }
        }
    }
    if(document.getElementById("2S").checked == false){
        for(var n=0; n<6; n+=1){
            everyYear[n][2] = false
        }
    }
    else{
        for(var n=0; n<6; n+=1){
            if(everyYear[n][2] != false){
                everyYear[n][2] += "\_2S"
            }
        }
    }
    if(document.getElementById("3N").checked == false){
        for(var n=0; n<6; n+=1){
            everyYear[n][3] = false
        }
    }
    else{
        for(var n=0; n<6; n+=1){
            if(everyYear[n][3] != false){
                everyYear[n][3] += "\_3N"
            }
        }
    }
    if(document.getElementById("3S").checked == false){
        for(var n=0; n<6; n+=1){
            everyYear[n][4] = false
        }
    }
    else{
        for(var n=0; n<6; n+=1){
            if(everyYear[n][4] != false){
                everyYear[n][4] += "\_3S"
            }
        }
    }

    for(var n=110; n>105; n-=1){
        year(n)
    }
}

function year(y){
    console.log(y)
    document.getElementById("output" + y).innerHTML = ``
    for(var i=0; i<6; i+=1){
        for(var j=0; j<5; j+=1){
            if(everyYear[i][j] != false){
                document.getElementById("output" +y).innerHTML += `<a href="https://aphila-1205.github.io/kshs_math.github.io/kshs/file/` + y + `/` + everyYear[i][j] + `.pdf">` + rename(everyYear[i][j]) + `</a>`
            }
            console.log(j)
        }
        document.getElementById("output" +y).innerHTML += `<p></p>`
    }
}

function rename(ori){
    var oldName = ori
    var newName = oldName.replace("S1","▶ 第一學期").replace("S2","▶ 第二學期").replace("st"," 第一次").replace("nd"," 第二次").replace("rd"," 第三次").replace("_1"," 一年級").replace("_2N"," 二年級-自然組").replace("_2S"," 二年級-社會組").replace("_3N"," 三年級-自然組").replace("_3S"," 三年級-社會組")
    return newName
}
