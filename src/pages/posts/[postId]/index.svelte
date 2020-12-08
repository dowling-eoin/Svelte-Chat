<script>
    import {params} from "@roxi/routify";
    import {url} from '@roxi/routify'
    import apolloClient from "../../../svelte-apollo";
    import {setClient, getClient, query} from "svelte-apollo";
    import {GET_COMMENTS} from "../../../query.js";
    import Comment from "../../../components/Comment.svelte";
    import AddComment from "../../../components/AddComment.svelte";


    setClient(apolloClient);
    const client = getClient();

    let name = "Eoin Dowling";
    let myAvatar = "http://placeimg.com/640/480/cats";

    let comments = query(client, {query: GET_COMMENTS});

    let upDate = (event, result) => {
        result.data.allComments = [...result.data.allComments, event.detail];
    }

</script>


<div class="grid justify-items-center flex flex-col">
    <div>
        <a href={$url('/')}
           class="-left-24 top-16 relative left-0 rounded-md bg-white border-none font-medium text-blue-600 pl-5 pr-5 pb-3 pt-3">Back</a>
        <div class="flex flex-row justify-center bg-red">
            <p class="text-center p-6 text-base leading-6 font-medium sm:text-lg sm:leading-7">Comments</p>
        </div>
        {#await $comments}
            <div>Loading...</div>
        {:then result}
            {#each result.data.allComments as comment (comment.id)}
                <Comment name={comment.name} text={comment.text} date={comment.date} avatar={comment.avatar}/>
            {/each}
            <AddComment on:updateComments={(event) => upDate(event,result)} name={name} avatar={myAvatar}/>
        {/await}
    </div>
</div>

