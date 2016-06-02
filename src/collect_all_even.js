function collect_same_elements(collection_a, object_b) {
    var sameElements = [];
    for(var i = 0; i < collection_a.length; i++){
        if(isExist(collection_a[i].key, object_b)){
            sameElements.push(collection_a[i].key);
        }
    }
    return sameElements;
}

function isExist(key, object) {
    var valueLength = object.value.length;
    for(var i = 0; i <valueLength; i++){
        if(key === object.value[i]){
            return true;
        }
    }
}

module.exports = collect_same_elements;
