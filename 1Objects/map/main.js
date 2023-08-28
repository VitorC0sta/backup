const pessoas = [
    {id: 132, nome: 'Vitor'},
    {id: 2223, nome: 'Vitor'},
    {id: 567, nome: 'Vitor'}
]

const newPerson = new Map()

// for(const pessoa of pessoas) {
//     const {id} = pessoa;
//     newPerson[id] = {...pessoa};
// } 

for(const pessoa of pessoas) {
    const {id} = pessoa;
    newPerson.set(id, {...pessoa});
} 


console.log(newPerson);
newPerson.delete(567);
console.log(newPerson);
console.log(newPerson.get(567));

