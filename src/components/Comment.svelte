<script>
export let name;
export let date;
export let text;
export let avatar;

//let month = date.toDateString();

let formatDate = new Date( date/1000 * 1000);
let dateString = formatDate.toLocaleString('en-En',{month: "short", day: "numeric"});
let timeString = formatDate.toLocaleTimeString('en-US');

</script>
<style>
    .avatar-line{
        position: absolute;
        border: 1px solid #aaaaaa;
        background-color: #aaaaaa;
        top: 69px;
        left: -62px;
        height:65%;
    }
</style>


<div class="shadow relative px-4 py-10 bg-white shadow-lg rounded-md sm:p-5 mb-3 w-9/12">
    <div class="avatar-line"></div>
    <img class="-left-20 object-left absolute h-10 w-10 shadow-lg sm:rounded-3xl" src="{avatar}">
    <div class="object-top font-medium sm:text-lg text-base flex flex-row justify-between">
<p class="object-left leading-6  sm:leading-7">{name}</p>
        <div class="flex flex-row justify-self-end">
    <p class="object-right mr-3 leading-6 sm:leading-7">{dateString}</p>
        <p class="object-right leading-6 sm:leading-7">{timeString}</p>
            </div>
    </div>
    <p class="pt-10 pb-15">{text}</p>
</div>