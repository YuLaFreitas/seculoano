function SeculoAno(ano){
    var seculo;
    var sentena;
    if(ano > 0){
        
     if(ano >= 1 && ano <= 100){
        seculo = 1;
        }
        else
        if(ano >= 101){
            if(ano % 100 >= 1){
         seculo = Math.round(ano/100, -1)+1;
            }else{
             seculo = Math.round(ano/100, -1);
            }
     }   
       
    document.getElementById('seculo').innerHTML = "<input type='text' disabled value='Seculo " + seculo + "'>";
    };