<script>
import { params } from "@roxi/routify";
import apolloClient from "../../../svelte-apollo";
import { setClient, getClient, query } from "svelte-apollo";
import { GET_COMMENTS } from "../../../query.js";
import CommentBox from "../../../components/CommentBox.svelte";



setClient(apolloClient);
const client = getClient();
const comments = query(client, {query: GET_COMMENTS});
</script>

{JSON.stringify($params)}

<div>
{#await $comments}
        <div>Loading...</div>
{:then result}
    {#each result.data.allComments as comment (comment.name)}
        <CommentBox name={comment.name} text={comment.text} date={comment.date} time={comment.time} params={JSON.stringify($params)}/>
    {/each}
{/await}
</div>

