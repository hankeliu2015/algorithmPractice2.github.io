

// -----------
// $(() => {
//   bindClickHandlers();
// })

// const bindClickHandlers = () => {
//   $('.all_post').on('click', (e) =>{
//     e.preventDefault();
//     fetch('/posts.json')
//     .then((res) => res.json)
//     .then(posts =>
//       $('#app-container').html('')
//       posts.forEach((post) => {
//         let newPost = new Post(post)
//         let postHtml = newPost.formatIndex()
//         $('app-container').append(postHtml)
//       })
//     )
//   })
//
//   $(".show_link").on('click', (e) => {
//     e.preventDefault();
//     fetch(`/posts/json`)
//   })
// }
//
// function Post(post) {
//   this.id = post.id
//   this.title = post.title
//   this.content = post.Content
//   this.user = post.User
//   this.comments = post.comments
// }
//
// Post.prototype.formatIndex = function(){
//   let postHtml = `
//     <a href="/posts/${this.id}" class="show_link"><h1>${this.title}<h1></a>
//   `
// }
