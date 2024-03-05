<script lang="ts">
  import CardComponent from "../../HorizontalCardComponent/CardComponent.svelte";
  interface TabItem {
    tabTitle: string;
    cardHeading: string;
    cardDescription: string;
    cardImage: string;
    cardButtonText: string;
    cardButtonUrl: string;
  }
  export let title: string;
  export let tabItems: TabItem[];
  export let activeTab:number;
</script>

<div class="md:p-2 lg:mx-[65px]">
  <h1
    class="text-3xl ml-6 mb-6 font-bold md:text-4xl title"
    data-testid={title}
  >
    {title}
  </h1>
  <div
    class="flex overflow-x-scroll no-scrollbar md:p-1 lg:pl-12 whitespace-nowrap"
  >
    {#if tabItems && tabItems.length > 0}
      {#each tabItems as tab, index}
       <slot name="horizontal" {tab} {index} />
      {/each}
    {/if}
  </div>
  <div>
        <CardComponent item={tabItems[activeTab]} isActive={activeTab} />
  </div>
</div>
