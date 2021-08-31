<template>
    <div class="container flex justify-center items-center h-screen bg-gray-100">
        <div class="w-1/4 bg-white  rounded-2xl shadow-md">
            <div class="w-40 mx-auto">
                <img src="~/images/Trello-logo.png" alt="">
              
            </div>
            <div class="p-5 text-center">
                 <input type="text" placeholder="Email" class="focus:ring-0 w-full rounded-2xl shadow-inner bg-gray-100 border-0">
                  <input type="text" placeholder="Password" class=" focus:ring-0 w-full mt-3 rounded-2xl shadow-inner bg-gray-100 border-0">
                <button class="bg-gradient-to-r from-blue-400 to-blue-800 mt-3 rounded-2xl
                text-white font-medium shadow-inner bg-gray-100 border-0 w-1/2 h-10 mx-auto">login</button>
                <div class="font-medium mt-3 ">
                   <span class="text-gray-500"> Not a member?</span> <span class="text-blue-600">Signup now</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout : 'auth'
}
</script>
<style scoped>

</style>