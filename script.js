const toDoList = new Vue ({
    el : "app",
    data : {
        toDo : [
            {
                text : 'fare la spesa',
                done : true
            },
            {
                text : 'fare le pulizie',
                done : false
            },
            {
                text : 'cucinare',
                done : false
            },
            {
                text : 'studiare',
                done : true
            },
            {
                text : 'pagare le bollette',
                done : false
            },
        ]
    }
})