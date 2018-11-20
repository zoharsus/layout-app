<template>
    <div id="home">
        <h3>Layouts Screen</h3><br><hr>
        <b-container class="bv-example-row">
        <b-row>
            <b-col v-for="(layout, id) in Layouts" v-if="id<3" :key="id" @click="goto(layout)">
                <div class="outer-layout">
                    <div v-for="(component, i) in layout.components" :key="i"/>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="(layout, id) in Layouts" v-if="id>2" :key="id" @click="goto(layout)" >
                <div class="outer-layout">
                    <div v-for="(component, i) in layout.components" :key="i"/>
                </div>
            </b-col>
        </b-row>
        </b-container>
    </div>
</template>


<script>
import Box from '../components/Box.vue'


export default {
    name: 'Home',
    data() {
        return {
            
        }
    },
    computed: {
        Layouts() {
            return this.$store.state.layouts
        }
    },
    components: {
        Box
    },
    methods: {
        goto(layout){
            this.$router.push('configure/' + layout.id);
        }
    }
}
</script>

<style>

h3 {
    float: left;
    margin-left: 2rem;
}

hr {
    border: 1px solid #000;
}

.outer-layout {
    height: 200px;
    width: 300px;
    border: 1.5px solid #000;
    margin: 1rem;
}

</style>
