const data = {
  blogTitle: '',
  blogText: ''
}

const apiURL = 'http://localhost:3000'

const form = document.querySelector('.form'),
formInput = document.querySelector('.form-input'),
formTitle = document.querySelector('.form-title'),
blogPosts = document.querySelector('.blog-posts');

document.addEventListener('DOMContentLoaded', () => {

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        data.blogText = formInput.value
        data.blogTitle = formTitle.value

        const newPostData = {
            id: 3,
            title: data.blogTitle,
            message: data.blogText
        }
        // console.log(JSON.stringify(newPostData))
        addPost(newPostData)
        .then(newPost => {
            renderSinglePost(newPost.blogdata)
        })
        // const newPostDiv = document.createElement('div')
        // newPostDiv.innerHTML = 
        // `
        //   <h3>${data.blogTitle}</h3>
        //   <p>${data.blogText}</p>
        // `
        // const fragment = document.createDocumentFragment()
        // fragment.appendChild(newPostDiv)
        // blogPosts.appendChild(newPostDiv)
      })

    fetch(apiURL)
    .then(response => response.json())
    .then(dataObject => {
        renderAllPosts(dataObject.data[0].posts)
    })
})

const renderAllPosts = postsArray => {
    postsArray.forEach(renderSinglePost)
}

const renderSinglePost = postItem => {
    const newPostDiv = document.createElement('div')
    newPostDiv.innerHTML = 
    `
        <h3>${postItem.title}</h3>
        <p>${postItem.message}</h3>
    `
    const fragment = document.createDocumentFragment()
    fragment.appendChild(newPostDiv)
    blogPosts.appendChild(fragment)
}

const addPost = (data) => {
    return fetch(`${apiURL}/post`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(response => response.json())
}

