import vue from 'vue';
import App from './App';
import Vue from 'vue';

new Vue({
    el: "#app",
    components: { App },
    template: `<App :state="state"/>`,
    data: {
        state: {
            showDone: false,
            todos: [
                {
                    text: "Refactor CSS",
                    done: true
                }, 
                {
                    text: "Secure Docker Instances",
                    done: false
                }, 
                {
                    text: "Inject flavoring",
                    done: false
                }
            ]
        }
    }
})