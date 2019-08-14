var category = [];

function isPresent(categoryName){
    for(let i=0; i<category.length; i++){
        if(categoryName === category[i])
            return true;
    }
    return  false
}

function fillCategory(wholeData){
    for(let i=0; i<wholeData.length; i++){
        if(isPresent(wholeData[i].category))
            continue
        category.push(wholeData[i].category)
    }
}

export {category, fillCategory}