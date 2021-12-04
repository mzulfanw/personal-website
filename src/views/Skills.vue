<template>
    <div class="skills__text">
        <h1>Skills</h1>
    </div>
  <div class="skills__flex">
      <div class="skills">
         <img class="skills__image" loading="lazy" src="../assets/img/vue.svg" alt="">
          <h3>Vue Js</h3>

      </div>
      <div class="skills">
             <img class="skills__image" loading="lazy" src="../assets/img/react.svg" alt="">
          <h3>React Js</h3>
      </div>
      <div class="skills">
             <img class="skills__image" loading="lazy" src="../assets/img/react.svg" alt="">
          <h3>React Native</h3>
      </div>
      <div class="skills">
             <img class="skills__image" loading="lazy" src="../assets/img/css.svg" alt="">
          <h3>CSS</h3>
      </div>
      <div class="skills">
             <img class="skills__image" loading="lazy" src="../assets/img/javascript.svg" alt="">
          <h3>Javascript</h3>
      </div>
       <div class="skills">
             <img class="skills__image" loading="lazy" src="../assets/img/bootstrap.svg" alt="">
          <h3>Javascript</h3>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'Skills'
}
</script>

<style scoped>
.skills__text  h1{
    text-align: center;
    font-size: 60px;
}
    .skills__flex   {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: .2rem;
        flex-wrap: wrap;
        
    }

    .skills__flex .skills  {
        width: 400px;
        height: 150px;
        text-align: center;
        margin: 50px 0;
      
    }

    .skills__flex .skills .skills__image {
        max-height: 60%;
        margin-bottom: 2rem;
    }

</style>