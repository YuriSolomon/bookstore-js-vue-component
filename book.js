Vue.component('book', {
    props: ['bookInfo'],
    template: `
    <div class="flipper">
        <div class="front">
            <img class="book" :src="this.bookInfo.cover" alt="cover" />
        </div>
        <div class="back container">
            <h3 class="row align-items-center" style="height:80px">{{this.bookInfo.title}}</h3>
            <p class="row" style="height:210px">{{this.bookInfo.description}}</p>
            <a rel="gallery" :href="this.bookInfo.detail" class="swipebox row justify-content-center" style="height:50px"
                title="My Caption">
                <img class="readMore" src="button-more-info.jpg" alt="cover">
            </a>
            <p class="row align-items-end" style="height:90px">Language: {{this.bookInfo.language}}</p>
        </div>
    </div>
    `
})