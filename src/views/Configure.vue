<template>
    <div id="configure">
        <b-row>
            <b-col xs="3" sm="3" md="3" lg="2">
                <h3>Components</h3><br><hr>
                <div v-for="(element, id) in componentList" :key="id">
                    <VueDraggableResizable v-on:drag="dragIn(element, $route.params.id)" :w="200" :h="150" :x="10" :y="8" style="position: relative; border: 1.5px solid #000;">
                        
                    </VueDraggableResizable>
                    <br>
                </div>
            </b-col>
            <b-col class="verticalLine" xs="9" sm="9" md="9" lg="10">
                <h3>Configuration Screen</h3><br><hr>
                <div v-for="(element, id) in layouts" 
                     v-if="element.id == $route.params.id" 
                     :key="id"
                     style="border: 1.5px solid #000; height:500px; width:100%;"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Box from '../components/Box.vue'
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
    name: 'Configure',
    props:['box'],
    data() {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        }
    },
    computed: {
        componentList() {
            return this.$store.state.componentList
        },
        layouts() {
            return this.$store.state.layouts
        }
    },
    methods: {
        addToLayout(element) {
            if (element.style.left >= 200) {

            }
        },

        onResize(x, y, width, height) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
        },
        onDrag(x, y) {
            this.x = x
            this.y = y

        },
        dragIn(component, id) {
            console.log(component.x)
            if (component.x >= 245) {
                this.$store.state.commit('dragIn', {id, component})
            }
        },
        removeComponent(component) {
            let componentClass = Vue.extend(Box)
            let instance = new componentClass({
                propsData: { type: 'resizable' }
            })
            instance.$slots.default = ['Drag me!']
            instance.$unmount()
            this.$store.state.commit('removeComponent', component)
        }
    },
    components: {
        Box,
        VueDraggableResizable
    }
}

</script>

<style>

h3, h5 {
    float: left;
    padding-left: 1rem;
}
hr {
    border: 1px solid #000;
}
.verticalLine {
    border-left: 1.5px solid #000;
}
.screen {
    height: 100%;
}
</style>
