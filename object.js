const student = {
    name: 'Rakib',
    id: 082,
    address: 'Dhanmondi',
    isSingle: true,
    friends: ['Nahian', 'Mohib', 'Sumu', 'Maruf'],
    movies: [{
        name:'no.1',year:2005
    },
        {name:'king KHan',year:2008},
    ],
    act: function () {
        console.log("Hello Function");
    },
    car: {
        brand: 'tesla',
        price: 454300,
        made: 2022,
        manufacture: {
            name: 'tesla',
            ceo:'elon Musk',
        }
    }
}
console.log(student.act)
student.act();