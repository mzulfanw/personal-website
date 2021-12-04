<template>
  <kinesis-container>
    <kinesis-element :strength="20">
      <div class="hero__flex">
        <div class="introduce__person__hero">
          <h1>Helooo, My name is Muhammad Zulfan Wahyudin.</h1>
          <h3>
            I'm a <span>Front End Developer</span>.... Based at Bandung,
            Indonesia. Let's to collaborate to make a cool stuff
          </h3>
          <button @click="download" class="download-cv">Download My CV</button>
        </div>
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <div class="image__hero">
              <img src="../assets/img/02.png" loading="lazy" alt="Hero Image" />
            </div>
          </kinesis-element>
        </kinesis-container>
      </div>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
// import { KinesisContainer, KinesisElement} from 'vue-kinesis'
export default {
  name: "Hero",

  methods: {
    download() {
      alert("Berhasil");
    },
  },
};
</script>

<style scoped>
.hero__flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.2rem;
}

.hero__flex .image__hero img {
  max-height: 400px;
}

.hero__flex .introduce__person__hero span {
  /* font-size: 30px; */
  border-bottom: 3px solid #41b883;
}

.hero__flex .introduce__person__hero .download-cv {
  padding: 10px 35px;
  border: none;
  background: #41b883;
  border-radius: 4px;
  color: #fff;
  font-family: "Indie Flower", cursive;
  font-size: 1em;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s linear;
}

.hero__flex .introduce__person__hero .download-cv:hover {
  color: #14213d;
  background: #fff;
  border: 0.5px solid #41b883;
}

@media only screen and (max-width: 600px) {
  .hero__flex {
    flex-direction: column;
  }

  .hero__flex .introduce__person__hero {
    margin-bottom: 2.5rem;
  }
  .hero__flex .introduce__person__hero > * {
    display: block;
  }
}
</style>