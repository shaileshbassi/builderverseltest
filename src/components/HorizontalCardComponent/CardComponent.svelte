<script lang="ts">
    interface cardItem {
      cardHeading: string;
      cardDescription: string;
      cardImage: string;
      cardButtonText: string;
      cardButtonUrl: string;
    }
    export let item: cardItem;
    export let isActive: number; // New property to determine if this card is active
</script>
  
<div data-testid='container-div' class={isActive !== undefined ? (isActive>=0 ? "lg:flex lg:px-8 lg:py-2" : "hidden") : "lg:flex lg:flex-row-reverse md:p-2 lg:mx-[65px]"}>
  <img
    src={item?.cardImage}
    class="width:100% object-cover lg:h-[350px] mb-2 lg:w-[50%] mt-8 lg:order-1"
    alt="img"
  />
  <div
    class="md:p-2 lg:mr-10 lg:items-start lg:p-2 flex flex-col items-center lg:w-1/2"
  >
    <h1
      class="text-3xl px-4 lg:text-[44px] lg:leading-[46px] font-medium md:mt-6 lg:mt-12 text-color-text-gray"
    >
      {item?.cardHeading}
    </h1>
    <p
      class="text-base font-normal my-3 py-1 px-3 text-color-text-gray md:text-lg lg:text-lg lg:mt-6"
    >
      {item?.cardDescription}
    </p>
    <div class="flex justify-center lg:justify-start lg:ml-3 mb-6 lg:mt-4">
      <button
        class=" px-2 bg-color-sky-blue rounded border-8 text-lg text-white border-transparent"
      >
        <a href={item?.cardButtonUrl} class="flex gap-1 items-center" data-testid="link">
          {item?.cardButtonText}
          <svg
            fill="#ffffff"
            height="12px"
            width="12px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
            stroke="#ffffff"
            stroke-width="8.6"
            class="mt-[2px]"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
              />
            </g>
          </svg>
        </a>
      </button>
    </div>
  </div>
</div>