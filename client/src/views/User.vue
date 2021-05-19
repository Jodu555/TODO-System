<template>
    <div class="user">
        <div>User {{ $route.params.id }}</div>
    </div>
</template>
<script>
export default {
    name: "User",
    created() {
        console.log(this.$route.params.id);
    },
};
</script>
<style lang="">
    
</style>