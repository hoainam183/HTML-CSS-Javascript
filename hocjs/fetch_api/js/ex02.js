// import { config } from "./config.js";
import { client } from "./client.js";
import { config } from "./config.js";

const { PAGE_LIMIT } = config;

// const {SERVER_API} = config;
// console.log(SERVER_API);
// console.log(client);


// const getUsers = async () => {
//     const {data} = await client.get(`/users`);
//     console.log(data);
// }

// getUsers();

// const getUser = async (id) => {
//     const{data} = await client.get(`/users/${id}`);
//     console.log(data);

// }

// getUser(1);

const render = (posts) => {
    // console.log(posts);
    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        // console.log(div);

        return div.innerText;
    }

    const postsEl = document.querySelector(".posts");

    let postHtml = ``;
    posts.forEach(({ title, excerpt, content } = posts) => {


        postHtml += `<div class="col-6 col-lg-4">
                    <div class="post-item border p-3">
                        <h3><a href="#" class="text-decoration-none">${stripHtml(title)}</a></h3>
                        <p>${stripHtml(excerpt)}</p>
                    </div>
                    </div>`;
    })

    postsEl.innerHTML = `<div class="row g-3">${postHtml}</div>`;

}

const renderPaginate = (totalPages) => {
    // console.log(totalPages);
    const paginationNav = document.querySelector(".pagination-nav");
    paginationNav.innerHTML = `
     <ul class="pagination">
            ${
                currentPage > 1 ? `<li class="page-item"><a class="page-link page-pre" href="#">Previous</a></li>` : ""
            }
            ${[...Array(totalPages).keys()]
                .map(
                    (index) => `<li class="page-item ${+currentPage === index + 1 ? "active" : ""}"><a class="page-link page-number" href="#">${index+1}</a></li>`,
                ).join("")
            }
            ${
                currentPage < totalPages ? `<li class="page-item"><a class="page-link page-next" href="#">Next</a></li>` : ""
            }
    </ul> 
    `

    paginationNav.addEventListener("click", e => {
        e.preventDefault();
        if(e.target.classList.contains("page-number")){
            goPage(+e.target.innerText);
        }
    })

    const goPage = (page) => {
        currentPage = page;
        getPosts({
            _sort: 'id',
            _order: 'desc',
            _page: currentPage,
            _limit: PAGE_LIMIT
        });
    }

    const pagePre = paginationNav.querySelector(".page-pre");
    const pageNext = paginationNav.querySelector(".page-next");
    if(pageNext !== null){
        pageNext.addEventListener("click", () => {
            currentPage++;
            getPosts({
                _sort: 'id',
                _order: 'desc',
                _page: currentPage,
                _limit: PAGE_LIMIT
            });
            console.log(currentPage);
            
        })
    }
    
    if(pagePre !== null){
        pagePre.addEventListener("click", () => {
            currentPage--;
            getPosts({
                _sort: 'id',
                _order: 'desc',
                _page: currentPage,
                _limit: PAGE_LIMIT
            });
            console.log(currentPage);
            
        })
    }

}

const getPosts = async (query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    // console.log(queryString);

    const { data: posts, response } = await client.get("/posts?" + queryString);
    // console.log(posts);
    // console.log(response);

    const totalPosts = response.headers.get('x-total-count');
    const totalPages = Math.ceil(totalPosts / PAGE_LIMIT);
    render(posts);
    renderPaginate(totalPages);
}

let currentPage = 1;
getPosts({
    _sort: 'id',
    _order: 'desc',
    _page: currentPage,
    _limit: PAGE_LIMIT
});


// Tim kiem

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const keywordEl = e.target.querySelector(".keyword");
    const keyword = keywordEl.value;
    console.log(keyword);
    const check = getPosts({
        id: keyword,
    });
    console.log(check);

    keywordEl.value = "";
})