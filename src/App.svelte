<!--src/App.svelte-->
<script>
  import TopBar from "./components/TopBar.svelte";
  import LeftBar from "./components/LeftBar.svelte";
  import Content from "./components/Content.svelte";
</script>

<style>
  .page-wrapper {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-template-rows: 1fr 9fr;
  }
</style>

<div class="page-wrapper">
  <TopBar />
  <LeftBar />
  <Content />
</div>
