<template>
  <div class="projects__text">
    <h1>Projects</h1>
  </div>
  <div class="loading" v-if="loading">Please wait</div>
  <div class="projects__repo">
    <div v-for="repo in repos" :key="repo.id">
      <div class="projects__repo__details">
        <h3>{{ repo.full_name }}</h3>
        <span>Technology were used</span>
        <h6 class="tag">{{ repo.language }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "Projects",
  setup() {
    const repos = ref([]);
    const loading = ref(true);

    const getRepos = async () => {
      let url = await axios.get("https://api.github.com/users/mzulfanw/repos");
      repos.value = url.data.filter((e) => e.stargazers_count > 0);
    };

    onMounted(() =>
      setTimeout(() => {
        loading.value = false;
        getRepos();
      }, 5000)
    );

    return { repos, getRepos, loading };
  },
};
</script>

<style scoped>
.projects__text h1 {
  text-align: center;
  font-size: 60px;
}

.projects__repo {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.projects__repo .projects__repo__details .tag {
  background: #41b883;
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
}

.loading {
  display: block;
  margin: 0 auto;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .projects__repo {
    flex-direction: column;
  }
}
</style>