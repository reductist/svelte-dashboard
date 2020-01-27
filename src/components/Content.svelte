<style>
  .content {
    display: grid;
    background: #eee;
    grid-row: 2;
    grid-column: 2;
    grid-template-columns: 0.1fr 1fr 0.1fr 1fr 0.1fr;
    grid-template-rows: 0.1fr 1fr 0.1fr 1fr 0.1fr;
  }
  .content-area {
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: center;
  }
  .content-area-tl {
    grid-column: 2;
    grid-row: 2;
  }
  .content-area-tr {
    grid-column: 4;
    grid-row: 2;
  }
  .content-area-bl {
    grid-column: 2;
    grid-row: 4;
  }
  .content-area-br {
    grid-column: 4;
    grid-row: 4;
  }
</style>

<div class="content">
  <div class="content-area content-area-tl">content top-left</div>
  <div class="content-area content-area-tr">content top-right</div>
  <div class="content-area content-area-bl">content bottom-left</div>
  <div class="content-area content-area-br">content bottom-right</div>
</div>
