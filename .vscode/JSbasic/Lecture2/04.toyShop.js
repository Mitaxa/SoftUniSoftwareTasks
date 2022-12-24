function testTasks(input){
    let a = Number(input[0]);//1.   Цена на екскурзията
    let b = Number(input[1]);//2.   Брой пъзели 
    let c = Number(input[2]);//3.   Брой говорещи кукли 
    let d = Number(input[3]);//4.   Брой плюшени мечета
    let e = Number(input[4]);//5.   Брой миньони
    let f = Number(input[5]);//6.   Брой камиончета 
    let g = 2.60;// • Пъзел 
    let h = 3;//    • Говореща кукла 
    let i = 4.10;// • Плюшено мече 
    let j = 8.20;// • Миньон
    let k = 2;//    • Камионче
    let l = b + c + d + e + f // Брой играчки
    
    let m = b*g + c*h + d*i + e*j + f*k //общата цена
    
    if ( l >= 50 ){
        m = m - ((25 * m )/ 100) ; //поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена
    }
    
    let n = 10 * m / 100 ; //10% за наема на магазина
   
    let o =  m - n ;//Печалба = наема на магазина - Печалба
    
    let p = a - o //Печалба - екскурзията = оставащите пари
    if( o >= a ){
   p = (o - a) 
        console.log("Yes!",p.toFixed(2),"lv left.")
   }else if ( o < a ){
   p = (a - o) 
        console.log("Not enough money!",p.toFixed(2),"lv needed.")
       }
   }