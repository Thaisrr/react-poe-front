let a;
// Si a est falsy, je lui donne la valeur 'Hello World'

// Solution 1
if(!a) { // si a est falsy
    a = 'Hello World';
}

// NON : 
//!a = 'Hello World'

// Ternaire
a = (!a)? 'Hello World' : a;

// ----------------------

if( (5 > 10) && (3 > 7) ) { // Les 2 conditions doivent être vrai
    // n'importe quoi
}


if(5 < 10 || 3 > 7) { // L'une des 2 conditions doit être vrai
    // jlkfdsjflds
}

// Dans un ||, on le lit la deuxième condition que si la première est falsy.
a =  a || 'Hello World'; // Si a est falsy, alors on lui assigne 'Hello World'
a ||= 'Hello World';


// Si a est truthy, je lui donne la valeur 'Bonjour le monde'
if(a) {
    a = 'Bonjour le monde';
}

let b;
b = b && 'Bonjour le monde';
a &&= 'Bonjour le monde';


let age = 0;
if(age === undefined || age === null) {
    age = 8;
}
// Si age est undefined, non fournit alors je donne une valeur moyenne de 8;
age = age ?? 8;
// ?? null coalescing operator : si undefined ou null
// avec ??, 0 ou string vide seront considérées comme true
age ??= 8;
