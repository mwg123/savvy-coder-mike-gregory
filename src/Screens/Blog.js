export default function Blog(state){
    return state
        .posts
        .map(buildPost)
        .join('');
}