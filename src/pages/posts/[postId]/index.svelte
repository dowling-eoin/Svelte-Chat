<script>
import { params } from "@roxi/routify";
import apolloClient from "../../../svelte-apollo";
import { setClient, getClient, query } from "svelte-apollo";
import { GET_COMMENTS } from "../../../query.js";
import Comment from "../../../components/Comment.svelte";
import AddComment from "../../../components/AddComment.svelte";



setClient(apolloClient);
const client = getClient();

//console.log(comments.result);
let text = "example";
let name = "My name";


let comments = query(client, {query: GET_COMMENTS});


</script>

{JSON.stringify($params)}


<div>
{#await $comments}
        <div>Loading...</div>
{:then result}
    {#each result.data.allComments as comment (comment.name)}
        <Comment name={comment.name} text={comment.text} date={comment.date} params={JSON.stringify($params)}/>
    {/each}
    <AddComment comments={result} name={name} text={text} params={JSON.stringify($params)}/>
{/await}
</div>

