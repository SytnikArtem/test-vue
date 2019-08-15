<template>
  <div class="main-container about">
    <div class="about-content">
      <div class="about-left">

      </div>
      <div class="about-right">
        <h2 class="about-right-title">Обо мне</h2>
        <div class="about-right-row" v-for="(item, index) in info" :key="index">
          <p class="about-right-title">{{ item.title }}</p>
          <p class="about-right-text" v-html="item.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "About",
    data() {
      return {
        info: [
          {title: "ФИО:", text: "Сытник Артём Сергеевич"},
          {title: "Дата рождения:", text: "16.02.1992"},
          {title: "Город:", text: "Киев"},
          {title: "Email:", text: "<a href=\"mailto:artemasitnik@gmail.com\" target=\"_blank\">artemasitnik@gmail.com</a>"},
          {title: "Github:", text: "<a href=\"https://github.com/SytnikArtem\" target=\"_blank\">github.com/SytnikArtem</a>"},
          {title: "Linkedin:", text: "<a href=\"https://www.linkedin.com/in/artem-sytnik-4520bb164\" target=\"_blank\">linkedin.com/in/artem-sytnik-4520bb164</a>"},
          {title: "Опыт работы:", text: "09.2017 - 10.2018: верстальщик в компании Everad - вёрстка лендингов по макетов psd, внесения правок в готовые лендинги, оптимизация страниц. <br> " +
                                        "10.2018 - 05.2019: front-end разработчик в компании Your future, вёрстка лендингов, интернет-магазинов, корпоративных сайтов <br>" +
                                        "06.2019 - настоящее времья: front-end разработчик в коипании Brights." }
        ]
      }
    },
  }
</script>

<style scoped>

</style>
