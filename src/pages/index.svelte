<script>
    import base64Logo from "./example/_components/assets/logo.js";
    import { url } from '@roxi/routify'
</script>

<!-- routify:option name="example-app" -->

<div style="width: 100%; text-align: center; margin-top: 4rem;">
    <img src="data:image/png;base64, {base64Logo}" alt="logo" style="max-width: 100%; padding-bottom: 128px" />
    <div>
        <b>Chat log 1:</b>
        <br />
        <a href={$url('/posts/1')}>View conversation</a>
    </div>
    <div>
        <b>Chat log 2:</b>
        <br />
        <a href={$url('/posts/2')}>View conversation</a>
    </div>
    <div>
        <b>Chat log 3:</b>
        <br />
        <a href={$url('/posts/3')}>View conversation</a>
    </div>
</div>