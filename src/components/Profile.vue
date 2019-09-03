<template>
    <div>
        <span>{{getUserNameFromUrl}}</span>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    computed: {
        getUserNameFromUrl: function() {
            return this.$route.params.username;
        }
    }
}
</script>