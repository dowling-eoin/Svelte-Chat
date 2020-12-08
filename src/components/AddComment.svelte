<script>
export let name;
export let date;
export let text;
export let avatar;
export let comments;


const sendComment = () => {

console.log(comments);
}
</script>



<div class="shadow relative px-4 py-10 bg-white shadow-lg rounded-md sm:p-5 mb-3 w-9/12">
    <img class="-left-20 object-left absolute h-10 w-10 shadow-lg sm:rounded-3xl" src="{avatar}"/>
<h1>{name}</h1>
    <h1>{date}</h1>
    <h1>{text}</h1>
    <input bind:value={text} class="comment-box">
    <button on:click={sendComment}>Add Comment</button>
</div>