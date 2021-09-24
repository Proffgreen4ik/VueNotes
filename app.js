const App = {
    data() {
        return {
            placeholderString: 'Введите название',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNote() {
            if (this.inputValue != "") {
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        delNote(i){
            this.notes.splice(i,1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length*2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 50) {
                this.inputValue = ''
            }
        }
    }
}
const app = Vue.createApp(App)
app.mount('#app')