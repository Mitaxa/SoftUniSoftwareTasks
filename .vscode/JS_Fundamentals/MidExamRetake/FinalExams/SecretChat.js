function secrteChat(input) {
 
    let chat = input.shift()
    let token = input.shift()
 
    while(token !== `Reveal`) {
 
        let [comand,checkOne,checkTwo] = token.split(`:|:`)
 
        if(comand === `InsertSpace`) {
            chat = space(chat,checkOne)
        } else if(comand === `Reverse`) {
            chat = reversee(chat,checkOne)
 
        } else if(comand === `ChangeAll`) {
          chat =  change(chat,checkOne,checkTwo)
        }
 
        
         token = input.shift()
    }
 
    console.log(`You have a new text message: ${chat}`)
 
    function space(array,index) {
        index = Number(index)
    
   let firstPart = array.substring(0,index)
    let secondPart = array.substring(index)
    
    array = firstPart + ` ` + secondPart  
    console.log(array)
   
        
    return array
    }
 
    function reversee(array,substring) {
        
       if(array.includes(substring)) {
        let ind =   array.indexOf(substring);
        let secondPart = array.substring(ind,ind + substring.length).split(``).reverse().join(``);
        let firstPart = array.substring(0,ind);
        let thirthPart = array.substring(ind + substring.length);
        array = firstPart + thirthPart  + secondPart;
        console.log(array);
       } else {
           console.log(`error`);
       }
        return array
    }
 
    function change(array,substring,replacement) {
 
        while(array.includes(substring)) {
            let ind = array.indexOf(substring);
            let part = array.substring(ind,ind + substring.length);
            array = array.replace(part,replacement);
        }
        
        console.log(array);
       return array
    }
 
 
}
secrteChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])