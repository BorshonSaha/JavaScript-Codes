obj = {name: 'MERN', type: 'Course', lang: 'JavaScript'}

for(let key in obj) {
    console.log(key)
}

for(let key in obj) {
    console.log(obj[key])
}

obj['phone'] = '123'
for(let key in obj) {
    console.log(obj[key])
}
