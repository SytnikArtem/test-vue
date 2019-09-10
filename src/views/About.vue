<template>
  <div class="main-container about">
    <div class="about-content">
      <div class="about-left">
        <img src="../assets/img/myphoto.png" alt="" class="about-left-img">
        <a href="/cv_sytnik_artem.pdf" class="about-left-btn" target="_blank">Посмотреть резюме</a>
      </div>
      <div class="about-right">
        <h2 class="about-right-title">Обо мне</h2>
        <div class="about-right-row" v-for="item in info" :key="item.title">
          <p class="about-right-key">{{ item.key }}</p>
          <p class="about-right-text" v-html="item.text"></p>
        </div>
        <h2 class="about-right-title">Навыки</h2>
        <div class="about-right-row" v-for="item in skills" :key="item.title">
          <p class="about-right-key">{{ item.key }}</p>
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
          {key: "ФИО:", text: "Сытник Артём Сергеевич"},
          {key: "Дата рождения:", text: "16.02.1992"},
          {key: "Город:", text: "Киев"},
          {key: "Email:", text: "<a href=\"mailto:artemasitnik@gmail.com\" target=\"_blank\">artemasitnik@gmail.com</a>"},
          {key: "Github:", text: "<a href=\"https://github.com/SytnikArtem\" target=\"_blank\">github.com/SytnikArtem</a>"},
          {key: "Linkedin:", text: "<a href=\"https://www.linkedin.com/in/artem-sytnik-4520bb164\" target=\"_blank\">linkedin.com/in/artem-sytnik-4520bb164</a>"},
          {key: "Опыт работы:", text: "09.2017 - 10.2018: верстальщик в компании Everad - вёрстка лендингов по макетов psd, внесения правок в готовые лендинги, оптимизация страниц. <br> " +
                                        "10.2018 - 05.2019: front-end разработчик в компании Your future, вёрстка лендингов, интернет-магазинов, корпоративных сайтов <br>" +
                                        "06.2019 - настоящее времья: front-end разработчик в коипании Brights." }
        ],
        skills: [
          {key: "HTML:", text: "уверенные знания, верстаю валидный код с помощью HTML5 тегов с учётом их семантической роли в документе"},
          {key: "CSS:", text: "уверенные знания, стилизация страниц любой сложности дизайна (адаптивность, отзывчивость, кроссбраузерность) с использованием свойств CSS3, в работе использую препроцессоры Sсss, Sass, приветсвую БЭМ. Верстаю с помощь сеток (например Bootstrap 4) и без них (приемущественно без них)."},
          {key: "Photoshop (Illustrator, Avocode, Adobe XD, Figma):", text: "знания на уровне нарезания макета, преобразовать элементы в оптимальный для вёрстки формат и  качество, работа с svg."},
          {key: "JavaScript (JQuery):", text: "хорошие знания, написание скриптов для создания динамических страниц, работы с DOM, формами ввода, анимацииями. Подключение и настройка плагинов."},
          {key: "React, Vue:", text: "базовые знания, работа с компонентами, разработка несложных логических блоков. (Нахожусь в процессе изучения этих фреймворков, в приоритете работать с ними)."},
          {key: "Git:", text: "хорошие знание с системой контроля версий, использую в работе с Github, работа в коммандном репозиторие."},
          {key: "Gulp:", text: "использую для создания оптимальной сборки, автоматизация процесса разработки сайта, подключения библиотек, плагинов."},
          {key: "Английский:", text: "pre-intermediate"}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
