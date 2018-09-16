Vue.component('heading', {
    template: `
    <div class="header d-flex flex-wrap justify-content-center justify-content-md-between">
        <div class="logo">
            <a href="index.html"><img src="logo.jpg" alt="logo" style="width:350px"></a>
        </div>
        <div class="searchBar">
            <form class="form-inline">
                <input onkeyup="search()" class="form-control my-5 my-sm-5 float-right" type="search" id="myInput"
                    placeholder="Search for books..">
            </form>
        </div>
    </div>
    `
})