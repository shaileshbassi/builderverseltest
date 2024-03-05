<script lang="ts">
// @ts-nocheck 
  import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';

  let slider: any;
  export let headerTitle:string;
  export let cardList:any;
  let translateXValue = 0;

  let currentIndex = 0; // Variable to keep track of current index

  // Function to transition to previous slide
  function goToPrevSlide() {
    if (slider && currentIndex > 0) {
      slider.goToPrev();
      currentIndex--; // Decrement the index
      updateSliderContext();
    }
  }
 
  // Function to transition to next slide
  function goToNextSlide() {
    if (slider && currentIndex < cardList.length - 1) {
      slider.goToNext();
      currentIndex++; // Increment the index
      updateSliderContext();
    }
  }

  const updateSliderContext = () => {
    if (slider) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 786) {
      // For mobile screens
      translateXValue = currentIndex * -272; // Adjust the multiplier as needed
    } else {
      // For desktop screens
      translateXValue = currentIndex * -498; // Adjust the multiplier as needed
    }
    }
  };

</script>

<div class="pb-5 lg:ml-[130px] ml-1" id="description-89967-101582">
  <div class="flex items-end justify-between my-3">
    <div id="tips-info-" class="mx-4">
      <h2 class="font-bold text-2xl leading-loose break-words lg:text-3xl" data-testId="headerTitle">{headerTitle}</h2>
    </div>

    <div class="mr-4 flex justify-center items-center gap-5 text-color-dark-gray">
      <button
          aria-label="goToPrevSlide"
          on:click={goToPrevSlide}
          class="h-[contain] border rounded-full py-1 px-2 hover:bg-gray-600 hover:text-color-white flex flex-col gap-[3px] justify-center items-center"
        >
          <div class="prevButton rotate-[135deg]"></div>
          <div class="prevButton rotate-[45deg]"></div>
        </button>
      <button
        aria-label="goToNextSlide"
        on:click={goToNextSlide}
        class="h-[contain] border rounded-full py-1 px-2  hover:bg-gray-600 hover:text-color-white flex flex-col gap-[3px] justify-center items-center"
      >
      <div class="nextButton rotate-45"></div>
      <div class="nextButton rotate-[135deg]"></div>
      </button>
    </div>
  </div>
  {#if browser}
  <div class="pb-5">
    <Carousel bind:this={slider} particlesToShow={1} 
    particlesToScroll={1} arrows={false} infinite={false} dots={false}>
    <div class="sliderCard flex pb-3 transform" style="transform :translateX({ translateXValue }px)" data-testId="carousel">
    {#each cardList as card, index}
    <div class="sliders pt-2 mb-3 flex-shrink-0 relative aspect-auto" data-testId="slider-card">
      <div
        class="bg-white rounded-lg h-[100%] overflow-hidden relative"
      >
        <div class="w-full">
          <img
            src="{card.cardImage}"
            alt="image{index}"
            data-img-type="image/jpeg"
            style="touch-action: pan-y;"
            class="w-full object-full aspect-[5/3]"
          />
        </div>
        <div class="subcontainer">
          <h2
            data-testId={card.cardTitle}
            class="mt-3 mx-3 mb-2 font-bold text-xl leading-tight break-words lg:mt-6 lg:mx-9 lg:text-xl"
          >
            {card.cardTitle}
          </h2>
          <div
            class="slide-description mx-4 my-2 font-normal text-base leading-relaxed break-words break-all lg:mx-9 lg:my-3 lg:text-lg"
          >
            {card.cardDesc}
          </div>
          <div
            class="mx-4 my-2 pb-2 font-normal text-sm leading-relaxed break-words break-all lg:mb-3 lg:mx-9 lg:text-base"
          >
            <a href="{card.cardLink}" class="text-color-sky-blue">
              <span>Read More &#11100</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/each}
    </div>
  </Carousel>
  </div>
    {/if}
</div>


<style>
    .sliders{
        width: 240px !important;
        box-shadow: 0 12px 20px -12px rgba(51,51,51,.36);
        max-width: unset !important;
        min-width: unset !important;
        margin: 0 16px;
    }

    .sliderCard{
      transition: .5s;
      transition-timing-function: ease-in-out;
    }

    .nextButton{
        border-bottom:1.5px solid ;
        width: 10px;
        height: 10px;
        margin-left: 7px;
    }
    .prevButton{
        border-top:1.5px solid  ;
        width: 10px;
        height: 10px;
        margin-right: 7px;
    }

    @media (min-width: 786px) {
      .sliderCard{
        transition: .5s;
        transition-timing-function: ease-in-out;
      }
        .sliders{
            width: 450px !important;
            box-shadow: 0 12px 30px -12px rgba(51,51,51,.36);
            transition: .25s;
            margin-left: 24px;
        }
        .sliders:hover{
          transform: translateY(-8px);
          box-shadow: 0 20px 36px -20px rgba(51,51,51,.72);
        }
    }
</style>