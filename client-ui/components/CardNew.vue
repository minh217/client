<template>
    <div style="margin-left: 120px;">
        <h1><a :href="url">{{title}}</a></h1>
        <p>
            {{summary}}
        </p>
        <hr/>
    </div>
</template>

<script>
    export default {
        props: ['title', 'summary','id'],
        async mounted() {
            this.url = `/detail/${this.id}`;
        },
        data(){
            return {
                url: ""
            }
        }
    }
</script>