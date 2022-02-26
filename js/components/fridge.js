Vue.component('Fridge', {
    data(){
        return {
            fields: [
                {
                    key: 'favorite',
                    sortable: true,
                    'class': 'favorite-width',
                },
                {
                    key: 'name',
                    sortable: false
                },
                {
                    key: 'qty',
                    sortable: true
                },
                {
                    key: 'Options',
                    'class': 'options-width',
                }
            ],
        }
    },

    props: {
        items: {
            type: Array,
            required: true,
        },
    },

    methods: {
        toggleFavorite(item){
            item.favorite = !item.favorite;
        },
        deleteItem(item){
            this.$emit('delete-item', item);
        },
        editItem(item){
            item.edit = true;
            this.$emit('open-edit-modal', item);
        }
    },

    // computed: {
    //
    // },

    template: `
        <b-table striped hover :items="items" :fields="fields">
            <template #cell(favorite)="row">
                <template v-if="row.item.favorite">
                  <span aria-hidden="true">
                    <b-button variant="none" @click="toggleFavorite(row.item)">
                      <b-icon icon="heart-fill" variant="warning"></b-icon>
                    </b-button>
                  </span>
                  <span class="sr-only">Favorited</span>
                </template>
              
                <template v-else>
                  <span aria-hidden="true">
                    <b-button variant="none" @click="toggleFavorite(row.item)">
                      <b-icon icon="heart" variant="warning"></b-icon>
                    </b-button>
                  </span>
                  <span class="sr-only">Not Favorited</span>
                </template>
            </template>
            
            
            <template #cell(options)="row">
              <template>
                <span aria-hidden="true">
                  <b-button variant="none" @click="editItem(row.item)">
                    <b-icon icon="pencil" variant="primary"></b-icon>
                  </b-button>
                </span>
                <span class="sr-only">Edit</span>
              </template>
              
              <template>
                <span aria-hidden="true">
                  <b-button variant="none" @click="deleteItem(row.item)">
                    <b-icon icon="trash" variant="danger"></b-icon>
                  </b-button>
                </span>
                <span class="sr-only">Delete</span>
              </template>
            </template>
        </b-table>
    `
})