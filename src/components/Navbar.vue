<template>
  <div id="nav">
    <header class="navbar">
      <a href="/"><h3>M Zulfan W</h3></a>
      <ul class="navbar__list" :class="show ? 'show' : ' '">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
      </ul>

      <div @click="burgerMenu" class="burger-menu">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
          ></path>
        </svg>
      </div>
    </header>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    burgerMenu() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  margin-top: 2rem;
}

.navbar__list {
  display: flex;
  justify-content: space-around;
  width: 33.3%;
}

.navbar__list li,
a {
  list-style-type: none;
  text-decoration: none;
  color: black;
  /* flex: 1; */
}
.burger-menu {
  display: none;
}

.router-link-active {
  color: #41b883;
}

.router-link-exact-active {
  border-bottom: 2px solid #41b883;
}

/* .shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
} */

@keyframes shake {
  25% {
    top: 0%;
  }
  50% {
    top: 10%;
  }
  75% {
    top: 15%;
  }
  100% {
    top: 18%;
  }
}

@media only screen and (max-width: 600px) {
  .navbar__list {
    display: none;
  }

  .burger-menu {
    display: block;
    margin-top: 2.5rem;
  }

  .navbar__list.show {
    display: block;
    margin: 20px auto;
    position: absolute;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 5px 0px 0px;
    background-color: #edf2f4;
    min-width: 390px;
    padding: 20px 20px;
    top: 0%;
    font-size: 20px;
    z-index: 999;
    animation: shake 0.2s ease-out forwards;
  }
}
</style>