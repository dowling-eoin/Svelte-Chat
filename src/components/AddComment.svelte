<script>
    export let text;
    export let name;
    export let avatar;
    export let placeholder = "Add the comment here...";
    import {createEventDispatcher} from 'svelte';


    const dispatch = createEventDispatcher();


    const sendComment = () => {
        dispatch('updateComments', {
            id: JSON.stringify(Math.random()),
            name: name,
            date: new Date(),
            text: text,
            avatar: avatar
        });
    };

</script>


<div class="shadow w-full relative px-4 py-10 bg-white shadow-lg rounded-md sm:p-5 mb-3 w-9/12">
    <img class="-left-20 object-left absolute h-10 w-10 shadow-lg sm:rounded-3xl" src="{avatar}"/>
    <textarea bind:value={text} placeholder="{placeholder}"
              class="focus:outline-none h-24 w-full font-medium border-none placeholder-gray-500 placeholder-opacity-25"/>
    <div class="flex flex-row border-t border-solid border-light-grey-200">
        <button class="mt-3 border-none font-medium mr-28">Media</button>
        <button class="mt-3 border-none font-medium text-blue-600">Add a file...</button>
    </div>
</div>
<button on:click={sendComment}>Add Comment</button>