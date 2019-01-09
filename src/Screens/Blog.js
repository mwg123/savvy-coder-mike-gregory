function buildPost(post){
    return post.title;
}

export default function Blog(state){
    return state
        .posts
        .map(buildPost)
        .join('');
}