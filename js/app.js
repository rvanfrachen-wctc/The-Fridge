const app = new Vue({
    el: '#app',

    data: function() {
        return {
            items: [
                new Item("Milk", 1, false, false),
                new Item("Butter", .75, false, false),
                new Item("Apples", 6, true, false),
                new Item("String Cheese", 1, true, false),
                new Item("Ketchup", 0, false, true),
                new Item("Bacon", 0, true, true),
            ],
            modalItem: new Item(),
        }
    },

    methods: {
        addItem(item){
            this.items.push(item);
        },
        deleteItem(item){
            this.items.splice(this.items.indexOf(item), 1);
        },
        openEditModal(item){
            this.modalItem = item;
        },
        updateItem(item){
            this.items[this.items.indexOf(item)] = item;
        }
    },
});