const person = {
    name: 'Tarikul',
    age: 20,
}

const isCool = (x) => {
    return ( x>= 18) ? true : false;
}

//We can export multiple variables by this also
export {
    person,
    isCool,
}