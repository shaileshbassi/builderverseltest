<script lang="ts">
    import VerticalTabCard from "./VerticalTabCard.svelte";
  
      interface CardItem{
          tabCardTitle:string;
          tabCardDescription:string;
          tabCardImage:string;
          tabCardLink:string;
      } 
      interface TabItem {
        tabTitle: string;
        tabHeading: string;
        tabDescription: string;
        tabVideoOrImage: string;
        tabButtonText: string;
        tabButtonLink: string;
        tabCardItem:CardItem[];
      }
      export let title: string;
      export let description: string;
      export let buttonText: string;
      export let buttonLink: string;
      export let tabItems: TabItem[];
      export let activeTab:number;
    </script>
    
    <div class="px-2 sm:p-6 lg:px-12 lg:py-6 lg:mx-[65px] bg-[#f4f4f4] rounded-lg">
      <div class="lg:flex lg:gap-5">
      <div>
      <h1 class=" text-3xl text-color-text-gray mb-6 sm:pr-[3.8125rem] leading-tight font-bold md:text-4xl">{title}</h1>
      <p class="hidden lg:block lg:text-xl lg:font-normal">{description}</p>
    </div>
      <div class="mt-6">
      <button class=" border-solid border-2 border-color-dark-gray rounded-md py-2 px-6 hover:bg-[#cccccc] lg:px-4"><a href={buttonLink} class="text-color-text-gray font-semibold flex items-center justify-between text-left gap-4" data-testid="btn-class">{buttonText}<svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
      </svg></a></button>
      </div>
    </div>
    <div class="lg:flex lg:gap-8">
      <div class="flex gap-[0.75rem] overflow-x-scroll no-scrollbar md:p-1  whitespace-nowrap my-8 lg:flex-col  ">
        {#if tabItems && tabItems.length > 0}
          {#each tabItems as tab, index}
            <slot name="vertical" {tab} {index}/>
          {/each}
        {/if}
      </div>
      <div class="lg:w-[65%] lg:bg-white lg:rounded-lg lg:my-8">
        {#if tabItems && tabItems.length > 0}
            <VerticalTabCard item={tabItems[activeTab]}  />
        {/if}
      </div>
    </div>
    </div>
    