// Create an array of your custom compon ents and their properties

import TabSection from "../components/TabComponent/TabSection.svelte";

  // @ts-ignore
  export const CUSTOM_COMPONENTS = [
    {
      component: TabSection,
      name: "Tab Section",
      inputs: [
        {
          name: "title",
          type: "string",
        },
        {
          name:"type",
          type:"enum",
          enum: ['Horizontal', 'Vertical']
        },
        {
          name: "description",
          type: "string",
          showIf:  `options.get('type') === 'Vertical'`,
        },
        {
          name: "buttonText",
          type: "string",
          showIf:  `options.get('type') === 'Vertical'`,
        },
        {
          name: "buttonLink",
          type: "string",
          showIf:  `options.get('type') === 'Vertical'`,
        },
        {
          name: "verticalTabItems",
          type: "list",
          showIf:  `options.get('type') === 'Vertical'`,
          subFields: [
            {
              name: "tabTitle",
              type: "string",
            },
            {
              name: "tabHeading",
              type: "string",
            },
            {
              name: "tabDescription",
              type: "string",
            },
            {
              name: "tabVideoOrImage",
              type: "file",
              allowedFileTypes: ["jpeg", "png", "jpg", "svg", "mp4"],
            },
            {
              name: "tabButtonText",
              type: "string",
            },
            {
              name: "tabButtonLink",
              type: "string",
            },
            {
              name: "tabCardItem",
              type: "list",
              subFields: [
                {
                  name: "tabCardTitle",
                  type: "string",
                },
                {
                  name: "tabCardDescription",
                  type: "string",
                },
                {
                  name: "tabCardImage",
                  type: "file",
                  allowedFileTypes: ["jpeg", "png", "jpg", "svg"],
                },
                {
                  name: "tabCardLink",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "horizontalTabItems",
          type: "list",
          showIf:  `options.get('type') === 'Horizontal'`,
          subFields: [
            {
              name: "tabTitle",
              type: "string",
            },
            {
              name: "cardHeading",
              type: "string",
            },
            {
              name: "cardDescription",
              type: "string",
            },
            {
              name: "cardImage",
              type: "file",
              allowedFileTypes: ["jpeg", "png", "jpg", "svg"],
            },
            {
              name: "cardButtonText",
              type: "string",
            },
            {
              name: "cardButtonUrl",
              type: "string",
            },
          ],
        },
      ],
    },
  ];