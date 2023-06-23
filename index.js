function ejecicio1(){
    const matriz = [[1,2,3],[4,5,6],[7,8,9]];
    for ( x = 0; x < matriz.length ; x++) {
      for (var j = 0; j < matriz[x].length; j++) {
         document.write(matriz[x][j] + " ");
       }
       document.write('<br>')
   }
}


function ejecicio2(){
 let n = Number(prompt('igresa el el valor de longitud '))
 let n1 =[];
 let n2 =[];
 let nt = []
 for(let i = 0; i< n ;i++){
    n1.push([])
    n2.push([])
    let Fila = []
    
    for(let j = 0; j < n ;j++){
        let v1 = Number(prompt(`digite valores matriz1 indice  ${i} - ${j}`))
        let v2 = Number(prompt(`digite valores matriz2 indice ${i} - ${j}`))
        n1[i][j] = v1
        n2[i][j] = v2
        Fila.push(n1[i][j] + n2[i][j]) 
    }
    nt.push(Fila)
 }
 document.write(' matriz A  '+ n1 + '<br>')
 document.write(' matriz B  ' + n2 +'<br>')
 document.write(' suma  ' + nt + '<br>')

return nt
 
}  




function ejecicio3(){
    const matriz3 = [[],[],[]];

    for ( x = 0; x < matriz3.length ; x++) {
       matriz3[0].push(Math.round(Math.random()* (3 - 1) + 1))
       matriz3[1].push(Math.round(Math.random()* (6 - 4) + 4))
       matriz3[2].push(Math.round(Math.random()* (9 - 7) + 7))
       
    }
    
    document.write(matriz3.join('--'))
}