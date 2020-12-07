<script>
export let params;
export let name;
export let date;
export let text;

export let comments;


const sendComment = () => {

console.log(comments);
}
</script>

<style>
    .comment {
        background-color: white;
        border-radius: 10px;
    }
    .comment-box {

    }
</style>

<div class="comment">
<h1>{name}</h1>
    <h1>{date}</h1>
    <h1>{text}</h1>
<h1>{params}</h1>
    <input bind:value={text} class="comment-box">
    <button on:click={sendComment}>Add Comment</button>
</div>