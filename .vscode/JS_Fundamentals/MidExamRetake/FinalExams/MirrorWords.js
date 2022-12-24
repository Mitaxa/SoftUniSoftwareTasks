function mirrorWords(input){
    let text = input[0];
    let reg= /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm
    let matches = [...text.matchAll(reg)]
    let mirrorWords=[]
   
    for (const match of matches) {
        let firstWord = match[2]
        let secondWord = match[3]
        let reverseWord = secondWord.split('').reverse().join('')
        if(firstWord===reverseWord){
            mirrorWords.push(firstWord + " <=> " + secondWord)
        }
       
    }
    if(matches.length===0){
        console.log('No word pairs found!')
        console.log('No mirror words!')
    }else{
        console.log(`${matches.length} word pairs found!`)
        if(mirrorWords.length===0){
            console.log('No mirror words!')
        }else{
            console.log('The mirror words are:')
            console.log(mirrorWords.join(', '))
        }
    }
}
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
)