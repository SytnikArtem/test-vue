<template>
    <div class="main-container portfolio">
        <div class="portfolio-list">
            <a
                v-for="image in list"
                :href="image.href"
                class="portfolio-item"
                target="_blank"
                :key="image.name">
                <img
                    :src="require(`@/assets/img/${image.name}.jpg`)"
                    :alt="image.name"
                    target="_blank"
                    class="portfolio-item-img">
            </a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Portfolio",
        data() {
            return {
                list: [
                    {name: "future", href: "https://yourfuture.com.ua/"},
                    {name: "geek", href: "http://geek.md/"},
                    {name: "city", href: "https://cityfit.ru/rechnoyvokzal/"},
                    {name: "orange", href: "https://orangefit.ru/paveletskaya/"},
                    {name: "phototo", href: "https://photo-to.ru/"},
                    {name: "evromisto", href: "https://evromisto.ua/"},
                    {name: "veselka", href: "https://veselka-kids.com/"},
                    {name: "ostrov", href: "https://sytnikartem.github.io/pages/ostrov/"},
                    {name: "main-fitness", href: "https://cityfit.ru/"},
                    {name: "mogo", href: "https://sytnikartem.github.io/pages/mogo/"},
                    {name: "callcenter", href: "https://sytnikartem.github.io/pages/callcenter/"}
                ]
            }
        },
    }
</script>

<style scoped>

</style>
