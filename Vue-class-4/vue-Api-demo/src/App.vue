<template>
  <div class="d-flex justify-content-center " v-if=" ApiData.loading " >
    <loader> </loader>
  </div>
  <h1 class="text-center text-decoration-underline" >TravelOpedia</h1>
  <hr>
  <table class="table table-striped table-light">
    <thead>
      <th>id</th>
      <th>name</th>
      <th>country</th>
    </thead>
    <tbody>
      <tr class="table-light" v-for="el in ApiData.dataList " >
        <td>{{ el.id }}</td>  
        <td>{{ el.name }}</td>  
        <td>{{ el.country }}</td>  
      </tr>  
    </tbody>

  </table>
 

</template>

<script setup >
  import {reactive, onMounted} from "vue";
  import axios from "axios";
  const ApiData = reactive({
    dataList: [],
    loading: false,
  });

  onMounted(() => {
    apiDataFunction ();
  });

  function apiDataFunction () {
    axios.get('http://localhost:3000/manyData').then((response) => {
      ApiData.loading = true;
      new Promise(resolve => setTimeout(() => {
        resolve();
      } ,2000)).then(() => {
           // console.log(response.data);
          ApiData.loading = false;
          ApiData.dataList = response.data;
      })
      
      });
    };
  
</script>
