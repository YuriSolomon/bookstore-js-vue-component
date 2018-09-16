Vue.component('books', {
    props: ['booksin'],
    template: `
    <div class="d-flex flex-row flex-wrap justify-content-around bg-secondary" id="newBook">
        <div v-for="book in this.booksin" class="flip-container" ontouchstart="this.classList.toggle('hover');">
                <book :bookInfo="book"></book>
        </div>
    </div>
    `
})