Vue.component('AddItem', {
    data(){
        return {
            newName: '',
            newQty: null,
        }
    },

    props: {

    },

    methods: {
        addItem(){

            // emit item
            this.$emit('new-item', new Item(this.newName, this.newQty));

            // reset inputs
            this.newName = '';
            this.newQty = null;
        },
    },

    // computed: {
    //
    // },

    template: `
      <b-form>
          <b-input-group class="mb-2">
          <b-input-group-append>
            <b-input-group-text>Name</b-input-group-text>
            <b-form-input aria-label="name" v-model="newName"></b-form-input>
          </b-input-group-append>
    
          <b-input-group-append>
            <b-input-group-text>Qty</b-input-group-text>
            <b-form-input type="number" aria-label="quantity" v-model="newQty"></b-form-input>
          </b-input-group-append>
    
          <b-button variant="success" @click="addItem"><b-icon icon="plus"></b-icon> Add</b-button>
          </b-input-group>
      </b-form>
    `
})