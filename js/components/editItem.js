Vue.component('EditItem', {
    data(){
        return {
            newName: '',
            newQty: null,
            editModalShow: false,
        }
    },

    props: {
        modalitem:{
            type: Item,
            required: false,
        },
    },

    methods: {
        openEditModal(){
            this.editModalShow = this.modalitem.edit;
        },
        fillEditModal(){
            this.newName = this.modalitem.name;
            this.newQty = this.modalitem.qty;
        },
        resetModal() {
            this.newName = '';
            this.newQty = null;

            this.modalitem.edit = false;
            this.$emit('update-item', this.modalitem);
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            this.modalitem.name = this.newName;
            this.modalitem.qty = this.newQty;
            this.modalitem.edit = false;
            this.modalitem.isOut = this.modalitem.qty <= 0 || this.modalitem.qty === null;
            this.$emit('update-item', this.modalitem);
            // Hide the modal manually
            // this.$nextTick(() => {
            //     this.$bvModal.hide('editModal')
            // })
        },
    },

    // computed: {
    //
    // },

// CHANGE EDIT BOOL TO FALSE
    template: `
      <div>
        <template v-if="openEditModal"></template>
      
          <b-modal
                   @close="resetModal"
                   @cancel="resetModal"
                   @hidden="resetModal"
                   @shown="fillEditModal"
                   @ok="handleOk"
                   v-model="this.modalitem.edit" id="editModal" title="Edit"
          >
            <b-form @submit.stop.prevent="handleSubmit">
              <b-input-group class="mb-2">
                <b-input-group-append>
                  <b-input-group-text>Name</b-input-group-text>
                  <b-form-input aria-label="name" v-model="newName"></b-form-input>
                </b-input-group-append>
    
                <b-input-group-append>
                  <b-input-group-text>Qty</b-input-group-text>
                  <b-form-input type="number" aria-label="quantity" v-model="newQty"></b-form-input>
                </b-input-group-append>
              </b-input-group>
            </b-form>
          </b-modal>
      </div>
    `
})