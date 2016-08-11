function forEach(array, callback) {
    for (var i = 0; i < array.length; i++ ) { 
        callback(array[i]);
    }
}

// remember a callback is another function being passed.//