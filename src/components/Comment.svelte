<script>
export let params;
export let name;
export let date;
export let text;

let formatDate = new Date( date/1000 * 1000);

</script>

<style>
    .comment {
        background-color: white;
        border-radius: 10px;
    }
</style>

<div class="comment">
<h1>{name}</h1>
    <h1>{formatDate}</h1>
    <h1>{date}</h1>
    <h1>{text}</h1>
<h1>{params}</h1>
</div>