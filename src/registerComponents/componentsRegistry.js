// Create an array of your custom compon ents and their properties
  // @ts-ignore

  import Carousel from "../components/Carousel/carousel.svelte";
  // @ts-ignore
  import CardSlider from '../components/CardSlider/SliderCard.svelte'
  // @ts-ignore
  import Header from '../components/Header/Header.svelte'
  
  export const CUSTOM_COMPONENTS = [
    {
      component: Carousel,
      name: "Carousel card",
      inputs: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "cardData",
          type: "list",
          subFields: [
            {
              name: "image",
              type: "file",
            },
            {
              name: "heading",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "linkTitle",
              type: "string",
            },
            {
              name: "link",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      component: CardSlider,
      name: 'custom cardSlider',
      inputs: [
        {
          name: 'headerTitle',
          type: 'string',
        },
        {
          name: 'cardList',
          type: 'list',
          subFields: [
            {
              name: 'cardLink',
              type: 'url',
              defaultValue: '/',
            },
            {
              name: 'cardTitle',
              type: 'string',
              defaultValue: 'Title 1'
            },
            {
              name: 'cardDesc',
              type: 'string',
              defaultValue: 'Desc 1'
            },
            {
              name: 'cardImage',
              type: 'file',
              defaultValue: ''
            },
          ],
        },
      ],
    },
    {
      component: Header,
      name: 'Header',
      inputs: [
        {
          name: 'logoName',
          type: 'string',
        },
        {
          name:'image',
          type: "file",
        },
        {
          name:'navLinks',
          type:'list',
          subFields: [
            {
              name:'title',
              type:'string'
            },
            {
              name:'url',
              type:'string'
            }
          ]
        }
      ]
    }
  ];