<script lang="ts">
  import VerticalTabSlot from "./VerticalTabSection/VerticalTabSlot.svelte";
  import HorizontalTabSlot from "./HorizontalTabSection/HorizontalTabSlot.svelte";

  interface CardItem {
    tabCardTitle: string;
    tabCardDescription: string;
    tabCardImage: string;
    tabCardLink: string;
  }
  interface TabItem {
    tabTitle: string;
    tabHeading: string;
    tabDescription: string;
    tabVideoOrImage: string;
    tabButtonText: string;
    tabButtonLink: string;
    tabCardItem: CardItem[];
  }
  interface horizontalTabItem {
    tabTitle: string;
    cardHeading: string;
    cardDescription: string;
    cardImage: string;
    cardButtonText: string;
    cardButtonUrl: string;
  }
  export let title: string;
  export let description: string;
  export let buttonText: string;
  export let buttonLink: string;
  export let verticalTabItems: TabItem[];
  export let horizontalTabItems:horizontalTabItem[];
  let activeTab = 0;
</script>

{#if !(verticalTabItems)}
<HorizontalTabSlot  {title} tabItems={horizontalTabItems} {activeTab} >
  <svelte:fragment let:index={index} let:tab={tab} slot="horizontal">
  <button
    class="{index === activeTab
      ? ' border-color-life-green'
      : 'border-transparent'} p-4 border-b-4 text-[#333] text-lg lg:text-2xl font-semibold btn-class"
    on:click={() => (activeTab = index)}
    data-testid={tab.tabTitle}
  >
    {tab.tabTitle}
  </button></svelte:fragment></HorizontalTabSlot
>
{:else}
<VerticalTabSlot 
  tabItems={verticalTabItems}
  {title}
  {description}
  {buttonText}
  {buttonLink}
  {activeTab}
>
<svelte:fragment  let:tab
let:index slot="vertical">
  <button
    class="{index === activeTab
      ? ' bg-[#cccccc] lg:bg-color-text-gray lg:text-white'
      : ' lg:border-transparent lg:hover:border-[1px] lg:hover:border-black lg:bg-white'} py-2 px-6 lg:px-4 lg:text-left lg:h-[85px] border-[1px] border-solid rounded-md border-color-text-gray text-[#333] text-base lg:text-2xl lg:font-semibold lg:py-4 lg:flex lg:items-center lg:justify-between lg:whitespace-normal"
    on:click={() => (activeTab = index)}
    data-testid={tab.tabTitle}
  >
    <h1 class="lg:mr-4 lg:leading-tight">{tab.tabTitle}</h1>
    <svg
      class="{index === activeTab
        ? ' lg:text-white'
        : 'lg:text-gray-800'} hidden lg:block lg:w-6 lg:h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  </button>
</svelte:fragment>
</VerticalTabSlot>
{/if}