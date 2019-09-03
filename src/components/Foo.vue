<template>
    <div>
        <button @click="toBarAction">to bar</button>
    </div>
</template>

<script>
export default {
    name: 'Foo',
    methods: {
        toBarAction: function() {
            this.$router.push('/bar')
        }
    }
}
</script>