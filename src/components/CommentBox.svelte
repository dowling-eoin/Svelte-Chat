<script>
export let params;
export let name;
export let date;
export let time;
export let text;
</script>

<style>
    .comment {
        background-color: white;
        border-radius: 10px;
    }
</style>

<div class="comment">
<h1>{name}</h1>
    <h1>{date}</h1>
    <h1>{time}</h1>
    <h1>{text}</h1>
<h1>{params}</h1>
</div>