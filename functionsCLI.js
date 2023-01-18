
function stats(arrayObjectsLinks){
    //array con los href de cada objeto del array
    const arrayHref= arrayObjectsLinks.map(objectLink=> objectLink.href)
    
    total = {
        'Total': arrayHref.length,
        'Unique': new Set(arrayHref).size
    }
    return total; 
}

function statsPlusBroken(arrayObjectsLinks){
    const arrayHref= arrayObjectsLinks.map(objectLink=> objectLink.href)
    const arrayFail= arrayObjectsLinks.filter(objectLink=> objectLink.ok==='FAIL')

    total = {
        'Total': arrayHref.length,
        'Unique': new Set(arrayHref).size,
        'Broken': arrayFail.length
    }
    return total; 
}
     



module.exports={
    stats,
    statsPlusBroken,
}