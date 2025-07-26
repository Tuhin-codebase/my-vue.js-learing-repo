<template> 
   <h1 class="text-center text-primary text-decoration-underline " >CountOpedia</h1>
   <hr>
   <div class="d-flex justify-content-around" >
     <router-link to="/" class="btn btn-warning"  >Home</router-link>  
     <router-link to="/info"  class="btn btn-warning " >info</router-link>  
    </div>
    <router-view></router-view>
</template>