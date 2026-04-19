let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPost(postObject){
    const documentBody = document.querySelector('body');
    documentBody.innerHTML += 
    `<section>
            <img src='${postObject.avatar}' class='pfp post-avatar' alt="${postObject.username}"'s profile picture>
            <p class='post-user-info'><span class='bold'>${postObject.name}</span><br><span class='location'>${postObject.location}</span></p>
            <img src='${postObject.post}' class='post'>
            <img src='images/icon-heart.png' alt='heart' class='icon' id='${postObject.username}-${postObject.post}-likes' onclick="incrementLikes('${postObject.username}-${postObject.post}')">
            <img src='images/icon-comment.png' alt='comment'class='icon'>
            <img src='images/icon-dm.png' alt='direct message' class='icon'>
            <p class='bold post-text' id='${postObject.username}-${postObject.post}'>${postObject.likes}</p>
            <p class='post-text'><span class='bold'>${postObject.username}</span> ${postObject.comment}</p>
        </section>`
}

for(let i = 0; i < posts.length; i++){
    renderPost(posts[i]);
}

function incrementLikes(postName){
    const likeCountEl = document.getElementById(postName);
    likeCountEl.textContent = parseInt(likeCountEl.textContent) + 1;
    const likeButton = document.getElementById(postName+"-likes");
    likeButton.setAttribute("onclick", `decrementLikes('${postName}')`);
}

function decrementLikes(postName){
    const likeCountEl = document.getElementById(postName);
    likeCountEl.textContent = parseInt(likeCountEl.textContent) - 1;
    const likeButton = document.getElementById(postName+"-likes");
    likeButton.setAttribute("onclick", `incrementLikes('${postName}')`);
}

