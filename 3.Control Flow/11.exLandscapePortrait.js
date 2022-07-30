function isLandscape(width, height) {
    return (width > height);
}

isLandscape(40, 30) ? console.log('Landscape') : console.log('Portrait');