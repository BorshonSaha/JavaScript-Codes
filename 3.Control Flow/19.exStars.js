function showStar(value) {
    for(let row = 1; row <= value; row++) {
        let pattern = '';
        for(let col = 1; col <= row; col++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

showStar(10);