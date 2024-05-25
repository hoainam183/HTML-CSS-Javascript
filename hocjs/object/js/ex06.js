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
        return `<div class="post-item">
        <img src="https://fastly.picsum.photos/id/654/500/300.jpg?hmac=jo6FNX0jjeQSIThh21j2318PNUkpj-QdzBw75FTa1Pk" alt="">
        <div>
            <h2>Tiêu đề bài viết 1</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem modi minima maiores nihil perspiciatis. Eaque deserunt quae quod mollitia consequatur doloremque facere alias, accusantium repellat perspiciatis soluta, vero aspernatur?
            </p>
        </div>
    </div> <!--End .post-item-->`
    })
}
</div>`
document.write(html);