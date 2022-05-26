const toList = new Vue({
    el : "#app",
    data : {
        newTodo : "",
        todo : [
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
    },
    methods : {
        addItem(){
            if (this.newTodo != "") {
                this.todo.push({
                    text : this.newTodo,
                    done : false
                })
            }
            this.newTodo = "";
           
        },
        deleteItem(index){
           this.todo.splice(index,1);
        }

    },
});

