var posts = [
    {
        title: "Tiêu đề bài viết 1",
        thumbnail: "https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk",
        excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem modi minima maiores nihil perspiciatis. Eaque deserunt quae quod mollitia consequatur doloremque facere alias, accusantium repellat perspiciatis soluta, vero aspernatur?`

    },
    {
        title: "Tiêu đề bài viết 2",
        thumbnail: "https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk",
        excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem modi minima maiores nihil perspiciatis. Eaque deserunt quae quod mollitia consequatur doloremque facere alias, accusantium repellat perspiciatis soluta, vero aspernatur?`

    },
    {
        title: "Tiêu đề bài viết 3",
        thumbnail: "https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk",
        excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem modi minima maiores nihil perspiciatis. Eaque deserunt quae quod mollitia consequatur doloremque facere alias, accusantium repellat perspiciatis soluta, vero aspernatur?`

    },
    {
        title: "Tiêu đề bài viết 4",
        thumbnail: "https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk",
        excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem modi minima maiores nihil perspiciatis. Eaque deserunt quae quod mollitia consequatur doloremque facere alias, accusantium repellat perspiciatis soluta, vero aspernatur?`

    }
];

var html = `    
<div class="posts">
${
    posts.map(function(post,index){
        return `<div class="post-item ${index % 2 !==0 ?"image-right" :"" }">
        <img src="${post.thumbnail}" alt="">
        <div>
            <h2>${post.title}</h2>
            <p>
                ${post.excerpt}
            </p>
        </div>
    </div> <!--End .post-item-->`
    }).join("")
}
</div>`
document.write(html);