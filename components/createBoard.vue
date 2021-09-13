<template>
  <div 
    class="modal">
    <div class="content"></div>
  </div>
</template>

<script>
export default {
    props: {
        show : {
            type : String,
            default : false
        }
    }
};
</script>
<style  scoped>

.modal{
    display: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
}

</style>>

</style>
