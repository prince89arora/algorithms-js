let inputArray = [2,3,4,5,6,7,8,9,12,34,56,78];
let finalIndex = -1;

const search = ( x ) => {
    returnIndex( x, 0, (inputArray.length - 1) );
    console.log(finalIndex);
}

const returnIndex = (x, start, end) => {
    var mid = Math.round((start + end)/2);
    if ( inputArray[mid] === x ) {
        finalIndex = mid;
    } else if ( inputArray[start] === x ) {
        finalIndex = start;
    } else if ( inputArray[end] === x ) {
        finalIndex = end;
    } else {
        if ( (end - start) > 1 ) {
            var indexes = newIndexes(x, start, end, mid);
            returnIndex(
                x, indexes.start, indexes.end
            );
        }
    }
};

const newIndexes = (x, start, end, mid) => {
    if ( inputArray[mid] > x ) {
        return {
            start : start,
            end : mid
        };
    } else {
        return {
            start : mid,
            end : end
        };
    }
}

search( 56 );