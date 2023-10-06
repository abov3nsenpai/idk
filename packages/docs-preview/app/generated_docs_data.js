export default [
  {
    name: 'AddToCartButton',
    category: 'components',
    isVisualComponent: false,
    related: [],
    description:
      'The `AddToCartButton` component renders a button that adds an item to the cart when pressed.\n\nIt must be a descendent of the `CartProvider` component.',
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {AddToCartButton} from '@shopify/hydrogen-react';\n\nexport default function ProductAddToCartButton({product}) {\n  const variantId = product.variants[0].id;\n\n  if (!variantId) {\n    return null;\n  }\n\n  return &lt;AddToCartButton variantId={variantId} /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {AddToCartButton} from '@shopify/hydrogen-react';\nimport type {Product} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport default function ProductAddToCartButton({product}: {product: Product}) {\n  const variantId = product.variants[0].id;\n\n  if (!variantId) {\n    return null;\n  }\n\n  return &lt;AddToCartButton variantId={variantId} /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'AddToCartButtonPropsForDocs',
        typeDefinitions: {
          AddToCartButtonPropsForDocs: {
            filePath: '/AddToCartButton.tsx',
            name: 'AddToCartButtonPropsForDocs',
            description: '',
            members: [
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'attributes',
                value: '{ key: string; value: string; }[]',
                description:
                  'An array of cart line attributes that belong to the item being added to the cart.',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantId',
                value: 'string',
                description: 'The ID of the variant.',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'quantity',
                value: 'number',
                description: 'The item quantity.',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'accessibleAddingToCartLabel',
                value: 'string',
                description:
                  'The text that is announced by the screen reader when the item is being added to the cart. Used for accessibility purposes only and not displayed on the page.',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'sellingPlanId',
                value: 'string',
                description: 'The selling plan ID of the subscription variant',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'as',
                value: 'AsType',
                description:
                  'Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a `button` element, or a component that renders an underlying button.',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'ReactNode',
                description: 'Any ReactNode elements.',
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onClick',
                value:
                  '(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void',
                description:
                  'Click event handler. Default behaviour triggers unless prevented',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'defaultOnClick',
                value:
                  '(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void',
                description: 'A default `onClick` behavior',
                isOptional: true,
              },
              {
                filePath: '/AddToCartButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'buttonRef',
                value: 'Ref<HTMLButtonElement>',
                description: 'A `ref` to the underlying button',
                isOptional: true,
              },
            ],
            value:
              "export interface AddToCartButtonPropsForDocs<\n  AsType extends React.ElementType = 'button',\n> extends AddToCartButtonPropsBase,\n    CustomBaseButtonProps<AsType> {}",
          },
        },
      },
    ],
  },
  {
    name: 'BuyNowButton',
    category: 'components',
    isVisualComponent: false,
    related: [],
    description:
      'The `BuyNowButton` component renders a button that adds an item to the cart and redirects the customer to checkout.\n\nMust be a child of a `CartProvider` component.\n  ',
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {BuyNowButton} from '@shopify/hydrogen-react';\n\nexport default function ProductBuyNowButton({product}) {\n  const variantId = product.variants[0].id;\n\n  if (!variantId) {\n    return null;\n  }\n\n  return &lt;BuyNowButton variantId={variantId} /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {BuyNowButton} from '@shopify/hydrogen-react';\nimport type {Product} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport default function ProductBuyNowButton({product}: {product: Product}) {\n  const variantId = product.variants[0].id;\n\n  if (!variantId) {\n    return null;\n  }\n\n  return &lt;BuyNowButton variantId={variantId} /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'BuyNowButtonPropsForDocs',
        typeDefinitions: {
          BuyNowButtonPropsForDocs: {
            filePath: '/BuyNowButton.tsx',
            name: 'BuyNowButtonPropsForDocs',
            description: '',
            members: [
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'quantity',
                value: 'number',
                description: 'The item quantity. Defaults to 1.',
                isOptional: true,
              },
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantId',
                value: 'string',
                description: 'The ID of the variant.',
              },
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'attributes',
                value: '{ key: string; value: string; }[]',
                description:
                  'An array of cart line attributes that belong to the item being added to the cart.',
                isOptional: true,
              },
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'as',
                value: 'AsType',
                description:
                  'Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a `button` element, or a component that renders an underlying button.',
                isOptional: true,
              },
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'ReactNode',
                description: 'Any ReactNode elements.',
              },
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onClick',
                value:
                  '(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void',
                description:
                  'Click event handler. Default behaviour triggers unless prevented',
                isOptional: true,
              },
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'defaultOnClick',
                value:
                  '(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void',
                description: 'A default `onClick` behavior',
                isOptional: true,
              },
              {
                filePath: '/BuyNowButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'buttonRef',
                value: 'Ref<HTMLButtonElement>',
                description: 'A `ref` to the underlying button',
                isOptional: true,
              },
            ],
            value:
              "export interface BuyNowButtonPropsForDocs<\n  AsType extends React.ElementType = 'button',\n> extends BuyNowButtonPropsBase,\n    CustomBaseButtonProps<AsType> {}",
          },
        },
      },
    ],
  },
  {
    name: 'CartCheckoutButton',
    category: 'components',
    isVisualComponent: false,
    related: [],
    description:
      'The `CartCheckoutButton` component renders a button that redirects to the checkout URL for the cart.\n\nMust be a descendent of a `CartProvider` component.\n  ',
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {CartCheckoutButton} from '@shopify/hydrogen-react';\n\nexport default function ProductCartCheckoutButton() {\n  return &lt;CartCheckoutButton /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {CartCheckoutButton} from '@shopify/hydrogen-react';\n\nexport default function ProductCartCheckoutButton() {\n  return &lt;CartCheckoutButton /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'CartCheckoutButtonPropsForDocs',
        typeDefinitions: {
          CartCheckoutButtonPropsForDocs: {
            filePath: '/CartCheckoutButton.tsx',
            name: 'CartCheckoutButtonPropsForDocs',
            description: '',
            members: [
              {
                filePath: '/CartCheckoutButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'as',
                value: 'AsType',
                description:
                  'Provide a React element or component to render as the underlying button. Note: for accessibility compliance, almost always you should use a `button` element, or a component that renders an underlying button.',
                isOptional: true,
              },
              {
                filePath: '/CartCheckoutButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'ReactNode',
                description: 'Any ReactNode elements.',
              },
              {
                filePath: '/CartCheckoutButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'defaultOnClick',
                value:
                  '(event?: MouseEvent<HTMLButtonElement, MouseEvent>) => boolean | void',
                description: 'A default `onClick` behavior',
                isOptional: true,
              },
              {
                filePath: '/CartCheckoutButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'buttonRef',
                value: 'Ref<HTMLButtonElement>',
                description: 'A `ref` to the underlying button',
                isOptional: true,
              },
            ],
            value:
              "export interface CartCheckoutButtonPropsForDocs<\n  AsType extends React.ElementType = 'button',\n> extends Omit<CustomBaseButtonProps<AsType>, 'onClick'> {}",
          },
        },
      },
    ],
  },
  {
    name: 'CartCost',
    category: 'components',
    isVisualComponent: false,
    related: [],
    description:
      '\n    The `CartCost` component renders a `Money` component with the cost associated with the `amountType` prop.\n\nIf no `amountType` prop is specified, then it defaults to `totalAmount`.\n\nDepends on `useCart()` and must be a child of `<CartProvider/>`\n  ',
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {CartCost} from \'@shopify/hydrogen-react\';\n\nexport default function CartTotals() {\n  return (\n    &lt;&gt;\n      &lt;div&gt;\n        Subtotal: &lt;CartCost amountType="subtotal" /&gt;\n      &lt;/div&gt;\n      &lt;div&gt;\n        Tax: &lt;CartCost amountType="tax" /&gt;\n      &lt;/div&gt;\n      &lt;div&gt;\n        Total: &lt;CartCost /&gt;\n      &lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: 'import {CartCost} from \'@shopify/hydrogen-react\';\n\nexport default function CartTotals() {\n  return (\n    &lt;&gt;\n      &lt;div&gt;\n        Subtotal: &lt;CartCost amountType="subtotal" /&gt;\n      &lt;/div&gt;\n      &lt;div&gt;\n        Tax: &lt;CartCost amountType="tax" /&gt;\n      &lt;/div&gt;\n      &lt;div&gt;\n        Total: &lt;CartCost /&gt;\n      &lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n',
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'CartCostPropsForDocs',
        typeDefinitions: {
          CartCostPropsForDocs: {
            filePath: '/CartCost.tsx',
            name: 'CartCostPropsForDocs',
            description: '',
            members: [
              {
                filePath: '/CartCost.tsx',
                syntaxKind: 'PropertySignature',
                name: 'amountType',
                value: '"total" | "subtotal" | "tax" | "duty"',
                description:
                  'A string type that defines the type of cost needed. Valid values: `total`, `subtotal`, `tax`, or `duty`.',
                isOptional: true,
              },
              {
                filePath: '/CartCost.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'React.ReactNode',
                description: 'Any `ReactNode` elements.',
                isOptional: true,
              },
              {
                filePath: '/CartCost.tsx',
                syntaxKind: 'PropertySignature',
                name: 'as',
                value: 'ComponentGeneric',
                description:
                  'An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`.',
                isOptional: true,
              },
              {
                filePath: '/CartCost.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutCurrency',
                value: 'boolean',
                description:
                  'Whether to remove the currency symbol from the output.',
                isOptional: true,
              },
              {
                filePath: '/CartCost.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutTrailingZeros',
                value: 'boolean',
                description:
                  'Whether to remove trailing zeros (fractional money) from the output.',
                isOptional: true,
              },
              {
                filePath: '/CartCost.tsx',
                syntaxKind: 'PropertySignature',
                name: 'measurement',
                value:
                  'PartialDeep<UnitPriceMeasurement, {recurseIntoArrays: true}>',
                description:
                  'A [UnitPriceMeasurement object](https://shopify.dev/api/storefront/2023-07/objects/unitpricemeasurement).',
                isOptional: true,
              },
              {
                filePath: '/CartCost.tsx',
                syntaxKind: 'PropertySignature',
                name: 'measurementSeparator',
                value: 'ReactNode',
                description:
                  "Customizes the separator between the money output and the measurement output. Used with the `measurement` prop. Defaults to `'/'`.",
                isOptional: true,
              },
            ],
            value:
              "export interface CartCostPropsForDocs<AsType extends React.ElementType = 'div'>\n  extends Omit<MoneyPropsBase<AsType>, 'data'>,\n    CartCostPropsBase {}",
          },
        },
      },
    ],
  },
  {
    name: 'CartLineProvider',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'useCartLine',
        type: 'hooks',
        url: '/api/hydrogen-react/hooks/useCartLine',
      },
    ],
    description:
      '\n    The `CartLineProvider` component creates a context for using a cart line.\n  ',
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';\n\nexport function CartWrapper({cart}) {\n  const firstCartLine = cart.lines.nodes[0];\n  return (\n    &lt;CartLineProvider line={firstCartLine}&gt;\n      &lt;CartLineQuantity /&gt;\n    &lt;/CartLineProvider&gt;\n  );\n}\n\nfunction CartLineQuantity() {\n  const cartLine = useCartLine();\n\n  return &lt;div&gt;{cartLine.quantity}&lt;/div&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';\nimport type {Cart} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function CartWrapper({cart}: {cart: Cart}) {\n  const firstCartLine = cart.lines.nodes[0];\n  return (\n    &lt;CartLineProvider line={firstCartLine}&gt;\n      &lt;CartLineQuantity /&gt;\n    &lt;/CartLineProvider&gt;\n  );\n}\n\nfunction CartLineQuantity() {\n  const cartLine = useCartLine();\n\n  return &lt;div&gt;{cartLine.quantity}&lt;/div&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'CartLineProviderProps',
        typeDefinitions: {
          CartLineProviderProps: {
            filePath: '/CartLineProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'CartLineProviderProps',
            value:
              '{\n  /** Any `ReactNode` elements. */\n  children: ReactNode;\n  /** A cart line object. */\n  line: CartLinePartialDeep;\n}',
            description: '',
            members: [
              {
                filePath: '/CartLineProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'ReactNode',
                description: 'Any `ReactNode` elements.',
              },
              {
                filePath: '/CartLineProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'line',
                value: 'CartLinePartialDeep',
                description: 'A cart line object.',
              },
            ],
          },
          CartLinePartialDeep: {
            filePath: '/CartLineProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'CartLinePartialDeep',
            value: 'CartLinePartialDeep',
            description: '',
          },
        },
      },
    ],
  },
  {
    name: 'CartLineQuantity',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'useCartLine',
        type: 'gear',
        url: '/api/hydrogen-react/hooks/useCartLine',
      },
      {
        name: 'CartLineQuantityAdjustButton',
        type: 'component',
        url: '/api/hydrogen-react/components/CartLineQuantityAdjustButton',
      },
    ],
    description:
      "\n    The `<CartLineQuantity/>` component renders a `span` (or another element / component that can be customized by the `as` prop) with the cart line's quantity.\n\nIt must be a descendent of a `<CartLineProvider/>` component, and uses the `useCartLine()` hook internally.\n  ",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {CartLineQuantity, CartLineProvider} from '@shopify/hydrogen-react';\n\nexport function Example({line}) {\n  return (\n    &lt;CartLineProvider line={line}&gt;\n      &lt;CartLineQuantity /&gt;\n    &lt;/CartLineProvider&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {CartLineQuantity, CartLineProvider} from '@shopify/hydrogen-react';\nimport type {CartLine} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function Example({line}: {line: CartLine}) {\n  return (\n    &lt;CartLineProvider line={line}&gt;\n      &lt;CartLineQuantity /&gt;\n    &lt;/CartLineProvider&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'CartLineQuantityBaseProps',
        typeDefinitions: {
          CartLineQuantityBaseProps: {
            filePath: '/CartLineQuantity.tsx',
            name: 'CartLineQuantityBaseProps',
            description: '',
            members: [
              {
                filePath: '/CartLineQuantity.tsx',
                syntaxKind: 'PropertySignature',
                name: 'as',
                value: 'ComponentGeneric',
                description:
                  'An HTML tag or React Component to be rendered as the base element wrapper. The default is `span`.',
                isOptional: true,
              },
            ],
            value:
              "interface CartLineQuantityBaseProps<\n  ComponentGeneric extends ElementType = 'span',\n> {\n  /** An HTML tag or React Component to be rendered as the base element wrapper. The default is `span`. */\n  as?: ComponentGeneric;\n}",
          },
        },
      },
    ],
  },
  {
    name: 'CartLineQuantityAdjustButton',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'useCartLine',
        type: 'gear',
        url: '/api/hydrogen-react/hooks/useCartLine',
      },
      {
        name: 'CartLineQuantity',
        type: 'component',
        url: '/api/hydrogen-react/components/CartLineQuantity',
      },
    ],
    description:
      "\n    The `<CartLineQuantityAdjustButton/>` component renders a `span` (or another element / component that can be customized by the `as` prop) with the cart line's quantity.\n\nIt must be a descendent of a `<CartLineProvider/>` component, and uses the `useCartLine()` hook internally.\n  ",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {\n  CartLineQuantityAdjustButton,\n  CartLineProvider,\n  CartProvider,\n} from \'@shopify/hydrogen-react\';\n\nexport function Example({line}) {\n  return (\n    &lt;CartProvider&gt;\n      &lt;CartLineProvider line={line}&gt;\n        &lt;CartLineQuantityAdjustButton adjust="increase"&gt;\n          Increase\n        &lt;/CartLineQuantityAdjustButton&gt;\n        &lt;CartLineQuantityAdjustButton adjust="decrease"&gt;\n          Decrease\n        &lt;/CartLineQuantityAdjustButton&gt;\n        &lt;CartLineQuantityAdjustButton adjust="remove"&gt;\n          Remove\n        &lt;/CartLineQuantityAdjustButton&gt;\n      &lt;/CartLineProvider&gt;\n    &lt;/CartProvider&gt;\n  );\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: 'import {\n  CartLineQuantityAdjustButton,\n  CartLineProvider,\n  CartProvider,\n} from \'@shopify/hydrogen-react\';\nimport type {CartLine} from \'@shopify/hydrogen-react/storefront-api-types\';\n\nexport function Example({line}: {line: CartLine}) {\n  return (\n    &lt;CartProvider&gt;\n      &lt;CartLineProvider line={line}&gt;\n        &lt;CartLineQuantityAdjustButton adjust="increase"&gt;\n          Increase\n        &lt;/CartLineQuantityAdjustButton&gt;\n        &lt;CartLineQuantityAdjustButton adjust="decrease"&gt;\n          Decrease\n        &lt;/CartLineQuantityAdjustButton&gt;\n        &lt;CartLineQuantityAdjustButton adjust="remove"&gt;\n          Remove\n        &lt;/CartLineQuantityAdjustButton&gt;\n      &lt;/CartLineProvider&gt;\n    &lt;/CartProvider&gt;\n  );\n}\n',
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'CartLineQuantityAdjustButtonBaseProps',
        typeDefinitions: {
          CartLineQuantityAdjustButtonBaseProps: {
            filePath: '/CartLineQuantityAdjustButton.tsx',
            name: 'CartLineQuantityAdjustButtonBaseProps',
            description: '',
            members: [
              {
                filePath: '/CartLineQuantityAdjustButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'adjust',
                value: '"remove" | "increase" | "decrease"',
                description:
                  "The adjustment for a cart line's quantity. Valid values: `increase` (default), `decrease`, or `remove`.",
                isOptional: true,
              },
            ],
            value:
              "interface CartLineQuantityAdjustButtonBaseProps {\n  /** The adjustment for a cart line's quantity. Valid values: `increase` (default), `decrease`, or `remove`. */\n  adjust?: 'increase' | 'decrease' | 'remove';\n}",
          },
        },
      },
    ],
  },
  {
    name: 'CartProvider',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'useCart',
        type: 'hooks',
        url: '/api/hydrogen-react/hooks/useCart',
      },
      {
        name: 'ShopifyProvider',
        type: 'components',
        url: '/api/hydrogen-react/components/shopifyprovider',
      },
    ],
    description:
      "\n    The `CartProvider` component synchronizes the state of the Storefront API Cart and a customer's cart, and allows you to more easily manipulate the cart by adding, removing, and updating it. It could be placed at the root of your app so that your whole app is able to use the `useCart()` hook anywhere.\n\nThere are props that trigger when a call to the Storefront API is made, such as `onLineAdd={}` when a line is added to the cart. There are also props that trigger when a call to the Storefront API is completed, such as `onLineAddComplete={}` when the fetch request for adding a line to the cart completes.\n\nThe `CartProvider` component must be a descendant of the `ShopifyProvider` component\n.\n  ",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {CartProvider, useCart} from '@shopify/hydrogen-react';\n\nexport function App() {\n  &lt;CartProvider\n    onLineAdd={() =&gt; {\n      console.log('a line is being added');\n    }}\n    onLineAddComplete={() =&gt; {\n      console.log('a line has been added');\n    }}\n  &gt;\n    &lt;CartComponent /&gt;\n  &lt;/CartProvider&gt;;\n}\n\nfunction CartComponent() {\n  const {linesAdd, status} = useCart();\n\n  const merchandise = {merchandiseId: '{id-here}'};\n\n  return (\n    &lt;div&gt;\n      Cart Status: {status}\n      &lt;button onClick={() =&gt; linesAdd([merchandise])}&gt;Add Line&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {CartProvider, useCart} from '@shopify/hydrogen-react';\nimport type {CartLineInput} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function App() {\n  &lt;CartProvider\n    onLineAdd={() =&gt; {\n      console.log('a line is being added');\n    }}\n    onLineAddComplete={() =&gt; {\n      console.log('a line has been added');\n    }}\n  &gt;\n    &lt;CartComponent /&gt;\n  &lt;/CartProvider&gt;;\n}\n\nfunction CartComponent() {\n  const {linesAdd, status} = useCart();\n\n  const merchandise: CartLineInput = {merchandiseId: '{id-here}'};\n\n  return (\n    &lt;div&gt;\n      Cart Status: {status}\n      &lt;button onClick={() =&gt; linesAdd([merchandise])}&gt;Add Line&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'CartProviderProps',
        typeDefinitions: {
          CartProviderProps: {
            filePath: '/CartProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'CartProviderProps',
            value:
              "{\n  /** Any `ReactNode` elements. */\n  children: React.ReactNode;\n  /**  Maximum number of cart lines to fetch. Defaults to 250 cart lines. */\n  numCartLines?: number;\n  /** A callback that is invoked when the process to create a cart begins, but before the cart is created in the Storefront API. */\n  onCreate?: () => void;\n  /** A callback that is invoked when the process to add a line item to the cart begins, but before the line item is added to the Storefront API. */\n  onLineAdd?: () => void;\n  /** A callback that is invoked when the process to remove a line item to the cart begins, but before the line item is removed from the Storefront API. */\n  onLineRemove?: () => void;\n  /** A callback that is invoked when the process to update a line item in the cart begins, but before the line item is updated in the Storefront API. */\n  onLineUpdate?: () => void;\n  /** A callback that is invoked when the process to add or update a note in the cart begins, but before the note is added or updated in the Storefront API. */\n  onNoteUpdate?: () => void;\n  /** A callback that is invoked when the process to update the buyer identity begins, but before the buyer identity is updated in the Storefront API. */\n  onBuyerIdentityUpdate?: () => void;\n  /** A callback that is invoked when the process to update the cart attributes begins, but before the attributes are updated in the Storefront API. */\n  onAttributesUpdate?: () => void;\n  /** A callback that is invoked when the process to update the cart discount codes begins, but before the discount codes are updated in the Storefront API. */\n  onDiscountCodesUpdate?: () => void;\n  /** A callback that is invoked when the process to create a cart completes */\n  onCreateComplete?: () => void;\n  /** A callback that is invoked when the process to add a line item to the cart completes */\n  onLineAddComplete?: () => void;\n  /** A callback that is invoked when the process to remove a line item to the cart completes */\n  onLineRemoveComplete?: () => void;\n  /** A callback that is invoked when the process to update a line item in the cart completes */\n  onLineUpdateComplete?: () => void;\n  /** A callback that is invoked when the process to add or update a note in the cart completes */\n  onNoteUpdateComplete?: () => void;\n  /** A callback that is invoked when the process to update the buyer identity completes */\n  onBuyerIdentityUpdateComplete?: () => void;\n  /** A callback that is invoked when the process to update the cart attributes completes */\n  onAttributesUpdateComplete?: () => void;\n  /** A callback that is invoked when the process to update the cart discount codes completes */\n  onDiscountCodesUpdateComplete?: () => void;\n  /** An object with fields that correspond to the Storefront API's [Cart object](https://shopify.dev/api/storefront/2023-07/objects/cart). */\n  data?: PartialDeep<CartType, {recurseIntoArrays: true}>;\n  /** A fragment used to query the Storefront API's [Cart object](https://shopify.dev/api/storefront/2023-07/objects/cart) for all queries and mutations. A default value is used if no argument is provided. */\n  cartFragment?: string;\n  /** A customer access token that's accessible on the server if there's a customer login. */\n  customerAccessToken?: CartBuyerIdentityInput['customerAccessToken'];\n  /** The ISO country code for i18n. */\n  countryCode?: CountryCode;\n}",
            description: '',
            members: [
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'React.ReactNode',
                description: 'Any `ReactNode` elements.',
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'numCartLines',
                value: 'number',
                description:
                  'Maximum number of cart lines to fetch. Defaults to 250 cart lines.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCreate',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to create a cart begins, but before the cart is created in the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLineAdd',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to add a line item to the cart begins, but before the line item is added to the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLineRemove',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to remove a line item to the cart begins, but before the line item is removed from the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLineUpdate',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update a line item in the cart begins, but before the line item is updated in the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onNoteUpdate',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to add or update a note in the cart begins, but before the note is added or updated in the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onBuyerIdentityUpdate',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update the buyer identity begins, but before the buyer identity is updated in the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAttributesUpdate',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update the cart attributes begins, but before the attributes are updated in the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDiscountCodesUpdate',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update the cart discount codes begins, but before the discount codes are updated in the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCreateComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to create a cart completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLineAddComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to add a line item to the cart completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLineRemoveComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to remove a line item to the cart completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLineUpdateComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update a line item in the cart completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onNoteUpdateComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to add or update a note in the cart completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onBuyerIdentityUpdateComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update the buyer identity completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAttributesUpdateComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update the cart attributes completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDiscountCodesUpdateComplete',
                value: '() => void',
                description:
                  'A callback that is invoked when the process to update the cart discount codes completes',
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<CartType, {recurseIntoArrays: true}>',
                description:
                  "An object with fields that correspond to the Storefront API's [Cart object](https://shopify.dev/api/storefront/2023-07/objects/cart).",
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'cartFragment',
                value: 'string',
                description:
                  "A fragment used to query the Storefront API's [Cart object](https://shopify.dev/api/storefront/2023-07/objects/cart) for all queries and mutations. A default value is used if no argument is provided.",
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'customerAccessToken',
                value: 'string',
                description:
                  "A customer access token that's accessible on the server if there's a customer login.",
                isOptional: true,
              },
              {
                filePath: '/CartProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'countryCode',
                value: 'CountryCode',
                description: 'The ISO country code for i18n.',
                isOptional: true,
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'ExternalVideo',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'MediaFile',
        type: 'component',
        url: '/api/hydrogen-react/components/mediafile',
      },
    ],
    description:
      "The `ExternalVideo` component renders an embedded video for the Storefront API's [ExternalVideo object](https://shopify.dev/api/storefront/reference/products/externalvideo).",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {ExternalVideo} from '@shopify/hydrogen-react';\n\nexport default function MyProductVideo({products}) {\n  const firstMediaElement = products.nodes[0].media.nodes[0];\n\n  if (firstMediaElement.__typename === 'ExternalVideo') {\n    return &lt;ExternalVideo data={firstMediaElement} /&gt;;\n  }\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {ExternalVideo} from '@shopify/hydrogen-react';\nimport type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport default function MyProductVideo({\n  products,\n}: {\n  products: ProductConnection;\n}) {\n  const firstMediaElement = products.nodes[0].media.nodes[0];\n  if (firstMediaElement.__typename === 'ExternalVideo') {\n    return &lt;ExternalVideo data={firstMediaElement} /&gt;;\n  }\n}\n",
            language: 'tsx',
          },
        ],
        title: 'ExternalVideo example',
      },
    },
    definitions: [
      {
        title: 'Props',
        description:
          'Takes in the same props as a native `<iframe>` element, except for `src`.',
        type: 'ExternalVideoBaseProps',
        typeDefinitions: {
          ExternalVideoBaseProps: {
            filePath: '/ExternalVideo.tsx',
            name: 'ExternalVideoBaseProps',
            description: '',
            members: [
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value:
                  'PartialDeep<ExternalVideoType, {recurseIntoArrays: true}>',
                description:
                  "An object with fields that correspond to the Storefront API's [ExternalVideo object](https://shopify.dev/api/storefront/reference/products/externalvideo).",
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'options',
                value: 'YouTube | Vimeo',
                description:
                  'An object containing the options available for either [YouTube](https://developers.google.com/youtube/player_parameters#Parameters) or [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters).',
                isOptional: true,
              },
            ],
            value:
              "interface ExternalVideoBaseProps {\n  /**\n   * An object with fields that correspond to the Storefront API's [ExternalVideo object](https://shopify.dev/api/storefront/reference/products/externalvideo).\n   */\n  data: PartialDeep<ExternalVideoType, {recurseIntoArrays: true}>;\n  /** An object containing the options available for either\n   * [YouTube](https://developers.google.com/youtube/player_parameters#Parameters) or\n   * [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters).\n   */\n  options?: YouTube | Vimeo;\n}",
          },
          YouTube: {
            filePath: '/ExternalVideo.tsx',
            name: 'YouTube',
            description: '',
            members: [
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'autoplay',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'cc_lang_pref',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'cc_load_policy',
                value: '1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'color',
                value: '"red" | "white"',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'controls',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'disablekb',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'enablejsapi',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'end',
                value: 'number',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'fs',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'hl',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'iv_load_policy',
                value: '1 | 3',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'list',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'list_type',
                value: '"playlist" | "user_uploads"',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'loop',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'modest_branding',
                value: '1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'origin',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'playlist',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'plays_inline',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'rel',
                value: '0 | 1',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'start',
                value: 'number',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'widget_referrer',
                value: 'string',
                description: '',
                isOptional: true,
              },
            ],
            value:
              "interface YouTube {\n  autoplay?: 0 | 1;\n  cc_lang_pref?: string;\n  cc_load_policy?: 1;\n  color?: 'red' | 'white';\n  controls?: 0 | 1;\n  disablekb?: 0 | 1;\n  enablejsapi?: 0 | 1;\n  end?: number;\n  fs?: 0 | 1;\n  hl?: string;\n  iv_load_policy?: 1 | 3;\n  list?: string;\n  list_type?: 'playlist' | 'user_uploads';\n  loop?: 0 | 1;\n  modest_branding?: 1;\n  origin?: string;\n  playlist?: string;\n  plays_inline?: 0 | 1;\n  rel?: 0 | 1;\n  start?: number;\n  widget_referrer?: string;\n}",
          },
          Vimeo: {
            filePath: '/ExternalVideo.tsx',
            name: 'Vimeo',
            description: '',
            members: [
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'autopause',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'autoplay',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'background',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'byline',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'color',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'controls',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'dnt',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'loop',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'muted',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'pip',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'playsinline',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'portrait',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'quality',
                value:
                  '"240p" | "360p" | "540p" | "720p" | "1080p" | "2k" | "4k"',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'speed',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: '#t',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'texttrack',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'title',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ExternalVideo.tsx',
                syntaxKind: 'PropertySignature',
                name: 'transparent',
                value: 'VimeoBoolean',
                description: '',
                isOptional: true,
              },
            ],
            value:
              "interface Vimeo {\n  autopause?: VimeoBoolean;\n  autoplay?: VimeoBoolean;\n  background?: VimeoBoolean;\n  byline?: VimeoBoolean;\n  color?: string;\n  controls?: VimeoBoolean;\n  dnt?: VimeoBoolean;\n  loop?: VimeoBoolean;\n  muted?: VimeoBoolean;\n  pip?: VimeoBoolean;\n  playsinline?: VimeoBoolean;\n  portrait?: VimeoBoolean;\n  quality?: '240p' | '360p' | '540p' | '720p' | '1080p' | '2k' | '4k';\n  speed?: VimeoBoolean;\n  '#t'?: string;\n  texttrack?: string;\n  title?: VimeoBoolean;\n  transparent?: VimeoBoolean;\n}",
          },
          VimeoBoolean: {
            filePath: '/ExternalVideo.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'VimeoBoolean',
            value: '0 | 1 | boolean',
            description: '',
          },
        },
      },
    ],
  },
  {
    name: 'Image',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'MediaFile',
        type: 'component',
        url: '/api/hydrogen-react/components/mediafile',
      },
    ],
    description:
      "The `Image` component renders an image for the Storefront API's\n[Image object](https://shopify.dev/api/storefront/reference/common-objects/image) by using the `data` prop. You can [customize this component](https://shopify.dev/api/hydrogen/components#customizing-hydrogen-components) using passthrough props.\n\nImages default to being responsive automatically (`width: 100%, height: auto`), and expect an `aspectRatio` prop, which ensures your image doesn't create any layout shift. For fixed-size images, you can set `width` to an exact value, and a `srcSet` with 1x, 2x, and 3x DPI variants will automatically be generated for you.",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {Image} from \'@shopify/hydrogen-react\';\n\n// An example query\nconst IMAGE_QUERY = `#graphql\n  query {\n    product {\n      featuredImage {\n        altText\n        url\n        height\n        width\n      }\n    }\n  }\n`;\n\nexport default function ProductImage({product}) {\n  if (!product.featuredImage) {\n    return null;\n  }\n\n  return (\n    &lt;Image\n      data={product.featuredImage}\n      sizes="(min-width: 45em) 50vw, 100vw"\n      aspectRatio="4/5"\n    /&gt;\n  );\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import React from 'react';\nimport {Image} from '@shopify/hydrogen-react';\nimport type {Product} from '@shopify/hydrogen-react/storefront-api-types';\n\n// An example query\nconst IMAGE_QUERY = `#graphql\n  query {\n    product {\n      featuredImage {\n        altText\n        url\n        height\n        width\n      }\n    }\n  }\n`;\n\nexport default function ProductImage({product}: {product: Product}) {\n  if (!product.featuredImage) {\n    return null;\n  }\n\n  return (\n    &lt;Image\n      data={product.featuredImage}\n      sizes=\"(min-width: 45em) 50vw, 100vw\"\n      aspectRatio=\"4/5\"\n    /&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'HydrogenImageBaseProps',
        typeDefinitions: {
          HydrogenImageBaseProps: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'HydrogenImageBaseProps',
            value:
              "{\n  /** The aspect ratio of the image, in the format of `width/height`.\n   *\n   * @example\n   * ```\n   * <Image data={productImage} aspectRatio=\"4/5\" />\n   * ```\n   */\n  aspectRatio?: string;\n  /** The crop position of the image.\n   *\n   * @remarks\n   * In the event that AspectRatio is set, without specifying a crop,\n   * the Shopify CDN won't return the expected image.\n   *\n   * @defaultValue `center`\n   */\n  crop?: Crop;\n  /** Data mapping to the [Storefront API `Image`](https://shopify.dev/docs/api/storefront/2023-07/objects/Image) object. Must be an Image object.\n   *\n   * @example\n   * ```\n   * import {IMAGE_FRAGMENT, Image} from '@shopify/hydrogen';\n   *\n   * export const IMAGE_QUERY = `#graphql\n   * ${IMAGE_FRAGMENT}\n   * query {\n   *   product {\n   *     featuredImage {\n   *       ...Image\n   *     }\n   *   }\n   * }`\n   *\n   * <Image\n   *   data={productImage}\n   *   sizes=\"(min-width: 45em) 50vw, 100vw\"\n   *   aspectRatio=\"4/5\"\n   * />\n   * ```\n   *\n   * Image: {@link https://shopify.dev/api/storefront/reference/common-objects/image}\n   */\n  data?: PartialDeep<ImageType, {recurseIntoArrays: true}>;\n  /** A function that returns a URL string for an image.\n   *\n   * @remarks\n   * By default, this uses Shopify’s CDN {@link https://cdn.shopify.com/} but you can provide\n   * your own function to use a another provider, as long as they support URL based image transformations.\n   */\n  loader?: Loader;\n  /** An optional prop you can use to change the default srcSet generation behaviour */\n  srcSetOptions?: SrcSetOptions;\n  /** @deprecated Use `crop`, `width`, `height`, and `src` props, and/or `data` prop */\n  loaderOptions?: ShopifyLoaderOptions;\n  /** @deprecated Autocalculated, use only `width` prop, or srcSetOptions */\n  widths?: (HtmlImageProps['width'] | ImageType['width'])[];\n}",
            description: '',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aspectRatio',
                value: 'string',
                description:
                  'The aspect ratio of the image, in the format of `width/height`.',
                isOptional: true,
                examples: [
                  {
                    title: 'Example',
                    description: '',
                    tabs: [
                      {
                        code: '<Image data={productImage} aspectRatio="4/5" />',
                        title: 'Example',
                      },
                    ],
                  },
                ],
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'crop',
                value: 'Crop',
                description: 'The crop position of the image.',
                isOptional: true,
                defaultValue: '`center`',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<ImageType, {recurseIntoArrays: true}>',
                description:
                  'Data mapping to the [Storefront API `Image`](https://shopify.dev/docs/api/storefront/2023-07/objects/Image) object. Must be an Image object.',
                isOptional: true,
                examples: [
                  {
                    title: 'Example',
                    description: '',
                    tabs: [
                      {
                        code: 'import {IMAGE_FRAGMENT, Image} from \'@shopify/hydrogen\';\n\nexport const IMAGE_QUERY = `#graphql\n${IMAGE_FRAGMENT}\nquery {\n  product {\n    featuredImage {\n      ...Image\n    }\n  }\n}`\n\n<Image\n  data={productImage}\n  sizes="(min-width: 45em) 50vw, 100vw"\n  aspectRatio="4/5"\n/>',
                        title: 'Example',
                      },
                      {
                        code: 'Image:',
                        title: 'Example',
                      },
                    ],
                  },
                ],
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'loader',
                value: 'Loader',
                description:
                  'A function that returns a URL string for an image.',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'srcSetOptions',
                value: 'SrcSetOptions',
                description:
                  'An optional prop you can use to change the default srcSet generation behaviour',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'loaderOptions',
                value: 'ShopifyLoaderOptions',
                description: '',
                isOptional: true,
                deprecationMessage:
                  'Use `crop`, `width`, `height`, and `src` props, and/or `data` prop',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'widths',
                value: '(string | number)[]',
                description: '',
                isOptional: true,
                deprecationMessage:
                  'Autocalculated, use only `width` prop, or srcSetOptions',
              },
            ],
          },
          Crop: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'Crop',
            value: "'center' | 'top' | 'bottom' | 'left' | 'right'",
            description: '',
          },
          Loader: {
            filePath: '/Image.tsx',
            name: 'Loader',
            description: '',
            params: [
              {
                name: 'params',
                description: '',
                value: 'LoaderParams',
                filePath: '/Image.tsx',
              },
            ],
            returns: {
              filePath: '/Image.tsx',
              description: '',
              name: 'string',
              value: 'string',
            },
            value: 'export type Loader = (params: LoaderParams) => string;',
          },
          LoaderParams: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'LoaderParams',
            value:
              "{\n  /** The base URL of the image */\n  src?: ImageType['url'];\n  /** The URL param that controls width */\n  width?: number;\n  /** The URL param that controls height */\n  height?: number;\n  /** The URL param that controls the cropping region */\n  crop?: Crop;\n}",
            description: '',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'src',
                value: 'string',
                description: 'The base URL of the image',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'width',
                value: 'number',
                description: 'The URL param that controls width',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'height',
                value: 'number',
                description: 'The URL param that controls height',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'crop',
                value: 'Crop',
                description: 'The URL param that controls the cropping region',
                isOptional: true,
              },
            ],
          },
          SrcSetOptions: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'SrcSetOptions',
            value:
              '{\n  /** The number of sizes to generate */\n  intervals: number;\n  /** The smallest image size */\n  startingWidth: number;\n  /** The increment by which to increase for each size, in pixels */\n  incrementSize: number;\n  /** The size used for placeholder fallback images */\n  placeholderWidth: number;\n}',
            description: '',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'intervals',
                value: 'number',
                description: 'The number of sizes to generate',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'startingWidth',
                value: 'number',
                description: 'The smallest image size',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'incrementSize',
                value: 'number',
                description:
                  'The increment by which to increase for each size, in pixels',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'placeholderWidth',
                value: 'number',
                description: 'The size used for placeholder fallback images',
              },
            ],
          },
          ShopifyLoaderOptions: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyLoaderOptions',
            value:
              "{\n  /** The base URL of the image */\n  src?: ImageType['url'];\n  /** The URL param that controls width */\n  width?: HtmlImageProps['width'] | ImageType['width'];\n  /** The URL param that controls height */\n  height?: HtmlImageProps['height'] | ImageType['height'];\n  /** The URL param that controls the cropping region */\n  crop?: Crop;\n}",
            description: 'Legacy type for backwards compatibility *',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'src',
                value: 'string',
                description: 'The base URL of the image',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'width',
                value: 'string | number',
                description: 'The URL param that controls width',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'height',
                value: 'string | number',
                description: 'The URL param that controls height',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'crop',
                value: 'Crop',
                description: 'The URL param that controls the cropping region',
                isOptional: true,
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'MediaFile',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'Image',
        type: 'component',
        url: '/api/hydrogen-react/components/image',
      },
      {
        name: 'Video',
        type: 'component',
        url: '/api/hydrogen-react/components/video',
      },
      {
        name: 'ExternalVideo',
        type: 'component',
        url: '/api/hydrogen-react/components/externalvideo',
      },
      {
        name: 'ModelViewer',
        type: 'component',
        url: '/api/hydrogen-react/components/modelviewer',
      },
    ],
    description:
      "The `MediaFile` component renders the media for the Storefront API's\n[Media object](https://shopify.dev/api/storefront/reference/products/media). It renders an `Image`, `Video`, an `ExternalVideo`, or a `ModelViewer` depending on the `__typename` of the `data` prop.",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {MediaFile} from '@shopify/hydrogen-react';\n\nexport function ProductsMediaFiles({products}) {\n  return (\n    &lt;ul&gt;\n      {products.nodes.map((product) =&gt; {\n        return &lt;MediaFile data={product.media.nodes[0]} key={product.id} /&gt;;\n      })}\n    &lt;/ul&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {MediaFile} from '@shopify/hydrogen-react';\nimport type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function ProductsMediaFiles({products}: {products: ProductConnection}) {\n  return (\n    &lt;ul&gt;\n      {products.nodes.map((product) =&gt; {\n        return &lt;MediaFile data={product.media.nodes[0]} key={product.id} /&gt;;\n      })}\n    &lt;/ul&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description:
          'MediaFile renders an `Image`, `Video`, `ExternalVideo`, or `ModelViewer` component. Use the `mediaOptions` prop to customize the props sent to each of these components.',
        type: 'MediaFileProps',
        typeDefinitions: {
          MediaFileProps: {
            filePath: '/MediaFile.tsx',
            name: 'MediaFileProps',
            description: '',
            members: [
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value:
                  "PartialDeep<MediaEdgeType['node'], {recurseIntoArrays: true}>",
                description:
                  "An object with fields that correspond to the Storefront API's [Media object](https://shopify.dev/api/storefront/reference/products/media).",
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'mediaOptions',
                value: 'MediaOptions',
                description:
                  'The options for the `Image`, `Video`, `ExternalVideo`, or `ModelViewer` components.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'defaultChecked',
                value: 'boolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'defaultValue',
                value: 'string | number | readonly string[]',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'suppressContentEditableWarning',
                value: 'boolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'suppressHydrationWarning',
                value: 'boolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'accessKey',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'autoFocus',
                value: 'boolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'className',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'contentEditable',
                value: '"inherit" | Booleanish',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'contextMenu',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'dir',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'draggable',
                value: 'Booleanish',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'hidden',
                value: 'boolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'id',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'lang',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'nonce',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'placeholder',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'slot',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'spellCheck',
                value: 'Booleanish',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'style',
                value: 'CSSProperties',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'tabIndex',
                value: 'number',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'title',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'translate',
                value: '"no" | "yes"',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'radioGroup',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'role',
                value: 'AriaRole',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'about',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'content',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'datatype',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'inlist',
                value: 'any',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'prefix',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'property',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'rel',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'resource',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'rev',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'typeof',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'vocab',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'autoCapitalize',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'autoCorrect',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'autoSave',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'color',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'itemProp',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'itemScope',
                value: 'boolean',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'itemType',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'itemID',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'itemRef',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'results',
                value: 'number',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'security',
                value: 'string',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'unselectable',
                value: '"off" | "on"',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'inputMode',
                value:
                  '"search" | "text" | "none" | "email" | "tel" | "url" | "numeric" | "decimal"',
                description:
                  'Hints at the type of data that might be entered by the user while editing the element or its contents',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'is',
                value: 'string',
                description:
                  'Specify that a standard HTML element should behave like a defined custom built-in element',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-activedescendant',
                value: 'string',
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-atomic',
                value: 'Booleanish',
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-autocomplete',
                value: '"list" | "none" | "inline" | "both"',
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.",
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-braillelabel',
                value: 'string',
                description:
                  'Defines a string value that labels the current element, which is intended to be converted into Braille.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-brailleroledescription',
                value: 'string',
                description:
                  'Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-busy',
                value: 'Booleanish',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-checked',
                value: 'boolean | "true" | "false" | "mixed"',
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-colcount',
                value: 'number',
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-colindex',
                value: 'number',
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-colindextext',
                value: 'string',
                description:
                  'Defines a human readable text alternative of aria-colindex.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-colspan',
                value: 'number',
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-controls',
                value: 'string',
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-current',
                value:
                  'boolean | "time" | "step" | "date" | "true" | "false" | "page" | "location"',
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-describedby',
                value: 'string',
                description:
                  'Identifies the element (or elements) that describes the object.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-description',
                value: 'string',
                description:
                  'Defines a string value that describes or annotates the current element.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-details',
                value: 'string',
                description:
                  'Identifies the element that provides a detailed, extended description for the object.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-disabled',
                value: 'Booleanish',
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-dropeffect',
                value:
                  '"link" | "none" | "copy" | "execute" | "move" | "popup"',
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.',
                isOptional: true,
                deprecationMessage: 'in ARIA 1.1',
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-errormessage',
                value: 'string',
                description:
                  'Identifies the element that provides an error message for the object.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-expanded',
                value: 'Booleanish',
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-flowto',
                value: 'string',
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.",
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-grabbed',
                value: 'Booleanish',
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.',
                isOptional: true,
                deprecationMessage: 'in ARIA 1.1',
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-haspopup',
                value:
                  'boolean | "dialog" | "menu" | "grid" | "listbox" | "tree" | "true" | "false"',
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-hidden',
                value: 'Booleanish',
                description:
                  'Indicates whether the element is exposed to an accessibility API.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-invalid',
                value: 'boolean | "true" | "false" | "grammar" | "spelling"',
                description:
                  'Indicates the entered value does not conform to the format expected by the application.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-keyshortcuts',
                value: 'string',
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-label',
                value: 'string',
                description:
                  'Defines a string value that labels the current element.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-labelledby',
                value: 'string',
                description:
                  'Identifies the element (or elements) that labels the current element.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-level',
                value: 'number',
                description:
                  'Defines the hierarchical level of an element within a structure.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-live',
                value: '"off" | "assertive" | "polite"',
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-modal',
                value: 'Booleanish',
                description:
                  'Indicates whether an element is modal when displayed.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-multiline',
                value: 'Booleanish',
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-multiselectable',
                value: 'Booleanish',
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-orientation',
                value: '"horizontal" | "vertical"',
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-owns',
                value: 'string',
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-placeholder',
                value: 'string',
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-posinset',
                value: 'number',
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.",
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-pressed',
                value: 'boolean | "true" | "false" | "mixed"',
                description:
                  'Indicates the current "pressed" state of toggle buttons.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-readonly',
                value: 'Booleanish',
                description:
                  'Indicates that the element is not editable, but is otherwise operable.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-relevant',
                value:
                  '"text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals"',
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-required',
                value: 'Booleanish',
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-roledescription',
                value: 'string',
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-rowcount',
                value: 'number',
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-rowindex',
                value: 'number',
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.",
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-rowindextext',
                value: 'string',
                description:
                  'Defines a human readable text alternative of aria-rowindex.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-rowspan',
                value: 'number',
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-selected',
                value: 'Booleanish',
                description:
                  'Indicates the current "selected" state of various widgets.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-setsize',
                value: 'number',
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-sort',
                value: '"none" | "ascending" | "descending" | "other"',
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-valuemax',
                value: 'number',
                description:
                  'Defines the maximum allowed value for a range widget.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-valuemin',
                value: 'number',
                description:
                  'Defines the minimum allowed value for a range widget.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-valuenow',
                value: 'number',
                description: 'Defines the current value for a range widget.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aria-valuetext',
                value: 'string',
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'ReactNode',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'dangerouslySetInnerHTML',
                value: '{ __html: string | TrustedHTML; }',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCopy',
                value:
                  'ClipboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCopyCapture',
                value:
                  'ClipboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCut',
                value:
                  'ClipboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCutCapture',
                value:
                  'ClipboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPaste',
                value:
                  'ClipboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPasteCapture',
                value:
                  'ClipboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCompositionEnd',
                value:
                  'CompositionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCompositionEndCapture',
                value:
                  'CompositionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCompositionStart',
                value:
                  'CompositionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCompositionStartCapture',
                value:
                  'CompositionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCompositionUpdate',
                value:
                  'CompositionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCompositionUpdateCapture',
                value:
                  'CompositionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onFocus',
                value:
                  'FocusEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onFocusCapture',
                value:
                  'FocusEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onBlur',
                value:
                  'FocusEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onBlurCapture',
                value:
                  'FocusEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onChange',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onChangeCapture',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onBeforeInput',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onBeforeInputCapture',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onInput',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onInputCapture',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onReset',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onResetCapture',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSubmit',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSubmitCapture',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onInvalid',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onInvalidCapture',
                value:
                  'FormEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoad',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoadCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onError',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onErrorCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onKeyDown',
                value:
                  'KeyboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onKeyDownCapture',
                value:
                  'KeyboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onKeyPress',
                value:
                  'KeyboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
                deprecationMessage: 'Deprecated',
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onKeyPressCapture',
                value:
                  'KeyboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
                deprecationMessage: 'Deprecated',
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onKeyUp',
                value:
                  'KeyboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onKeyUpCapture',
                value:
                  'KeyboardEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAbort',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAbortCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCanPlay',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCanPlayCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCanPlayThrough',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCanPlayThroughCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDurationChange',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDurationChangeCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onEmptied',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onEmptiedCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onEncrypted',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onEncryptedCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onEnded',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onEndedCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoadedData',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoadedDataCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoadedMetadata',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoadedMetadataCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoadStart',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoadStartCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPause',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPauseCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPlay',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPlayCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPlaying',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPlayingCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onProgress',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onProgressCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onRateChange',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onRateChangeCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onResize',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onResizeCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSeeked',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSeekedCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSeeking',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSeekingCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onStalled',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onStalledCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSuspend',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSuspendCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTimeUpdate',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTimeUpdateCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onVolumeChange',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onVolumeChangeCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onWaiting',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onWaitingCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAuxClick',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAuxClickCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onClick',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onClickCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onContextMenu',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onContextMenuCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDoubleClick',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDoubleClickCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDrag',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragEnd',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragEndCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragEnter',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragEnterCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragExit',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragExitCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragLeave',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragLeaveCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragOver',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragOverCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragStart',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDragStartCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDrop',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onDropCapture',
                value:
                  'DragEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseDown',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseDownCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseEnter',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseLeave',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseMove',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseMoveCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseOut',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseOutCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseOver',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseOverCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseUp',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onMouseUpCapture',
                value:
                  'MouseEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSelect',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSelectCapture',
                value:
                  'ReactEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchCancel',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchCancelCapture',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchEnd',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchEndCapture',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchMove',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchMoveCapture',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchStart',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTouchStartCapture',
                value:
                  'TouchEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerDown',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerDownCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerMove',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerMoveCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerUp',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerUpCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerCancel',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerCancelCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerEnter',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerEnterCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerLeave',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerLeaveCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerOver',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerOverCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerOut',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPointerOutCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onGotPointerCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onGotPointerCaptureCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLostPointerCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLostPointerCaptureCapture',
                value:
                  'PointerEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onScroll',
                value:
                  'UIEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onScrollCapture',
                value:
                  'UIEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onWheel',
                value:
                  'WheelEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onWheelCapture',
                value:
                  'WheelEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAnimationStart',
                value:
                  'AnimationEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAnimationStartCapture',
                value:
                  'AnimationEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAnimationEnd',
                value:
                  'AnimationEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAnimationEndCapture',
                value:
                  'AnimationEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAnimationIteration',
                value:
                  'AnimationEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onAnimationIterationCapture',
                value:
                  'AnimationEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTransitionEnd',
                value:
                  'TransitionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onTransitionEndCapture',
                value:
                  'TransitionEventHandler<HTMLIFrameElement | HTMLImageElement | HTMLVideoElement | (AnnotationInterface & SceneGraphInterface & StagingInterface & EnvironmentInterface & ControlsInterface & ARInterface & LoadingInterface & AnimationInterface & ModelViewerElementBase)>',
                description: '',
                isOptional: true,
              },
            ],
            value:
              "export interface MediaFileProps extends BaseProps {\n  /** An object with fields that correspond to the Storefront API's [Media object](https://shopify.dev/api/storefront/reference/products/media). */\n  data: PartialDeep<MediaEdgeType['node'], {recurseIntoArrays: true}>;\n  /** The options for the `Image`, `Video`, `ExternalVideo`, or `ModelViewer` components. */\n  mediaOptions?: MediaOptions;\n}",
          },
          MediaOptions: {
            filePath: '/MediaFile.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'MediaOptions',
            value:
              "{\n  /** Props that will only apply when an `<Image />` is rendered */\n  image?: Omit<HydrogenImageProps, 'data'>;\n  /** Props that will only apply when a `<Video />` is rendered */\n  video?: Omit<React.ComponentProps<typeof Video>, 'data'>;\n  /** Props that will only apply when an `<ExternalVideo />` is rendered */\n  externalVideo?: Omit<\n    React.ComponentProps<typeof ExternalVideo>['options'],\n    'data'\n  >;\n  /** Props that will only apply when a `<ModelViewer />` is rendered */\n  modelViewer?: Omit<typeof ModelViewer, 'data'>;\n}",
            description: '',
            members: [
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'image',
                value: "Omit<HydrogenImageProps, 'data'>",
                description:
                  'Props that will only apply when an `<Image />` is rendered',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'video',
                value: "Omit<React.ComponentProps<typeof Video>, 'data'>",
                description:
                  'Props that will only apply when a `<Video />` is rendered',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'externalVideo',
                value:
                  "Omit<\n    React.ComponentProps<typeof ExternalVideo>['options'],\n    'data'\n  >",
                description:
                  'Props that will only apply when an `<ExternalVideo />` is rendered',
                isOptional: true,
              },
              {
                filePath: '/MediaFile.tsx',
                syntaxKind: 'PropertySignature',
                name: 'modelViewer',
                value: "Omit<typeof ModelViewer, 'data'>",
                description:
                  'Props that will only apply when a `<ModelViewer />` is rendered',
                isOptional: true,
              },
            ],
          },
          HydrogenImageProps: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'HydrogenImageProps',
            value:
              "React.ComponentPropsWithRef<'img'> & HydrogenImageBaseProps",
            description: '',
          },
          HydrogenImageBaseProps: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'HydrogenImageBaseProps',
            value:
              "{\n  /** The aspect ratio of the image, in the format of `width/height`.\n   *\n   * @example\n   * ```\n   * <Image data={productImage} aspectRatio=\"4/5\" />\n   * ```\n   */\n  aspectRatio?: string;\n  /** The crop position of the image.\n   *\n   * @remarks\n   * In the event that AspectRatio is set, without specifying a crop,\n   * the Shopify CDN won't return the expected image.\n   *\n   * @defaultValue `center`\n   */\n  crop?: Crop;\n  /** Data mapping to the [Storefront API `Image`](https://shopify.dev/docs/api/storefront/2023-07/objects/Image) object. Must be an Image object.\n   *\n   * @example\n   * ```\n   * import {IMAGE_FRAGMENT, Image} from '@shopify/hydrogen';\n   *\n   * export const IMAGE_QUERY = `#graphql\n   * ${IMAGE_FRAGMENT}\n   * query {\n   *   product {\n   *     featuredImage {\n   *       ...Image\n   *     }\n   *   }\n   * }`\n   *\n   * <Image\n   *   data={productImage}\n   *   sizes=\"(min-width: 45em) 50vw, 100vw\"\n   *   aspectRatio=\"4/5\"\n   * />\n   * ```\n   *\n   * Image: {@link https://shopify.dev/api/storefront/reference/common-objects/image}\n   */\n  data?: PartialDeep<ImageType, {recurseIntoArrays: true}>;\n  /** A function that returns a URL string for an image.\n   *\n   * @remarks\n   * By default, this uses Shopify’s CDN {@link https://cdn.shopify.com/} but you can provide\n   * your own function to use a another provider, as long as they support URL based image transformations.\n   */\n  loader?: Loader;\n  /** An optional prop you can use to change the default srcSet generation behaviour */\n  srcSetOptions?: SrcSetOptions;\n  /** @deprecated Use `crop`, `width`, `height`, and `src` props, and/or `data` prop */\n  loaderOptions?: ShopifyLoaderOptions;\n  /** @deprecated Autocalculated, use only `width` prop, or srcSetOptions */\n  widths?: (HtmlImageProps['width'] | ImageType['width'])[];\n}",
            description: '',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'aspectRatio',
                value: 'string',
                description:
                  'The aspect ratio of the image, in the format of `width/height`.',
                isOptional: true,
                examples: [
                  {
                    title: 'Example',
                    description: '',
                    tabs: [
                      {
                        code: '<Image data={productImage} aspectRatio="4/5" />',
                        title: 'Example',
                      },
                    ],
                  },
                ],
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'crop',
                value: 'Crop',
                description: 'The crop position of the image.',
                isOptional: true,
                defaultValue: '`center`',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<ImageType, {recurseIntoArrays: true}>',
                description:
                  'Data mapping to the [Storefront API `Image`](https://shopify.dev/docs/api/storefront/2023-07/objects/Image) object. Must be an Image object.',
                isOptional: true,
                examples: [
                  {
                    title: 'Example',
                    description: '',
                    tabs: [
                      {
                        code: 'import {IMAGE_FRAGMENT, Image} from \'@shopify/hydrogen\';\n\nexport const IMAGE_QUERY = `#graphql\n${IMAGE_FRAGMENT}\nquery {\n  product {\n    featuredImage {\n      ...Image\n    }\n  }\n}`\n\n<Image\n  data={productImage}\n  sizes="(min-width: 45em) 50vw, 100vw"\n  aspectRatio="4/5"\n/>',
                        title: 'Example',
                      },
                      {
                        code: 'Image:',
                        title: 'Example',
                      },
                    ],
                  },
                ],
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'loader',
                value: 'Loader',
                description:
                  'A function that returns a URL string for an image.',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'srcSetOptions',
                value: 'SrcSetOptions',
                description:
                  'An optional prop you can use to change the default srcSet generation behaviour',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'loaderOptions',
                value: 'ShopifyLoaderOptions',
                description: '',
                isOptional: true,
                deprecationMessage:
                  'Use `crop`, `width`, `height`, and `src` props, and/or `data` prop',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'widths',
                value: '(string | number)[]',
                description: '',
                isOptional: true,
                deprecationMessage:
                  'Autocalculated, use only `width` prop, or srcSetOptions',
              },
            ],
          },
          Crop: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'Crop',
            value: "'center' | 'top' | 'bottom' | 'left' | 'right'",
            description: '',
          },
          Loader: {
            filePath: '/Image.tsx',
            name: 'Loader',
            description: '',
            params: [
              {
                name: 'params',
                description: '',
                value: 'LoaderParams',
                filePath: '/Image.tsx',
              },
            ],
            returns: {
              filePath: '/Image.tsx',
              description: '',
              name: 'string',
              value: 'string',
            },
            value: 'export type Loader = (params: LoaderParams) => string;',
          },
          LoaderParams: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'LoaderParams',
            value:
              "{\n  /** The base URL of the image */\n  src?: ImageType['url'];\n  /** The URL param that controls width */\n  width?: number;\n  /** The URL param that controls height */\n  height?: number;\n  /** The URL param that controls the cropping region */\n  crop?: Crop;\n}",
            description: '',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'src',
                value: 'string',
                description: 'The base URL of the image',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'width',
                value: 'number',
                description: 'The URL param that controls width',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'height',
                value: 'number',
                description: 'The URL param that controls height',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'crop',
                value: 'Crop',
                description: 'The URL param that controls the cropping region',
                isOptional: true,
              },
            ],
          },
          SrcSetOptions: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'SrcSetOptions',
            value:
              '{\n  /** The number of sizes to generate */\n  intervals: number;\n  /** The smallest image size */\n  startingWidth: number;\n  /** The increment by which to increase for each size, in pixels */\n  incrementSize: number;\n  /** The size used for placeholder fallback images */\n  placeholderWidth: number;\n}',
            description: '',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'intervals',
                value: 'number',
                description: 'The number of sizes to generate',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'startingWidth',
                value: 'number',
                description: 'The smallest image size',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'incrementSize',
                value: 'number',
                description:
                  'The increment by which to increase for each size, in pixels',
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'placeholderWidth',
                value: 'number',
                description: 'The size used for placeholder fallback images',
              },
            ],
          },
          ShopifyLoaderOptions: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyLoaderOptions',
            value:
              "{\n  /** The base URL of the image */\n  src?: ImageType['url'];\n  /** The URL param that controls width */\n  width?: HtmlImageProps['width'] | ImageType['width'];\n  /** The URL param that controls height */\n  height?: HtmlImageProps['height'] | ImageType['height'];\n  /** The URL param that controls the cropping region */\n  crop?: Crop;\n}",
            description: 'Legacy type for backwards compatibility *',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'src',
                value: 'string',
                description: 'The base URL of the image',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'width',
                value: 'string | number',
                description: 'The URL param that controls width',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'height',
                value: 'string | number',
                description: 'The URL param that controls height',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'crop',
                value: 'Crop',
                description: 'The URL param that controls the cropping region',
                isOptional: true,
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'ModelViewer',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'MediaFile',
        type: 'component',
        url: '/api/hydrogen-react/components/mediafile',
      },
    ],
    description:
      "The `ModelViewer` component renders a 3D model (with the `model-viewer` custom element) for the Storefront API's [Model3d object](https://shopify.dev/api/storefront/reference/products/model3d). The `model-viewer` custom element is lazily downloaded through a dynamically-injected `<script type='module'>` tag when the `<ModelViewer />` component is rendered. ModelViewer is using version `1.21.1` of the `@google/model-viewer` library.",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {ModelViewer} from '@shopify/hydrogen-react';\n\nexport default function MyProductModel({products}) {\n  const firstMediaElement = products.nodes[0].media.nodes[0];\n\n  if (firstMediaElement.__typename === 'Model3d') {\n    return &lt;ModelViewer data={firstMediaElement} /&gt;;\n  }\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {ModelViewer} from '@shopify/hydrogen-react';\nimport type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport default function MyProductModel({\n  products,\n}: {\n  products: ProductConnection;\n}) {\n  const firstMediaElement = products.nodes[0].media.nodes[0];\n  if (firstMediaElement.__typename === 'Model3d') {\n    return &lt;ModelViewer data={firstMediaElement} /&gt;;\n  }\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'ModelViewerBaseProps',
        typeDefinitions: {
          ModelViewerBaseProps: {
            filePath: '/ModelViewer.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ModelViewerBaseProps',
            value:
              "{\n  /** An object with fields that correspond to the Storefront API's [Model3D object](https://shopify.dev/api/storefront/2023-07/objects/model3d). */\n  data: PartialDeep<Model3d, {recurseIntoArrays: true}>;\n  /** The callback to invoke when the 'error' event is triggered. Refer to [error in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-error). */\n  onError?: (event: Event) => void;\n  /** The callback to invoke when the `load` event is triggered. Refer to [load in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-load). */\n  onLoad?: (event: Event) => void;\n  /** The callback to invoke when the 'preload' event is triggered. Refer to [preload in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-preload). */\n  onPreload?: (event: Event) => void;\n  /** The callback to invoke when the 'model-visibility' event is triggered. Refer to [model-visibility in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-modelVisibility). */\n  onModelVisibility?: (event: Event) => void;\n  /** The callback to invoke when the 'progress' event is triggered. Refer to [progress in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-progress). */\n  onProgress?: (event: Event) => void;\n  /** The callback to invoke when the 'ar-status' event is triggered. Refer to [ar-status in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-arStatus). */\n  onArStatus?: (event: Event) => void;\n  /** The callback to invoke when the 'ar-tracking' event is triggered. Refer to [ar-tracking in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-arTracking). */\n  onArTracking?: (event: Event) => void;\n  /** The callback to invoke when the 'quick-look-button-tapped' event is triggered. Refer to [quick-look-button-tapped in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-quickLookButtonTapped). */\n  onQuickLookButtonTapped?: (event: Event) => void;\n  /** The callback to invoke when the 'camera-change' event is triggered. Refer to [camera-change in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-stagingandcameras-events-cameraChange). */\n  onCameraChange?: (event: Event) => void;\n  /** The callback to invoke when the 'environment-change' event is triggered. Refer to [environment-change in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-lightingandenv-events-environmentChange).  */\n  onEnvironmentChange?: (event: Event) => void;\n  /**  The callback to invoke when the 'play' event is triggered. Refer to [play in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-animation-events-play). */\n  onPlay?: (event: Event) => void;\n  /**  The callback to invoke when the 'pause' event is triggered. Refer to [pause in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-animation-events-pause). */\n  onPause?: (event: Event) => void;\n  /** The callback to invoke when the 'scene-graph-ready' event is triggered. Refer to [scene-graph-ready in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-scenegraph-events-sceneGraphReady). */\n  onSceneGraphReady?: (event: Event) => void;\n}",
            description: '',
            members: [
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<Model3d, {recurseIntoArrays: true}>',
                description:
                  "An object with fields that correspond to the Storefront API's [Model3D object](https://shopify.dev/api/storefront/2023-07/objects/model3d).",
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onError',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'error' event is triggered. Refer to [error in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-error).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onLoad',
                value: '(event: Event) => void',
                description:
                  'The callback to invoke when the `load` event is triggered. Refer to [load in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-load).',
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPreload',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'preload' event is triggered. Refer to [preload in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-preload).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onModelVisibility',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'model-visibility' event is triggered. Refer to [model-visibility in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-modelVisibility).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onProgress',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'progress' event is triggered. Refer to [progress in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-loading-events-progress).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onArStatus',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'ar-status' event is triggered. Refer to [ar-status in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-arStatus).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onArTracking',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'ar-tracking' event is triggered. Refer to [ar-tracking in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-arTracking).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onQuickLookButtonTapped',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'quick-look-button-tapped' event is triggered. Refer to [quick-look-button-tapped in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-augmentedreality-events-quickLookButtonTapped).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onCameraChange',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'camera-change' event is triggered. Refer to [camera-change in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-stagingandcameras-events-cameraChange).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onEnvironmentChange',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'environment-change' event is triggered. Refer to [environment-change in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-lightingandenv-events-environmentChange).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPlay',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'play' event is triggered. Refer to [play in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-animation-events-play).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onPause',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'pause' event is triggered. Refer to [pause in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-animation-events-pause).",
                isOptional: true,
              },
              {
                filePath: '/ModelViewer.tsx',
                syntaxKind: 'PropertySignature',
                name: 'onSceneGraphReady',
                value: '(event: Event) => void',
                description:
                  "The callback to invoke when the 'scene-graph-ready' event is triggered. Refer to [scene-graph-ready in the <model-viewer> documentation](https://modelviewer.dev/docs/index.html#entrydocs-scenegraph-events-sceneGraphReady).",
                isOptional: true,
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'Money',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'useMoney',
        type: 'hook',
        url: '/api/hydrogen-react/hooks/useMoney',
      },
    ],
    description:
      "The `Money` component renders a string of the Storefront API's[MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2) according to the `locale` in the [`ShopifyProvider` component](/api/hydrogen/components/global/shopifyprovider).\nThe component outputs a `<div>`. You can [customize this component](https://api/hydrogen/components#customizing-hydrogen-components) using passthrough props.",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {Money} from '@shopify/hydrogen-react';\n\nexport default function ProductMoney({product}) {\n  const price = product.variants.nodes[0].price;\n\n  return &lt;Money data={price} /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {Money} from '@shopify/hydrogen-react';\nimport type {Product} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport default function ProductMoney({product}: {product: Product}) {\n  const price = product.variants.nodes[0].price;\n\n  return &lt;Money data={price} /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'MoneyPropsBase',
        typeDefinitions: {
          MoneyPropsBase: {
            filePath: '/Money.tsx',
            name: 'MoneyPropsBase',
            description: '',
            members: [
              {
                filePath: '/Money.tsx',
                syntaxKind: 'PropertySignature',
                name: 'as',
                value: 'ComponentGeneric',
                description:
                  'An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`.',
                isOptional: true,
              },
              {
                filePath: '/Money.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<MoneyV2, {recurseIntoArrays: true}>',
                description:
                  "An object with fields that correspond to the Storefront API's [MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2).",
              },
              {
                filePath: '/Money.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutCurrency',
                value: 'boolean',
                description:
                  'Whether to remove the currency symbol from the output.',
                isOptional: true,
              },
              {
                filePath: '/Money.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutTrailingZeros',
                value: 'boolean',
                description:
                  'Whether to remove trailing zeros (fractional money) from the output.',
                isOptional: true,
              },
              {
                filePath: '/Money.tsx',
                syntaxKind: 'PropertySignature',
                name: 'measurement',
                value:
                  'PartialDeep<UnitPriceMeasurement, {recurseIntoArrays: true}>',
                description:
                  'A [UnitPriceMeasurement object](https://shopify.dev/api/storefront/2023-07/objects/unitpricemeasurement).',
                isOptional: true,
              },
              {
                filePath: '/Money.tsx',
                syntaxKind: 'PropertySignature',
                name: 'measurementSeparator',
                value: 'ReactNode',
                description:
                  "Customizes the separator between the money output and the measurement output. Used with the `measurement` prop. Defaults to `'/'`.",
                isOptional: true,
              },
            ],
            value:
              "export interface MoneyPropsBase<ComponentGeneric extends React.ElementType> {\n  /** An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`. */\n  as?: ComponentGeneric;\n  /** An object with fields that correspond to the Storefront API's [MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2). */\n  data: PartialDeep<MoneyV2, {recurseIntoArrays: true}>;\n  /** Whether to remove the currency symbol from the output. */\n  withoutCurrency?: boolean;\n  /** Whether to remove trailing zeros (fractional money) from the output. */\n  withoutTrailingZeros?: boolean;\n  /** A [UnitPriceMeasurement object](https://shopify.dev/api/storefront/2023-07/objects/unitpricemeasurement). */\n  measurement?: PartialDeep<UnitPriceMeasurement, {recurseIntoArrays: true}>;\n  /** Customizes the separator between the money output and the measurement output. Used with the `measurement` prop. Defaults to `'/'`. */\n  measurementSeparator?: ReactNode;\n}",
          },
        },
      },
    ],
  },
  {
    name: 'ProductPrice',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'ProductProvider',
        type: 'component',
        url: '/api/hydrogen-react/components/productprovider',
      },
      {
        name: 'Money',
        type: 'component',
        url: '/api/hydrogen-react/components/money',
      },
    ],
    description:
      "The `ProductPrice` component renders a `Money` component with the product [`priceRange`](https://shopify.dev/api/storefront/reference/products/productpricerange)'s `maxVariantPrice` or `minVariantPrice`, for either the regular price or compare at price range.",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {ProductPrice} from \'@shopify/hydrogen-react\';\n\nexport function ProductPricing({product}) {\n  return &lt;ProductPrice data={product} priceType="compareAt" valueType="max" /&gt;;\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: 'import {ProductPrice} from \'@shopify/hydrogen-react\';\nimport type {Product} from \'@shopify/hydrogen-react/storefront-api-types\';\n\nexport function ProductPricing({product}: {product: Product}) {\n  return &lt;ProductPrice data={product} priceType="compareAt" valueType="max" /&gt;;\n}\n',
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'ProductPricePropsForDocs',
        typeDefinitions: {
          ProductPricePropsForDocs: {
            filePath: '/ProductPrice.tsx',
            name: 'ProductPricePropsForDocs',
            description: '',
            members: [
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<Product, {recurseIntoArrays: true}>',
                description:
                  'A Storefront API [Product object](https://shopify.dev/api/storefront/reference/products/product).',
              },
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'priceType',
                value: '"regular" | "compareAt"',
                description:
                  'The type of price. Valid values: `regular` (default) or `compareAt`.',
                isOptional: true,
              },
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'valueType',
                value: '"max" | "min" | "unit"',
                description:
                  'The type of value. Valid values: `min` (default), `max` or `unit`.',
                isOptional: true,
              },
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantId',
                value: 'string',
                description: 'The ID of the variant.',
                isOptional: true,
              },
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'as',
                value: 'ComponentGeneric',
                description:
                  'An HTML tag or React Component to be rendered as the base element wrapper. The default is `div`.',
                isOptional: true,
              },
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutCurrency',
                value: 'boolean',
                description:
                  'Whether to remove the currency symbol from the output.',
                isOptional: true,
              },
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutTrailingZeros',
                value: 'boolean',
                description:
                  'Whether to remove trailing zeros (fractional money) from the output.',
                isOptional: true,
              },
              {
                filePath: '/ProductPrice.tsx',
                syntaxKind: 'PropertySignature',
                name: 'measurementSeparator',
                value: 'ReactNode',
                description:
                  "Customizes the separator between the money output and the measurement output. Used with the `measurement` prop. Defaults to `'/'`.",
                isOptional: true,
              },
            ],
            value:
              "export interface ProductPricePropsForDocs<\n  AsType extends React.ElementType = 'div',\n> extends Omit<MoneyPropsBase<AsType>, 'data' | 'measurement'>,\n    ProductPriceProps {}",
          },
        },
      },
    ],
  },
  {
    name: 'ProductProvider',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'useProduct',
        type: 'hook',
        url: '/api/hydrogen-react/hooks/useproduct',
      },
      {
        name: 'ProductPrice',
        type: 'component',
        url: '/api/hydrogen-react/components/productprice',
      },
    ],
    description:
      '`<ProductProvider />` is a context provider that enables use of the `useProduct()` hook. It helps manage selected options and variants for a product.',
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {ProductProvider, useProduct} from \'@shopify/hydrogen-react\';\n\nexport function Product({product}) {\n  return (\n    &lt;ProductProvider data={product} initialVariantId="some-id"&gt;\n      &lt;UsingProduct /&gt;\n    &lt;/ProductProvider&gt;\n  );\n}\n\nfunction UsingProduct() {\n  const {product, variants, setSelectedVariant} = useProduct();\n  return (\n    &lt;&gt;\n      &lt;h1&gt;{product?.title}&lt;/h1&gt;\n      {variants?.map((variant) =&gt; {\n        &lt;button onClick={() =&gt; setSelectedVariant(variant)} key={variant?.id}&gt;\n          {variant?.title}\n        &lt;/button&gt;;\n      })}\n      ;\n    &lt;/&gt;\n  );\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {ProductProvider, useProduct} from '@shopify/hydrogen-react';\nimport type {Product} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function Product({product}: {product: Product}) {\n  return (\n    &lt;ProductProvider data={product} initialVariantId=\"some-id\"&gt;\n      &lt;UsingProduct /&gt;\n    &lt;/ProductProvider&gt;\n  );\n}\n\nfunction UsingProduct() {\n  const {product, variants, setSelectedVariant} = useProduct();\n  return (\n    &lt;&gt;\n      &lt;h1&gt;{product?.title}&lt;/h1&gt;\n      {variants?.map((variant) =&gt; {\n        &lt;button onClick={() =&gt; setSelectedVariant(variant)} key={variant?.id}&gt;\n          {variant?.title}\n        &lt;/button&gt;;\n      })}\n      ;\n    &lt;/&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'ProductProvider example',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'ProductProviderProps',
        typeDefinitions: {
          ProductProviderProps: {
            filePath: '/ProductProvider.tsx',
            name: 'ProductProviderProps',
            description: '',
            members: [
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<Product, {recurseIntoArrays: true}>',
                description:
                  'A Storefront API [Product object](https://shopify.dev/api/storefront/reference/products/product).',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'React.ReactNode',
                description: 'A `ReactNode` element.',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'initialVariantId',
                value: 'InitialVariantId',
                description:
                  "The initially selected variant. The following logic applies to `initialVariantId`: 1. If `initialVariantId` is provided, then it's used even if it's out of stock. 2. If `initialVariantId` is provided but is `null`, then no variant is used. 3. If nothing is passed to `initialVariantId` then the first available / in-stock variant is used. 4. If nothing is passed to `initialVariantId` and no variants are in stock, then the first variant is used.",
                isOptional: true,
              },
            ],
            value:
              "interface ProductProviderProps {\n  /** A Storefront API [Product object](https://shopify.dev/api/storefront/reference/products/product). */\n  data: PartialDeep<Product, {recurseIntoArrays: true}>;\n  /** A `ReactNode` element. */\n  children: React.ReactNode;\n  /**\n   * The initially selected variant.\n   * The following logic applies to `initialVariantId`:\n   * 1. If `initialVariantId` is provided, then it's used even if it's out of stock.\n   * 2. If `initialVariantId` is provided but is `null`, then no variant is used.\n   * 3. If nothing is passed to `initialVariantId` then the first available / in-stock variant is used.\n   * 4. If nothing is passed to `initialVariantId` and no variants are in stock, then the first variant is used.\n   */\n  initialVariantId?: InitialVariantId;\n}",
          },
          InitialVariantId: {
            filePath: '/ProductProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'InitialVariantId',
            value: "ProductVariantType['id'] | null",
            description: '',
          },
        },
      },
    ],
  },
  {
    name: 'ShopPayButton',
    category: 'components',
    isVisualComponent: false,
    related: [],
    description:
      'The `ShopPayButton` component renders a button that redirects to the Shop Pay checkout. It renders a [`<shop-pay-button>`](https://shopify.dev/custom-storefronts/tools/web-components) custom element, for which it will lazy-load the source code automatically.',
    type: 'component',
    defaultExample: {
      description: '<ShopPayButton> without <ShopifyProvider>',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {ShopPayButton} from '@shopify/hydrogen-react';\n\nexport function AddVariantQuantity1({variantId, storeDomain}) {\n  return &lt;ShopPayButton variantIds={[variantId]} storeDomain={storeDomain} /&gt;;\n}\n\nexport function AddVariantQuantityMultiple({variantId, quantity, storeDomain}) {\n  return (\n    &lt;ShopPayButton\n      variantIdsAndQuantities={[{id: variantId, quantity}]}\n      storeDomain={storeDomain}\n    /&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {ShopPayButton} from '@shopify/hydrogen-react';\n\nexport function AddVariantQuantity1({\n  variantId,\n  storeDomain,\n}: {\n  variantId: string;\n  storeDomain: string;\n}) {\n  return &lt;ShopPayButton variantIds={[variantId]} storeDomain={storeDomain} /&gt;;\n}\n\nexport function AddVariantQuantityMultiple({\n  variantId,\n  quantity,\n  storeDomain,\n}: {\n  variantId: string;\n  quantity: number;\n  storeDomain: string;\n}) {\n  return (\n    &lt;ShopPayButton\n      variantIdsAndQuantities={[{id: variantId, quantity}]}\n      storeDomain={storeDomain}\n    /&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: '<ShopPayButton> without <ShopifyProvider>',
      },
    },
    examples: {
      description: '',
      examples: [
        {
          description:
            'If `<ShopifyProvider>` context provider is used in your app, you can use the `<ShopPayButton>` without supplying a `storeDomain` prop',
          codeblock: {
            tabs: [
              {
                title: 'JavaScript',
                code: 'import {ShopifyProvider, ShopPayButton} from \'@shopify/hydrogen-react\';\n\nexport default function App() {\n  return (\n    &lt;ShopifyProvider\n      storeDomain="my-store"\n      storefrontToken="abc123"\n      storefrontApiVersion="2023-01"\n      countryIsoCode="CA"\n      languageIsoCode="EN"\n    &gt;\n      &lt;AddVariantQuantity1 variantId="gid://shopify/ProductVariant/1" /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nexport function AddVariantQuantity1({variantId}) {\n  return &lt;ShopPayButton variantIds={[variantId]} /&gt;;\n}\n',
                language: 'jsx',
              },
              {
                title: 'TypeScript',
                code: 'import {ShopifyProvider, ShopPayButton} from \'@shopify/hydrogen-react\';\n\nexport default function App() {\n  return (\n    &lt;ShopifyProvider\n      storeDomain="my-store"\n      storefrontToken="abc123"\n      storefrontApiVersion="2023-01"\n      countryIsoCode="CA"\n      languageIsoCode="EN"\n    &gt;\n      &lt;AddVariantQuantity1 variantId="gid://shopify/ProductVariant/1" /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nexport function AddVariantQuantity1({variantId}: {variantId: string}) {\n  return &lt;ShopPayButton variantIds={[variantId]} /&gt;;\n}\n',
                language: 'tsx',
              },
            ],
            title: '<ShopPayButton> with <ShopifyProvider>',
          },
        },
      ],
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'ShopPayButtonProps',
        typeDefinitions: {
          ShopPayButtonProps: {
            filePath: '/ShopPayButton.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopPayButtonProps',
            value:
              'ShopPayButtonStyleProps & ShopPayDomainProps & (ShopPayVariantIds | ShopPayVariantAndQuantities)',
            description: '',
          },
          ShopPayButtonStyleProps: {
            filePath: '/ShopPayButton.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopPayButtonStyleProps',
            value:
              "{\n  /** A string of classes to apply to the `div` that wraps the Shop Pay button. */\n  className?: string;\n  /** A string that's applied to the [CSS custom property (variable)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) `--shop-pay-button-width` for the [Buy with Shop Pay component](https://shopify.dev/custom-storefronts/tools/web-components#buy-with-shop-pay-component). */\n  width?: string;\n}",
            description: '',
            members: [
              {
                filePath: '/ShopPayButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'className',
                value: 'string',
                description:
                  'A string of classes to apply to the `div` that wraps the Shop Pay button.',
                isOptional: true,
              },
              {
                filePath: '/ShopPayButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'width',
                value: 'string',
                description:
                  "A string that's applied to the [CSS custom property (variable)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) `--shop-pay-button-width` for the [Buy with Shop Pay component](https://shopify.dev/custom-storefronts/tools/web-components#buy-with-shop-pay-component).",
                isOptional: true,
              },
            ],
          },
          ShopPayDomainProps: {
            filePath: '/ShopPayButton.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopPayDomainProps',
            value:
              '{\n  /** The domain of your Shopify storefront URL (eg: `your-store.myshopify.com`). */\n  storeDomain?: string;\n}',
            description: '',
            members: [
              {
                filePath: '/ShopPayButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storeDomain',
                value: 'string',
                description:
                  'The domain of your Shopify storefront URL (eg: `your-store.myshopify.com`).',
                isOptional: true,
              },
            ],
          },
          ShopPayVariantIds: {
            filePath: '/ShopPayButton.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopPayVariantIds',
            value:
              '{\n  /** An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use `variantIdsAndQuantities`. */\n  variantIds: string[];\n  /** An array of variant IDs and quantities to purchase with Shop Pay. */\n  variantIdsAndQuantities?: never;\n}',
            description: '',
            members: [
              {
                filePath: '/ShopPayButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantIds',
                value: 'string[]',
                description:
                  'An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use `variantIdsAndQuantities`.',
              },
              {
                filePath: '/ShopPayButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantIdsAndQuantities',
                value: 'never',
                description:
                  'An array of variant IDs and quantities to purchase with Shop Pay.',
                isOptional: true,
              },
            ],
          },
          ShopPayVariantAndQuantities: {
            filePath: '/ShopPayButton.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopPayVariantAndQuantities',
            value:
              '{\n  /** An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use `variantIdsAndQuantities`. */\n  variantIds?: never;\n  /** An array of variant IDs and quantities to purchase with Shop Pay. */\n  variantIdsAndQuantities: Array<{\n    id: string;\n    quantity: number;\n  }>;\n}',
            description: '',
            members: [
              {
                filePath: '/ShopPayButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantIds',
                value: 'never',
                description:
                  'An array of IDs of the variants to purchase with Shop Pay. This will only ever have a quantity of 1 for each variant. If you want to use other quantities, then use `variantIdsAndQuantities`.',
                isOptional: true,
              },
              {
                filePath: '/ShopPayButton.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantIdsAndQuantities',
                value: 'Array<{\n    id: string;\n    quantity: number;\n  }>',
                description:
                  'An array of variant IDs and quantities to purchase with Shop Pay.',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'ShopifyProvider',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'useShop',
        type: 'hook',
        url: '/api/hydrogen-react/hooks/useshop',
      },
    ],
    description:
      "The `ShopifyProvider` component wraps your entire app and provides functionality for many components, hooks, and utilities. The `ShopifyProvider` component also provides localization data for the app. You should place it in your app's entry point component.",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {ShopifyProvider, useShop} from \'@shopify/hydrogen-react\';\n\nexport default function App() {\n  return (\n    &lt;ShopifyProvider\n      storeDomain="my-store"\n      storefrontToken="abc123"\n      storefrontApiVersion="2022-10"\n      countryIsoCode="CA"\n      languageIsoCode="EN"\n    &gt;\n      &lt;UsingUseShop /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nexport function UsingUseShop() {\n  const shop = useShop();\n\n  return (\n    &lt;&gt;\n      &lt;div&gt;{shop.storeDomain}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontToken}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontApiVersion}&lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: 'import {ShopifyProvider, useShop} from \'@shopify/hydrogen-react\';\n\nexport default function App() {\n  return (\n    &lt;ShopifyProvider\n      storeDomain="my-store"\n      storefrontToken="abc123"\n      storefrontApiVersion="2022-10"\n      countryIsoCode="CA"\n      languageIsoCode="EN"\n    &gt;\n      &lt;UsingUseShop /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nexport function UsingUseShop() {\n  const shop = useShop();\n\n  return (\n    &lt;&gt;\n      &lt;div&gt;{shop.storeDomain}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontToken}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontApiVersion}&lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n',
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'ShopifyProviderProps',
        typeDefinitions: {
          ShopifyProviderProps: {
            filePath: '/ShopifyProvider.tsx',
            name: 'ShopifyProviderProps',
            description:
              'Shopify-specific values that are used in various Hydrogen React components and hooks.',
            members: [
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'children',
                value: 'ReactNode',
                description: 'React children to render.',
                isOptional: true,
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontId',
                value: 'string',
                description: 'The globally-unique identifier for the Shop',
                isOptional: true,
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storeDomain',
                value: 'string',
                description:
                  'The full domain of your Shopify storefront URL (eg: the complete string of `{subdomain}.myshopify.com`).',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontToken',
                value: 'string',
                description:
                  'The Storefront API public access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details.',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontApiVersion',
                value: 'string',
                description:
                  'The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'countryIsoCode',
                value: 'CountryCode',
                description:
                  "The code designating a country, which generally follows ISO 3166-1 alpha-2 guidelines. If a territory doesn't have a country code value in the `CountryCode` enum, it might be considered a subdivision of another country. For example, the territories associated with Spain are represented by the country code `ES`, and the territories associated with the United States of America are represented by the country code `US`.",
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'languageIsoCode',
                value: 'LanguageCode',
                description: '`ISO 369` language codes supported by Shopify.',
              },
            ],
            value:
              'export interface ShopifyProviderProps extends ShopifyProviderBase {\n  /** React children to render. */\n  children?: ReactNode;\n}',
          },
        },
      },
    ],
  },
  {
    name: 'Video',
    category: 'components',
    isVisualComponent: false,
    related: [
      {
        name: 'MediaFile',
        type: 'component',
        url: '/api/hydrogen-react/hooks/mediafile',
      },
      {
        name: 'Image',
        type: 'component',
        url: '/api/hydrogen-react/hooks/image',
      },
    ],
    description:
      "The `Video` component renders a video for the Storefront API's [Video object](https://shopify.dev/api/storefront/reference/products/video).\nThe component outputs a `video` element. You can [customize this component](https://shopify.dev/api/hydrogen/components#customizing-hydrogen-components) using passthrough props.",
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {Video} from '@shopify/hydrogen-react';\n\nexport default function MyProductVideo({products}) {\n  const firstMediaElement = products.edges[0].node.media.edges[0].node;\n\n  if (firstMediaElement.__typename === 'Video') {\n    return &lt;Video data={firstMediaElement} /&gt;;\n  }\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {Video} from '@shopify/hydrogen-react';\nimport type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport default function MyProductVideo({\n  products,\n}: {\n  products: ProductConnection;\n}) {\n  const firstMediaElement = products.edges[0].node.media.edges[0].node;\n\n  if (firstMediaElement.__typename === 'Video') {\n    return &lt;Video data={firstMediaElement} /&gt;;\n  }\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'VideoProps',
        typeDefinitions: {
          VideoProps: {
            filePath: '/Video.tsx',
            name: 'VideoProps',
            description: '',
            members: [
              {
                filePath: '/Video.tsx',
                syntaxKind: 'PropertySignature',
                name: 'data',
                value: 'PartialDeep<VideoType, {recurseIntoArrays: true}>',
                description:
                  "An object with fields that correspond to the Storefront API's [Video object](https://shopify.dev/api/storefront/2023-07/objects/video).",
              },
              {
                filePath: '/Video.tsx',
                syntaxKind: 'PropertySignature',
                name: 'previewImageOptions',
                value: 'LoaderParams',
                description:
                  "An object of image size options for the video's `previewImage`. Uses `shopifyImageLoader` to generate the `poster` URL.",
                isOptional: true,
              },
              {
                filePath: '/Video.tsx',
                syntaxKind: 'PropertySignature',
                name: 'sourceProps',
                value:
                  "HTMLAttributes<HTMLSourceElement> & { 'data-testid'?: string; }",
                description:
                  "Props that will be passed to the `video` element's `source` children elements.",
                isOptional: true,
              },
            ],
            value:
              "export interface VideoProps {\n  /** An object with fields that correspond to the Storefront API's [Video object](https://shopify.dev/api/storefront/2023-07/objects/video). */\n  data: PartialDeep<VideoType, {recurseIntoArrays: true}>;\n  /** An object of image size options for the video's `previewImage`. Uses `shopifyImageLoader` to generate the `poster` URL. */\n  previewImageOptions?: Parameters<typeof shopifyLoader>[0];\n  /** Props that will be passed to the `video` element's `source` children elements. */\n  sourceProps?: HTMLAttributes<HTMLSourceElement> & {\n    'data-testid'?: string;\n  };\n}",
          },
          LoaderParams: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'LoaderParams',
            value:
              "{\n  /** The base URL of the image */\n  src?: ImageType['url'];\n  /** The URL param that controls width */\n  width?: number;\n  /** The URL param that controls height */\n  height?: number;\n  /** The URL param that controls the cropping region */\n  crop?: Crop;\n}",
            description: '',
            members: [
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'src',
                value: 'string',
                description: 'The base URL of the image',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'width',
                value: 'number',
                description: 'The URL param that controls width',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'height',
                value: 'number',
                description: 'The URL param that controls height',
                isOptional: true,
              },
              {
                filePath: '/Image.tsx',
                syntaxKind: 'PropertySignature',
                name: 'crop',
                value: 'Crop',
                description: 'The URL param that controls the cropping region',
                isOptional: true,
              },
            ],
          },
          Crop: {
            filePath: '/Image.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'Crop',
            value: "'center' | 'top' | 'bottom' | 'left' | 'right'",
            description: '',
          },
        },
      },
    ],
  },
  {
    name: 'sendShopifyAnalytics',
    category: 'utilities',
    isVisualComponent: false,
    related: [
      {
        subtitle: 'Hook',
        name: 'useShopifyCookies',
        url: '/api/hydrogen-react/hooks/useShopifyCookies',
        type: 'tool',
      },
      {
        subtitle: 'Utility',
        name: 'getClientBrowserParameters',
        url: '/api/hydrogen-react/utilities/getclientbrowserparameters',
        type: 'gear',
      },
    ],
    description: 'Sends analytics to Shopify.',
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {\n  sendShopifyAnalytics,\n  getClientBrowserParameters,\n  AnalyticsEventName,\n  useShopifyCookies,\n} from '@shopify/hydrogen-react';\nimport {useRouter} from 'next/router';\nimport {useEffect} from 'react';\n\nfunction sendPageView(analyticsPageData) {\n  const payload = {\n    ...getClientBrowserParameters(),\n    ...analyticsPageData,\n  };\n  sendShopifyAnalytics({\n    eventName: AnalyticsEventName.PAGE_VIEW,\n    payload,\n  });\n}\n\n// Hook into your router's page change events to fire this analytics event:\n// for example, in NextJS:\n\nconst analyticsShopData = {\n  shopId: 'gid://shopify/Shop/{your-shop-id}',\n  currency: 'USD',\n  acceptedLanguage: 'en',\n};\n\nexport default function App({Component, pageProps}) {\n  const router = useRouter();\n\n  // eslint-disable-next-line no-undef\n  const hasUserConsent = yourFunctionToDetermineIfUserHasConsent();\n\n  // eslint-disable-next-line react-hooks/exhaustive-deps\n  const analytics = {\n    hasUserConsent,\n    ...analyticsShopData,\n    ...pageProps.analytics,\n  };\n  const pagePropsWithAppAnalytics = {\n    ...pageProps,\n    analytics,\n  };\n\n  useEffect(() =&gt; {\n    const handleRouteChange = () =&gt; {\n      sendPageView(analytics);\n    };\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n\n    return () =&gt; {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [analytics, router.events]);\n\n  useShopifyCookies();\n\n  return &lt;Component {...pagePropsWithAppAnalytics} /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import * as React from 'react';\nimport {useEffect} from 'react';\nimport {\n  sendShopifyAnalytics,\n  getClientBrowserParameters,\n  AnalyticsEventName,\n  useShopifyCookies,\n} from '@shopify/hydrogen-react';\nimport {useRouter} from 'next/router';\n\nfunction sendPageView(analyticsPageData) {\n  const payload = {\n    ...getClientBrowserParameters(),\n    ...analyticsPageData,\n  };\n  sendShopifyAnalytics({\n    eventName: AnalyticsEventName.PAGE_VIEW,\n    payload,\n  });\n}\n\n// Hook into your router's page change events to fire this analytics event:\n// for example, in NextJS:\n\nconst analyticsShopData = {\n  shopId: 'gid://shopify/Shop/{your-shop-id}',\n  currency: 'USD',\n  acceptedLanguage: 'en',\n};\n\nexport default function App({Component, pageProps}) {\n  const router = useRouter();\n\n  // @ts-expect-error - this is an example, you should implement this function\n  const hasUserConsent = yourFunctionToDetermineIfUserHasConsent();\n\n  // eslint-disable-next-line react-hooks/exhaustive-deps\n  const analytics = {\n    hasUserConsent,\n    ...analyticsShopData,\n    ...pageProps.analytics,\n  };\n  const pagePropsWithAppAnalytics = {\n    ...pageProps,\n    analytics,\n  };\n\n  useEffect(() =&gt; {\n    const handleRouteChange = () =&gt; {\n      sendPageView(analytics);\n    };\n\n    router.events.on('routeChangeComplete', handleRouteChange);\n\n    return () =&gt; {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [analytics, router.events]);\n\n  useShopifyCookies();\n\n  return &lt;Component {...pagePropsWithAppAnalytics} /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'sendShopifyAnalytics',
        description:
          'If `event.payload.hasUserConsent` is false, no analytics event will happen.',
        type: 'SendShopifyAnalyticsGeneratedType',
        typeDefinitions: {
          SendShopifyAnalyticsGeneratedType: {
            filePath: '/analytics.ts',
            name: 'SendShopifyAnalyticsGeneratedType',
            description:
              'Set user and session cookies and refresh the expiry time',
            params: [
              {
                name: 'event',
                description: 'The analytics event.',
                value: 'ShopifyAnalytics',
                filePath: '/analytics.ts',
              },
              {
                name: 'shopDomain',
                description:
                  'The Online Store domain to sent Shopify analytics under the same\ntop level domain.',
                value: 'string',
                isOptional: true,
                filePath: '/analytics.ts',
              },
            ],
            returns: {
              filePath: '/analytics.ts',
              description: '',
              name: 'Promise<void>',
              value: 'Promise<void>',
            },
            value:
              'export function sendShopifyAnalytics(\n  event: ShopifyAnalytics,\n  shopDomain?: string,\n): Promise<void> {\n  const {eventName, payload} = event;\n  if (!payload.hasUserConsent) return Promise.resolve();\n\n  let events: ShopifyMonorailEvent[] = [];\n\n  if (eventName === AnalyticsEventName.PAGE_VIEW) {\n    const pageViewPayload = payload as ShopifyPageViewPayload;\n    events = events.concat(\n      trekkiePageView(pageViewPayload),\n      customerPageView(pageViewPayload),\n    );\n  } else if (eventName === AnalyticsEventName.ADD_TO_CART) {\n    events = events.concat(\n      customerAddToCart(payload as ShopifyAddToCartPayload),\n    );\n  }\n\n  if (events.length) {\n    return sendToShopify(events, shopDomain);\n  } else {\n    return Promise.resolve();\n  }\n}',
          },
          ShopifyAnalytics: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyAnalytics',
            value: 'ShopifyPageView | ShopifyAddToCart',
            description: '',
          },
          ShopifyPageView: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyPageView',
            value:
              '{\n  /** Use `AnalyticsEventName.PAGE_VIEW` constant. */\n  eventName: string;\n  payload: ShopifyPageViewPayload;\n}',
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'eventName',
                value: 'string',
                description: 'Use `AnalyticsEventName.PAGE_VIEW` constant.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'payload',
                value: 'ShopifyPageViewPayload',
                description: '',
              },
            ],
          },
          ShopifyPageViewPayload: {
            filePath: '/analytics-types.ts',
            name: 'ShopifyPageViewPayload',
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'canonicalUrl',
                value: 'string',
                description: 'Canonical url.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'pageType',
                value: 'string',
                description: 'Shopify page type.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'resourceId',
                value: 'string',
                description:
                  'Shopify resource id in the form of `gid://shopify/<type>/<id>`.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'collectionHandle',
                value: 'string',
                description: 'Shopify collection handle.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'searchString',
                value: 'string',
                description: 'Search term used on a search results page.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'hasUserConsent',
                value: 'boolean',
                description:
                  'If we have consent from buyer for data collection',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'shopId',
                value: 'string',
                description:
                  'Shopify shop id in the form of `gid://shopify/Shop/<id>`.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'currency',
                value: 'CurrencyCode',
                description: 'Currency code.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'storefrontId',
                value: 'string',
                description:
                  'Shopify storefront id generated by Hydrogen sales channel.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'acceptedLanguage',
                value: 'LanguageCode',
                description: 'Language displayed to buyer.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'shopifySalesChannel',
                value: 'ShopifySalesChannels',
                description: 'Shopify sales channel.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'customerId',
                value: 'string',
                description:
                  'Shopify customer id in the form of `gid://shopify/Customer/<id>`.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'totalValue',
                value: 'number',
                description: 'Total value of products.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'products',
                value: 'ShopifyAnalyticsProduct[]',
                description: 'Product list.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'uniqueToken',
                value: 'string',
                description:
                  'Shopify unique user token: Value of `_shopify_y` cookie.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'visitToken',
                value: 'string',
                description:
                  'Shopify session token: Value of `_shopify_s` cookie.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'url',
                value: 'string',
                description:
                  'Value of `window.location.href`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'path',
                value: 'string',
                description:
                  'Value of `window.location.pathname`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'search',
                value: 'string',
                description:
                  'Value of `window.location.search`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'referrer',
                value: 'string',
                description:
                  'Value of `window.document.referrer`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'title',
                value: 'string',
                description:
                  'Value of `document.title`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'userAgent',
                value: 'string',
                description:
                  'Value of `navigator.userAgent`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'navigationType',
                value: 'string',
                description:
                  "Navigation type: `'navigate' | 'reload' | 'back_forward' | 'prerender' | 'unknown'`.\n\nUse `getClientBrowserParameters()` to collect this value.",
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'navigationApi',
                value: 'string',
                description:
                  "Navigation api: `'PerformanceNavigationTiming' | 'performance.navigation'`.\n\nUse `getClientBrowserParameters()` to collect this value.",
              },
            ],
            value:
              'export interface ShopifyPageViewPayload\n  extends ShopifyAnalyticsBase,\n    ClientBrowserParameters {\n  /** Canonical url. */\n  canonicalUrl?: string;\n  /** Shopify page type. */\n  pageType?: string;\n  /** Shopify resource id in the form of `gid://shopify/<type>/<id>`. */\n  resourceId?: string;\n  /** Shopify collection handle. */\n  collectionHandle?: string;\n  /** Search term used on a search results page. */\n  searchString?: string;\n}',
          },
          ShopifySalesChannels: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifySalesChannels',
            value: 'keyof typeof ShopifySalesChannel',
            description: '',
          },
          ShopifySalesChannel: {
            filePath: '/analytics-constants.ts',
            name: 'ShopifySalesChannel',
            description: '',
            members: [
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'hydrogen',
                value: '"hydrogen"',
                description: 'Shopify Hydrogen sales channel',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'headless',
                value: '"headless"',
                description: 'Shopify Headless sales channel',
              },
            ],
            value:
              "interface ShopifySalesChannel {\n  /** Shopify Hydrogen sales channel */\n  hydrogen: 'hydrogen';\n  /** Shopify Headless sales channel */\n  headless: 'headless';\n}",
          },
          ShopifyAnalyticsProduct: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyAnalyticsProduct',
            value:
              "{\n  /** Product id in the form of `gid://shopify/Product/<id>`. */\n  productGid: Product['id'];\n  /** Variant id in the form of `gid://shopify/ProductVariant/<id>`. */\n  variantGid?: ProductVariant['id'];\n  /** Product name. */\n  name: Product['title'];\n  /** Variant name. */\n  variantName?: ProductVariant['title'];\n  /** Product brand or vendor. */\n  brand: Product['vendor'];\n  /** Product category or type. */\n  category?: Product['productType'];\n  /** Product price. */\n  price: ProductVariant['price']['amount'];\n  /** Product sku. */\n  sku?: ProductVariant['sku'];\n  /** Quantity of the product in this event. */\n  quantity?: number;\n}",
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'productGid',
                value: 'string',
                description:
                  'Product id in the form of `gid://shopify/Product/<id>`.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'variantGid',
                value: 'string',
                description:
                  'Variant id in the form of `gid://shopify/ProductVariant/<id>`.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'name',
                value: 'string',
                description: 'Product name.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'variantName',
                value: 'string',
                description: 'Variant name.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'brand',
                value: 'string',
                description: 'Product brand or vendor.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'category',
                value: 'string',
                description: 'Product category or type.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'price',
                value: 'string',
                description: 'Product price.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'sku',
                value: 'string',
                description: 'Product sku.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'quantity',
                value: 'number',
                description: 'Quantity of the product in this event.',
                isOptional: true,
              },
            ],
          },
          ShopifyAddToCart: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyAddToCart',
            value:
              '{\n  /** Use `AnalyticsEventName.ADD_TO_CART` constant. */\n  eventName: string;\n  payload: ShopifyAddToCartPayload;\n}',
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'eventName',
                value: 'string',
                description: 'Use `AnalyticsEventName.ADD_TO_CART` constant.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'payload',
                value: 'ShopifyAddToCartPayload',
                description: '',
              },
            ],
          },
          ShopifyAddToCartPayload: {
            filePath: '/analytics-types.ts',
            name: 'ShopifyAddToCartPayload',
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'cartId',
                value: 'string',
                description:
                  'Shopify cart id in the form of `gid://shopify/Cart/<id>`.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'hasUserConsent',
                value: 'boolean',
                description:
                  'If we have consent from buyer for data collection',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'shopId',
                value: 'string',
                description:
                  'Shopify shop id in the form of `gid://shopify/Shop/<id>`.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'currency',
                value: 'CurrencyCode',
                description: 'Currency code.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'storefrontId',
                value: 'string',
                description:
                  'Shopify storefront id generated by Hydrogen sales channel.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'acceptedLanguage',
                value: 'LanguageCode',
                description: 'Language displayed to buyer.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'shopifySalesChannel',
                value: 'ShopifySalesChannels',
                description: 'Shopify sales channel.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'customerId',
                value: 'string',
                description:
                  'Shopify customer id in the form of `gid://shopify/Customer/<id>`.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'totalValue',
                value: 'number',
                description: 'Total value of products.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'products',
                value: 'ShopifyAnalyticsProduct[]',
                description: 'Product list.',
                isOptional: true,
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'uniqueToken',
                value: 'string',
                description:
                  'Shopify unique user token: Value of `_shopify_y` cookie.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'visitToken',
                value: 'string',
                description:
                  'Shopify session token: Value of `_shopify_s` cookie.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'url',
                value: 'string',
                description:
                  'Value of `window.location.href`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'path',
                value: 'string',
                description:
                  'Value of `window.location.pathname`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'search',
                value: 'string',
                description:
                  'Value of `window.location.search`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'referrer',
                value: 'string',
                description:
                  'Value of `window.document.referrer`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'title',
                value: 'string',
                description:
                  'Value of `document.title`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'userAgent',
                value: 'string',
                description:
                  'Value of `navigator.userAgent`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'navigationType',
                value: 'string',
                description:
                  "Navigation type: `'navigate' | 'reload' | 'back_forward' | 'prerender' | 'unknown'`.\n\nUse `getClientBrowserParameters()` to collect this value.",
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'navigationApi',
                value: 'string',
                description:
                  "Navigation api: `'PerformanceNavigationTiming' | 'performance.navigation'`.\n\nUse `getClientBrowserParameters()` to collect this value.",
              },
            ],
            value:
              'export interface ShopifyAddToCartPayload\n  extends ShopifyAnalyticsBase,\n    ClientBrowserParameters {\n  /** Shopify cart id in the form of `gid://shopify/Cart/<id>`. */\n  cartId: string;\n}',
          },
        },
      },
      {
        title: 'AnalyticsEventName',
        description: 'Analytics event names accepted by Shopify analytics.',
        type: 'AnalyticsEventName',
        typeDefinitions: {
          AnalyticsEventName: {
            filePath: '/analytics-constants.ts',
            name: 'AnalyticsEventName',
            description:
              'These duplicated interface declaration is so that we can generate proper documentation for these public facing constants',
            members: [
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'PAGE_VIEW',
                value: '"PAGE_VIEW"',
                description: 'Page view',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'ADD_TO_CART',
                value: '"ADD_TO_CART"',
                description: 'Add to cart',
              },
            ],
            value:
              "interface AnalyticsEventName {\n  /** Page view */\n  PAGE_VIEW: 'PAGE_VIEW';\n  /** Add to cart */\n  ADD_TO_CART: 'ADD_TO_CART';\n}",
          },
        },
      },
      {
        title: 'AnalyticsPageType',
        description:
          'Analytics page type values accepted by Shopify analytics.',
        type: 'AnalyticsPageType',
        typeDefinitions: {
          AnalyticsPageType: {
            filePath: '/analytics-constants.ts',
            name: 'AnalyticsPageType',
            description: '',
            members: [
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'article',
                value: '"article"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'blog',
                value: '"blog"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'captcha',
                value: '"captcha"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'cart',
                value: '"cart"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'collection',
                value: '"collection"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'customersAccount',
                value: '"customers/account"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'customersActivateAccount',
                value: '"customers/activate_account"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'customersAddresses',
                value: '"customers/addresses"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'customersLogin',
                value: '"customers/login"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'customersOrder',
                value: '"customers/order"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'customersRegister',
                value: '"customers/register"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'customersResetPassword',
                value: '"customers/reset_password"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'giftCard',
                value: '"gift_card"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'home',
                value: '"index"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'listCollections',
                value: '"list-collections"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'forbidden',
                value: '"403"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'notFound',
                value: '"404"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'page',
                value: '"page"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'password',
                value: '"password"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'product',
                value: '"product"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'policy',
                value: '"policy"',
                description: '',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'search',
                value: '"search"',
                description: '',
              },
            ],
            value:
              "interface AnalyticsPageType {\n  article: 'article';\n  blog: 'blog';\n  captcha: 'captcha';\n  cart: 'cart';\n  collection: 'collection';\n  customersAccount: 'customers/account';\n  customersActivateAccount: 'customers/activate_account';\n  customersAddresses: 'customers/addresses';\n  customersLogin: 'customers/login';\n  customersOrder: 'customers/order';\n  customersRegister: 'customers/register';\n  customersResetPassword: 'customers/reset_password';\n  giftCard: 'gift_card';\n  home: 'index';\n  listCollections: 'list-collections';\n  forbidden: '403';\n  notFound: '404';\n  page: 'page';\n  password: 'password';\n  product: 'product';\n  policy: 'policy';\n  search: 'search';\n}",
          },
        },
      },
      {
        title: 'ShopifySalesChannel',
        description:
          'Analytics sales channel values accepted by Shopify analytics.',
        type: 'ShopifySalesChannel',
        typeDefinitions: {
          ShopifySalesChannel: {
            filePath: '/analytics-constants.ts',
            name: 'ShopifySalesChannel',
            description: '',
            members: [
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'hydrogen',
                value: '"hydrogen"',
                description: 'Shopify Hydrogen sales channel',
              },
              {
                filePath: '/analytics-constants.ts',
                syntaxKind: 'PropertySignature',
                name: 'headless',
                value: '"headless"',
                description: 'Shopify Headless sales channel',
              },
            ],
            value:
              "interface ShopifySalesChannel {\n  /** Shopify Hydrogen sales channel */\n  hydrogen: 'hydrogen';\n  /** Shopify Headless sales channel */\n  headless: 'headless';\n}",
          },
        },
      },
    ],
  },
  {
    name: 'storefrontApiCustomScalars',
    category: 'utilities',
    isVisualComponent: false,
    related: [
      {
        name: 'Storefront Schema',
        type: 'gear',
        url: '/api/hydrogen-react/utilities/storefront-schema',
      },
      {
        name: 'Storefront API Types',
        type: 'gear',
        url: '/api/hydrogen-react/utilities/storefront-api-types',
      },
    ],
    description:
      "\n    Meant to be used with GraphQL CodeGen to type the Storefront API's custom scalars correctly when using TypeScript.By default, GraphQL CodeGen uses `any` for custom scalars; by using these definitions, GraphQL Codegen will generate the correct types for the Storefront API's custom scalars.\n\nSee more about [GraphQL CodeGen](https://graphql-code-generator.com/) and [custom scalars for TypeScript](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#scalars).\n\nNote that `@shopify/hydrogen-react` has already generated types for the Storefront API, so you may not need to setup GraphQL Codegen on your own.\n  ",
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'Codegen Config',
            code: "import {storefrontApiCustomScalars} from '@shopify/hydrogen-react';\n\nconst config = {\n  overwrite: true,\n  schema: require.resolve('@shopify/hydrogen-react/storefront.schema.json'),\n  documents: 'pages/**/*.tsx',\n  generates: {\n    './gql/': {\n      preset: 'client',\n      plugins: [],\n      config: {\n        // defines the custom scalars used in the Storefront API\n        scalars: storefrontApiCustomScalars,\n      },\n    },\n  },\n};\n\nexport default config;\n",
            language: 'js',
          },
        ],
        title: 'codegen.ts',
      },
    },
    definitions: [],
  },
  {
    name: 'flattenConnection',
    category: 'utilities',
    isVisualComponent: false,
    related: [],
    description:
      '\n    The `flattenConnection` utility transforms a connection object from the Storefront API (for example, [Product-related connections](https://shopify.dev/api/storefront/reference/products/product)) into a flat array of nodes. The utility works with either `nodes` or `edges.node`.\n\nIf `connection` is null or undefined, will return an empty array instead in production. In development, an error will be thrown.\n  ',
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {flattenConnection} from '@shopify/hydrogen-react';\n\nexport function ProductList({productConnection}) {\n  const products = flattenConnection(productConnection);\n  return (\n    &lt;ul&gt;\n      {products.map((product) =&gt; (\n        &lt;li key={product.id}&gt;{product.title}&lt;/li&gt;\n      ))}\n    &lt;/ul&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {flattenConnection} from '@shopify/hydrogen-react';\nimport type {ProductConnection} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function ProductList({\n  productConnection,\n}: {\n  productConnection: ProductConnection;\n}) {\n  const products = flattenConnection(productConnection);\n  return (\n    &lt;ul&gt;\n      {products.map((product) =&gt; (\n        &lt;li key={product.id}&gt;{product.title}&lt;/li&gt;\n      ))}\n    &lt;/ul&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Parameters',
        description: '',
        type: 'ConnectionGenericForDoc',
        typeDefinitions: {
          ConnectionGenericForDoc: {
            filePath: '/flatten-connection.ts',
            name: 'ConnectionGenericForDoc',
            description: '',
            members: [
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'PropertySignature',
                name: 'connection',
                value: 'ConnectionEdges | ConnectionNodes',
                description: '',
                isOptional: true,
              },
            ],
            value:
              'export interface ConnectionGenericForDoc {\n  connection?: ConnectionEdges | ConnectionNodes;\n}',
          },
          ConnectionEdges: {
            filePath: '/flatten-connection.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ConnectionEdges',
            value: '{\n  edges: Array<{node: unknown}>;\n}',
            description: '',
            members: [
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'PropertySignature',
                name: 'edges',
                value: 'Array<{node: unknown}>',
                description: '',
              },
            ],
          },
          ConnectionNodes: {
            filePath: '/flatten-connection.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ConnectionNodes',
            value: '{\n  nodes: Array<unknown>;\n}',
            description: '',
            members: [
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'PropertySignature',
                name: 'nodes',
                value: 'Array<unknown>',
                description: '',
              },
            ],
          },
        },
      },
      {
        title: 'Returns',
        description: '',
        type: 'FlattenConnectionReturnForDoc',
        typeDefinitions: {
          FlattenConnectionReturnForDoc: {
            filePath: '/flatten-connection.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'FlattenConnectionReturnForDoc',
            value: 'Array<unknown>',
            description: '',
            members: [
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'PropertySignature',
                name: 'length',
                value: 'number',
                description:
                  'Gets or sets the length of the array. This is a number one higher than the highest index in the array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'toString',
                value: '() => string',
                description: 'Returns a string representation of an array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'toLocaleString',
                value: '() => string',
                description:
                  'Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'pop',
                value: '() => unknown',
                description:
                  'Removes the last element from an array and returns it.\r\nIf the array is empty, undefined is returned and the array is not modified.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'push',
                value: '(...items: unknown[]) => number',
                description:
                  'Appends new elements to the end of an array, and returns the new length of the array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'concat',
                value:
                  '{ (...items: ConcatArray<unknown>[]): unknown[]; (...items: unknown[]): unknown[]; }',
                description:
                  'Combines two or more arrays.\r\nThis method returns a new array without modifying any existing arrays.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'join',
                value: '(separator?: string) => string',
                description:
                  'Adds all the elements of an array into a string, separated by the specified separator string.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'reverse',
                value: '() => unknown[]',
                description:
                  'Reverses the elements in an array in place.\r\nThis method mutates the array and returns a reference to the same array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'shift',
                value: '() => unknown',
                description:
                  'Removes the first element from an array and returns it.\r\nIf the array is empty, undefined is returned and the array is not modified.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'slice',
                value: '(start?: number, end?: number) => unknown[]',
                description:
                  'Returns a copy of a section of an array.\r\nFor both start and end, a negative index can be used to indicate an offset from the end of the array.\r\nFor example, -2 refers to the second to last element of the array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'sort',
                value:
                  '(compareFn?: (a: unknown, b: unknown) => number) => FlattenConnectionReturnForDoc',
                description:
                  'Sorts an array in place.\r\nThis method mutates the array and returns a reference to the same array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'splice',
                value:
                  '{ (start: number, deleteCount?: number): unknown[]; (start: number, deleteCount: number, ...items: unknown[]): unknown[]; }',
                description:
                  'Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'unshift',
                value: '(...items: unknown[]) => number',
                description:
                  'Inserts new elements at the start of an array, and returns the new length of the array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'indexOf',
                value: '(searchElement: unknown, fromIndex?: number) => number',
                description:
                  'Returns the index of the first occurrence of a value in an array, or -1 if it is not present.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'lastIndexOf',
                value: '(searchElement: unknown, fromIndex?: number) => number',
                description:
                  'Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'every',
                value:
                  '{ <S extends unknown>(predicate: (value: unknown, index: number, array: unknown[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: unknown, index: number, array: unknown[]) => unknown, thisArg?: any): boolean; }',
                description:
                  'Determines whether all the members of an array satisfy the specified test.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'some',
                value:
                  '(predicate: (value: unknown, index: number, array: unknown[]) => unknown, thisArg?: any) => boolean',
                description:
                  'Determines whether the specified callback function returns true for any element of an array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'forEach',
                value:
                  '(callbackfn: (value: unknown, index: number, array: unknown[]) => void, thisArg?: any) => void',
                description:
                  'Performs the specified action for each element in an array.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'map',
                value:
                  '<U>(callbackfn: (value: unknown, index: number, array: unknown[]) => U, thisArg?: any) => U[]',
                description:
                  'Calls a defined callback function on each element of an array, and returns an array that contains the results.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'filter',
                value:
                  '{ <S extends unknown>(predicate: (value: unknown, index: number, array: unknown[]) => value is S, thisArg?: any): S[]; (predicate: (value: unknown, index: number, array: unknown[]) => unknown, thisArg?: any): unknown[]; }',
                description:
                  'Returns the elements of an array that meet the condition specified in a callback function.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'reduce',
                value:
                  '{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousValue: U, currentValue: unknown, currentIndex: number, array: unknown[]) => U, initialValue: U): U; }',
                description:
                  'Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'reduceRight',
                value:
                  '{ (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown): unknown; (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: unknown[]) => unknown, initialValue: unknown): unknown; <U>(callbackfn: (previousValue: U, currentValue: unknown, currentIndex: number, array: unknown[]) => U, initialValue: U): U; }',
                description:
                  'Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'find',
                value:
                  '{ <S extends unknown>(predicate: (this: void, value: unknown, index: number, obj: unknown[]) => value is S, thisArg?: any): S; (predicate: (value: unknown, index: number, obj: unknown[]) => unknown, thisArg?: any): unknown; }',
                description:
                  'Returns the value of the first element in the array where predicate is true, and undefined\r\notherwise.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'findIndex',
                value:
                  '(predicate: (value: unknown, index: number, obj: unknown[]) => unknown, thisArg?: any) => number',
                description:
                  'Returns the index of the first element in the array where predicate is true, and -1\r\notherwise.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'fill',
                value:
                  '(value: unknown, start?: number, end?: number) => FlattenConnectionReturnForDoc',
                description:
                  'Changes all array elements from `start` to `end` index to a static `value` and returns the modified array',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'copyWithin',
                value:
                  '(target: number, start: number, end?: number) => FlattenConnectionReturnForDoc',
                description:
                  'Returns the this object after copying a section of the array identified by start and end\r\nto the same array starting at position target',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'entries',
                value: '() => IterableIterator<[number, unknown]>',
                description:
                  'Returns an iterable of key, value pairs for every entry in the array',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'keys',
                value: '() => IterableIterator<number>',
                description: 'Returns an iterable of keys in the array',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'values',
                value: '() => IterableIterator<unknown>',
                description: 'Returns an iterable of values in the array',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'includes',
                value:
                  '(searchElement: unknown, fromIndex?: number) => boolean',
                description:
                  'Determines whether an array includes a certain element, returning true or false as appropriate.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'flatMap',
                value:
                  '<U, This = undefined>(callback: (this: This, value: unknown, index: number, array: unknown[]) => U | readonly U[], thisArg?: This) => U[]',
                description:
                  'Calls a defined callback function on each element of an array. Then, flattens the result into\r\na new array.\r\nThis is identical to a map followed by flat with depth 1.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'flat',
                value:
                  '<A, D extends number = 1>(this: A, depth?: D) => FlatArray<A, D>[]',
                description:
                  'Returns a new array with all sub-array elements concatenated into it recursively up to the\r\nspecified depth.',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: '__@iterator@441',
                value: '() => IterableIterator<unknown>',
                description: 'Iterator',
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: '__@unscopables@443',
                value:
                  '() => { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; }',
                description:
                  "Returns an object whose properties have the value 'true'\r\nwhen they will be absent when used in a 'with' statement.",
              },
              {
                filePath: '/flatten-connection.ts',
                syntaxKind: 'MethodSignature',
                name: 'at',
                value: '(index: number) => unknown',
                description:
                  'Takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'getClientBrowserParameters',
    category: 'utilities',
    isVisualComponent: false,
    related: [
      {
        subtitle: 'Utility',
        name: 'sendShopifyAnalytics',
        url: '/api/hydrogen-react/utilities/sendShopifyAnalytics',
        type: 'gear',
      },
      {
        subtitle: 'Hook',
        name: 'useShopifyCookies',
        url: '/api/hydrogen-react/hooks/useShopifyCookies',
        type: 'tool',
      },
    ],
    description: 'Gathers client browser values commonly used for analytics',
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import * as React from 'react';\nimport {useEffect} from 'react';\nimport {getClientBrowserParameters} from '@shopify/hydrogen-react';\n\nexport default function App({Component, pageProps}) {\n  useEffect(() =&gt; {\n    getClientBrowserParameters();\n  });\n\n  return &lt;Component {...pageProps} /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import * as React from 'react';\nimport {useEffect} from 'react';\nimport {getClientBrowserParameters} from '@shopify/hydrogen-react';\n\nexport default function App({Component, pageProps}) {\n  useEffect(() =&gt; {\n    getClientBrowserParameters();\n  });\n\n  return &lt;Component {...pageProps} /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'getClientBrowserParameters',
        description:
          'If executed on server, this method will return empty string for each field.',
        type: 'GetClientBrowserParametersGeneratedType',
        typeDefinitions: {
          GetClientBrowserParametersGeneratedType: {
            filePath: '/analytics.ts',
            name: 'GetClientBrowserParametersGeneratedType',
            description: '',
            params: [],
            returns: {
              filePath: '/analytics.ts',
              description: '',
              name: 'ClientBrowserParameters',
              value: 'ClientBrowserParameters',
            },
            value:
              "export function getClientBrowserParameters(): ClientBrowserParameters {\n  if (errorIfServer('getClientBrowserParameters')) {\n    return {\n      uniqueToken: '',\n      visitToken: '',\n      url: '',\n      path: '',\n      search: '',\n      referrer: '',\n      title: '',\n      userAgent: '',\n      navigationType: '',\n      navigationApi: '',\n    };\n  }\n\n  const [navigationType, navigationApi] = getNavigationType();\n  const cookies = getShopifyCookies(document.cookie);\n\n  return {\n    uniqueToken: cookies[SHOPIFY_Y],\n    visitToken: cookies[SHOPIFY_S],\n    url: location.href,\n    path: location.pathname,\n    search: location.search,\n    referrer: document.referrer,\n    title: document.title,\n    userAgent: navigator.userAgent,\n    navigationType,\n    navigationApi,\n  };\n}",
          },
          ClientBrowserParameters: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ClientBrowserParameters',
            value:
              "{\n  /**\n   * Shopify unique user token: Value of `_shopify_y` cookie.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  uniqueToken: string;\n  /**\n   * Shopify session token: Value of `_shopify_s` cookie.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  visitToken: string;\n  /**\n   * Value of `window.location.href`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  url: string;\n  /**\n   * Value of `window.location.pathname`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  path: string;\n  /**\n   * Value of `window.location.search`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  search: string;\n  /**\n   * Value of `window.document.referrer`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  referrer: string;\n  /**\n   * Value of `document.title`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  title: string;\n  /**\n   * Value of `navigator.userAgent`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  userAgent: string;\n  /**\n   * Navigation type: `'navigate' | 'reload' | 'back_forward' | 'prerender' | 'unknown'`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  navigationType: string;\n  /**\n   * Navigation api: `'PerformanceNavigationTiming' | 'performance.navigation'`.\n   *\n   * Use `getClientBrowserParameters()` to collect this value.\n   **/\n  navigationApi: string;\n}",
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'uniqueToken',
                value: 'string',
                description:
                  'Shopify unique user token: Value of `_shopify_y` cookie.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'visitToken',
                value: 'string',
                description:
                  'Shopify session token: Value of `_shopify_s` cookie.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'url',
                value: 'string',
                description:
                  'Value of `window.location.href`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'path',
                value: 'string',
                description:
                  'Value of `window.location.pathname`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'search',
                value: 'string',
                description:
                  'Value of `window.location.search`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'referrer',
                value: 'string',
                description:
                  'Value of `window.document.referrer`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'title',
                value: 'string',
                description:
                  'Value of `document.title`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'userAgent',
                value: 'string',
                description:
                  'Value of `navigator.userAgent`.\n\nUse `getClientBrowserParameters()` to collect this value.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'navigationType',
                value: 'string',
                description:
                  "Navigation type: `'navigate' | 'reload' | 'back_forward' | 'prerender' | 'unknown'`.\n\nUse `getClientBrowserParameters()` to collect this value.",
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'navigationApi',
                value: 'string',
                description:
                  "Navigation api: `'PerformanceNavigationTiming' | 'performance.navigation'`.\n\nUse `getClientBrowserParameters()` to collect this value.",
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'getShopifyCookies',
    category: 'utilities',
    isVisualComponent: false,
    related: [
      {
        subtitle: 'Hook',
        name: 'useShopifyCookies',
        url: '/api/hydrogen-react/hooks/useShopifyCookies',
        type: 'tool',
      },
    ],
    description: 'Parses cookie string and returns Shopify cookies.',
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import * as React from 'react';\nimport {useEffect} from 'react';\nimport {getShopifyCookies} from '@shopify/hydrogen-react';\n\nexport default function App({Component, pageProps}) {\n  useEffect(() =&gt; {\n    getShopifyCookies(document.cookie);\n  });\n\n  return &lt;Component {...pageProps} /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import * as React from 'react';\nimport {useEffect} from 'react';\nimport {getShopifyCookies} from '@shopify/hydrogen-react';\n\nexport default function App({Component, pageProps}) {\n  useEffect(() =&gt; {\n    getShopifyCookies(document.cookie);\n  });\n\n  return &lt;Component {...pageProps} /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'getShopifyCookies',
        description:
          "If the Shopify cookies doesn't exist, this method will return empty string for each missing cookie.",
        type: 'GetShopifyCookiesGeneratedType',
        typeDefinitions: {
          GetShopifyCookiesGeneratedType: {
            filePath: '/cookies-utils.tsx',
            name: 'GetShopifyCookiesGeneratedType',
            description: '',
            params: [
              {
                name: 'cookies',
                description: '',
                value: 'string',
                filePath: '/cookies-utils.tsx',
              },
            ],
            returns: {
              filePath: '/cookies-utils.tsx',
              description: '',
              name: 'ShopifyCookies',
              value: 'ShopifyCookies',
            },
            value:
              "export function getShopifyCookies(cookies: string): ShopifyCookies {\n  const cookieData = parse(cookies);\n  return {\n    [SHOPIFY_Y]: cookieData[SHOPIFY_Y] || '',\n    [SHOPIFY_S]: cookieData[SHOPIFY_S] || '',\n  };\n}",
          },
          ShopifyCookies: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyCookies',
            value:
              '{\n  /** Shopify unique user token: Value of `_shopify_y` cookie. */\n  [SHOPIFY_Y]: string;\n  /** Shopify session token: Value of `_shopify_s` cookie. */\n  [SHOPIFY_S]: string;\n}',
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: '_shopify_y',
                value: 'string',
                description:
                  'Shopify unique user token: Value of `_shopify_y` cookie.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: '_shopify_s',
                value: 'string',
                description:
                  'Shopify session token: Value of `_shopify_s` cookie.',
              },
            ],
          },
        },
      },
      {
        title: 'ShopifyCookies',
        description: 'Shopify cookies names',
        type: 'ShopifyCookies',
        typeDefinitions: {
          ShopifyCookies: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyCookies',
            value:
              '{\n  /** Shopify unique user token: Value of `_shopify_y` cookie. */\n  [SHOPIFY_Y]: string;\n  /** Shopify session token: Value of `_shopify_s` cookie. */\n  [SHOPIFY_S]: string;\n}',
            description: '',
            members: [
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: '_shopify_y',
                value: 'string',
                description:
                  'Shopify unique user token: Value of `_shopify_y` cookie.',
              },
              {
                filePath: '/analytics-types.ts',
                syntaxKind: 'PropertySignature',
                name: '_shopify_s',
                value: 'string',
                description:
                  'Shopify session token: Value of `_shopify_s` cookie.',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'useLoadScript',
    category: 'hooks',
    isVisualComponent: false,
    related: [],
    description:
      'The `useLoadScript` hook loads an external script tag in the browser. It allows React components to lazy-load third-party dependencies.',
    type: 'hook',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import React, {useEffect} from 'react';\nimport {useLoadScript} from '@shopify/hydrogen-react';\n\nexport default function Homepage() {\n  const scriptStatus = useLoadScript('https://some-cdn.com/some-script.js');\n\n  useEffect(() =&gt; {\n    if (scriptStatus === 'done') {\n      // do something\n    }\n  }, [scriptStatus]);\n\n  return &lt;div&gt;{scriptStatus === 'done' && &lt;p&gt;Script loaded!&lt;/p&gt;}&lt;/div&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import React, {useEffect} from 'react';\nimport {useLoadScript} from '@shopify/hydrogen-react';\n\nexport default function Homepage() {\n  const scriptStatus = useLoadScript('https://some-cdn.com/some-script.js');\n\n  useEffect(() =&gt; {\n    if (scriptStatus === 'done') {\n      // do something\n    }\n  }, [scriptStatus]);\n\n  return &lt;div&gt;{scriptStatus === 'done' && &lt;p&gt;Script loaded!&lt;/p&gt;}&lt;/div&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'LoadScriptParams',
        typeDefinitions: {
          LoadScriptParams: {
            filePath: '/load-script.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'LoadScriptParams',
            value:
              '[src: string, options?: { module?: boolean; in?: "body" | "head"; }]',
            description: '',
          },
        },
      },
    ],
  },
  {
    name: 'parseGid',
    category: 'utilities',
    isVisualComponent: false,
    related: [],
    description:
      '\n    Parses [Shopify Global ID (GID)](https://shopify.dev/api/usage/gids) and returns the resource type and ID.\n  ',
    type: 'gear',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {parseGid} from '@shopify/hydrogen-react';\n\nconst {id, resource} = parseGid('gid://shopify/Order/123');\n\nconsole.log(id); // 123\nconsole.log(resource); // Order\n",
            language: 'js',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'ParseGidGeneratedType',
        typeDefinitions: {
          ParseGidGeneratedType: {
            filePath: '/analytics-utils.ts',
            name: 'ParseGidGeneratedType',
            description:
              'Parses global id (gid) and returns the resource type and id.',
            params: [
              {
                name: 'gid',
                description: 'A shopify GID (string)',
                value: 'string',
                filePath: '/analytics-utils.ts',
              },
            ],
            returns: {
              filePath: '/analytics-utils.ts',
              description: '',
              name: 'ShopifyGid',
              value: 'ShopifyGid',
            },
            value:
              "export function parseGid(gid: string | undefined): ShopifyGid {\n  const defaultReturn: ShopifyGid = {\n    id: '',\n    resource: null,\n    resourceId: null,\n    search: '',\n    searchParams: new URLSearchParams(),\n    hash: '',\n  };\n\n  if (typeof gid !== 'string') {\n    return defaultReturn;\n  }\n\n  try {\n    const {search, searchParams, pathname, hash} = new URL(gid);\n    const pathnameParts = pathname.split('/');\n    const lastPathnamePart = pathnameParts[pathnameParts.length - 1];\n    const resourcePart = pathnameParts[pathnameParts.length - 2];\n\n    if (!lastPathnamePart || !resourcePart) {\n      return defaultReturn;\n    }\n\n    const id = `${lastPathnamePart}${search}${hash}` || '';\n    const resourceId = lastPathnamePart || null;\n    const resource = resourcePart ?? null;\n\n    return {id, resource, resourceId, search, searchParams, hash};\n  } catch {\n    return defaultReturn;\n  }\n}",
            examples: [
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: "const {id, resource} = parseGid('gid://shopify/Order/123')\n// => id = \"123\", resource = 'Order'\n\n * const {id, resource} = parseGid('gid://shopify/Cart/abc123')\n// => id = \"abc123\", resource = 'Cart'",
                    title: 'Example',
                  },
                ],
              },
            ],
          },
          ShopifyGid: {
            filePath: '/analytics-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ShopifyGid',
            value:
              "Pick<URL, 'search' | 'searchParams' | 'hash'> & {\n  id: string;\n  resource: string | null;\n  resourceId: string | null;\n}",
            description: '',
          },
        },
      },
    ],
  },
  {
    name: 'parseMetafield',
    category: 'utilities',
    isVisualComponent: false,
    related: [],
    description:
      "\n    A function that uses `metafield.type` to parse the Metafield's `value` or `reference` or `references` (depending on the `metafield.type`) and places the result in `metafield.parsedValue`.\n  ",
    type: 'gear',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {parseMetafield} from '@shopify/hydrogen-react';\n\nexport function DateMetafield({metafield}) {\n  const parsedMetafield = parseMetafield(metafield);\n\n  return &lt;div&gt;Date: {parsedMetafield.parsedValue?.toDateString()}&lt;/div&gt;;\n}\n\nexport function VariantReferenceMetafield({metafield}) {\n  const parsedMetafield = parseMetafield(metafield);\n\n  return &lt;div&gt;Variant title: {parsedMetafield.parsedValue?.title}&lt;/div&gt;;\n}\n\nexport function ListCollectionReferenceMetafield({metafield}) {\n  const parsedMetafield = parseMetafield(metafield);\n\n  return (\n    &lt;div&gt;\n      The first collection title: {parsedMetafield.parsedValue?.[0].title}\n    &lt;/div&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {parseMetafield, type ParsedMetafields} from '@shopify/hydrogen-react';\nimport type {Metafield} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function DateMetafield({metafield}: {metafield: Metafield}) {\n  const parsedMetafield = parseMetafield&lt;ParsedMetafields['date']&gt;(metafield);\n\n  return &lt;div&gt;Date: {parsedMetafield.parsedValue?.toDateString()}&lt;/div&gt;;\n}\n\nexport function VariantReferenceMetafield({metafield}: {metafield: Metafield}) {\n  const parsedMetafield =\n    parseMetafield&lt;ParsedMetafields['variant_reference']&gt;(metafield);\n\n  return &lt;div&gt;Variant title: {parsedMetafield.parsedValue?.title}&lt;/div&gt;;\n}\n\nexport function ListCollectionReferenceMetafield({\n  metafield,\n}: {\n  metafield: Metafield;\n}) {\n  const parsedMetafield =\n    parseMetafield&lt;ParsedMetafields['list.collection_reference']&gt;(metafield);\n\n  return (\n    &lt;div&gt;\n      The first collection title: {parsedMetafield.parsedValue?.[0].title}\n    &lt;/div&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description:
          'Use the `ParsedMetafields` type as the returned type of `parseMetafield(metafield)`',
        type: 'ParseMetafieldGeneratedType',
        typeDefinitions: {
          ParseMetafieldGeneratedType: {
            filePath: '/parse-metafield.ts',
            name: 'ParseMetafieldGeneratedType',
            description:
              "A function that uses `metafield.type` to parse the Metafield's `value` or `reference` or `references` (depending on the `metafield.type`) and places the result in `metafield.parsedValue`\n\nTypeScript developers can use the type `ParsedMetafields` from this package to get the returned object's type correct. For example:\n\n``` parseMetafield<ParsedMetafields['boolean']>({type: 'boolean', value: 'false'} ```",
            params: [
              {
                name: 'metafield',
                description: '',
                value:
                  'PartialObjectDeep<Metafield, { recurseIntoArrays: true; }>',
                filePath: '/parse-metafield.ts',
              },
            ],
            returns: {
              filePath: '/parse-metafield.ts',
              description: '',
              name: 'ReturnGeneric',
              value: 'ReturnGeneric',
            },
            value:
              "export function parseMetafield<ReturnGeneric>(\n  metafield: PartialDeep<MetafieldBaseType, {recurseIntoArrays: true}>,\n): ReturnGeneric {\n  if (!metafield.type) {\n    const noTypeError = `parseMetafield(): The 'type' field is required in order to parse the Metafield.`;\n    if (__HYDROGEN_DEV__) {\n      throw new Error(noTypeError);\n    } else {\n      console.error(`${noTypeError} Returning 'parsedValue' of 'null'`);\n      return {\n        ...metafield,\n        parsedValue: null,\n      } as ReturnGeneric;\n    }\n  }\n\n  switch (metafield.type) {\n    case 'boolean':\n      return {\n        ...metafield,\n        parsedValue: metafield.value === 'true',\n      } as ReturnGeneric;\n\n    case 'collection_reference':\n    case 'file_reference':\n    case 'page_reference':\n    case 'product_reference':\n    case 'variant_reference':\n      return {\n        ...metafield,\n        parsedValue: metafield.reference,\n      } as ReturnGeneric;\n\n    case 'color':\n    case 'multi_line_text_field':\n    case 'single_line_text_field':\n    case 'url':\n      return {\n        ...metafield,\n        parsedValue: metafield.value,\n      } as ReturnGeneric;\n\n    // TODO: 'money' should probably be parsed even further to like `useMoney()`, but that logic needs to be extracted first so it's not a hook\n    case 'dimension':\n    case 'money':\n    case 'json':\n    case 'rating':\n    case 'volume':\n    case 'weight':\n    case 'list.color':\n    case 'list.dimension':\n    case 'list.number_integer':\n    case 'list.number_decimal':\n    case 'list.rating':\n    case 'list.single_line_text_field':\n    case 'list.url':\n    case 'list.volume':\n    case 'list.weight': {\n      let parsedValue = null;\n      try {\n        parsedValue = parseJSON(metafield.value ?? '');\n      } catch (err) {\n        const parseError = `parseMetafield(): attempted to JSON.parse the 'metafield.value' property, but failed.`;\n        if (__HYDROGEN_DEV__) {\n          throw new Error(parseError);\n        } else {\n          console.error(`${parseError} Returning 'null' for 'parsedValue'`);\n        }\n        parsedValue = null;\n      }\n      return {\n        ...metafield,\n        parsedValue,\n      } as ReturnGeneric;\n    }\n\n    case 'date':\n    case 'date_time':\n      return {\n        ...metafield,\n        parsedValue: new Date(metafield.value ?? ''),\n      } as ReturnGeneric;\n\n    case 'list.date':\n    case 'list.date_time': {\n      const jsonParseValue = parseJSON(metafield?.value ?? '') as string[];\n      return {\n        ...metafield,\n        parsedValue: jsonParseValue.map((dateString) => new Date(dateString)),\n      } as ReturnGeneric;\n    }\n\n    case 'number_decimal':\n    case 'number_integer':\n      return {\n        ...metafield,\n        parsedValue: Number(metafield.value),\n      } as ReturnGeneric;\n\n    case 'list.collection_reference':\n    case 'list.file_reference':\n    case 'list.page_reference':\n    case 'list.product_reference':\n    case 'list.variant_reference':\n      return {\n        ...metafield,\n        parsedValue: flattenConnection(metafield.references ?? undefined),\n      } as ReturnGeneric;\n\n    default: {\n      const typeNotFoundError = `parseMetafield(): the 'metafield.type' you passed in is not supported. Your type: \"${metafield.type}\". If you believe this is an error, please open an issue on GitHub.`;\n      if (__HYDROGEN_DEV__) {\n        throw new Error(typeNotFoundError);\n      } else {\n        console.error(\n          `${typeNotFoundError}  Returning 'parsedValue' of 'null'`,\n        );\n        return {\n          ...metafield,\n          parsedValue: null,\n        } as ReturnGeneric;\n      }\n    }\n  }\n}",
          },
        },
      },
    ],
  },
  {
    name: 'Storefront API Types',
    category: 'utilities',
    isVisualComponent: false,
    related: [
      {
        name: 'storefrontApiCustomScalars',
        type: 'gear',
        url: '/api/hydrogen-react/utilities/storefrontApiCustomScalars',
      },
      {
        name: 'Storefront Schema',
        type: 'gear',
        url: '/api/hydrogen-react/utilities/storefront-schema',
      },
    ],
    description:
      "\n    If you are using TypeScript, pre-generated TypeScript types are available that match the Storefront API's GraphQL schema. These types can be used when you need to manually create an object that matches a Storefront API object's shape.\n\nThese types also work really well with the new [`satisfies` operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) introduced in TypeScript 4.9, though you don't need to use `satisfies` to use these types.\n  ",
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'Storefront API Types in TypeScript',
            code: "import type {\n  Product,\n  Collection,\n} from '@shopify/hydrogen-react/storefront-api-types';\n\nconst myProduct = {id: '123', title: 'My Product'} satisfies Partial&lt;Product&gt;;\nconsole.log(myProduct.title);\n\nconst myCollection = {\n  id: '456',\n  title: 'My Collection',\n} satisfies Partial&lt;Collection&gt;;\nconsole.log(myCollection.title);\n\nconst myNotSatisfyingProduct: Partial&lt;Product&gt; = {\n  id: '789',\n  title: 'Other Product',\n};\nconsole.log(myNotSatisfyingProduct.title);\n",
            language: 'ts',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [],
  },
  {
    name: 'createStorefrontClient',
    category: 'utilities',
    isVisualComponent: false,
    related: [
      {
        name: 'ShopifyProvider',
        type: 'component',
        url: '/api/hydrogen-react/components/shopify-provider',
      },
    ],
    description:
      '\n    The `createStorefrontClient()` function creates helpers that enable you to quickly query the Shopify Storefront API.\n\nWhen used on the server, it is recommended to use the `privateStorefrontToken` prop. When used on the client, it is recommended to use the `publicStorefrontToken` prop or consider using `<ShopifyProvider/>` instead.\n  ',
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'Client Example in NextJS',
            code: "import {createStorefrontClient} from '@shopify/hydrogen-react';\n\nexport const client = createStorefrontClient({\n  storeDomain: 'https://{store-name}.myshopify.com',\n  storefrontApiVersion: '2023-01',\n  privateStorefrontToken: '{private token for server-side requests}',\n});\n\n// in another file where you need to make queries, for example in NextJS server-side:\n\n// a Storefront API query\nconst GRAPHQL_QUERY = `\n  query {\n    shop {\n      name\n    }\n  }\n`;\n\n// make the request\nexport async function getServerSideProps() {\n  // Get the Storefront API url\n  const response = await fetch(client.getStorefrontApiUrl(), {\n    body: JSON.stringify({\n      query: GRAPHQL_QUERY,\n    }),\n    // Generate the headers using the private token. Additionally, you can pass in the buyer's IP address from the request object to help prevent bad actors from overloading your store.\n    headers: client.getPrivateTokenHeaders({buyerIp: '...'}),\n    method: 'POST',\n  });\n\n  if (!response.ok) {\n    throw new Error(response.statusText);\n  }\n\n  const json = await response.json();\n\n  return {props: json};\n}\n",
            language: 'js',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'CreateStorefrontClientGeneratedType',
        typeDefinitions: {
          CreateStorefrontClientGeneratedType: {
            filePath: '/storefront-client.ts',
            name: 'CreateStorefrontClientGeneratedType',
            description:
              'The `createStorefrontClient()` function creates helpers that enable you to quickly query the Shopify Storefront API.\n\nWhen used on the server, it is recommended to use the `privateStorefrontToken` prop. When used on the client, it is recommended to use the `publicStorefrontToken` prop.',
            params: [
              {
                name: 'props',
                description: '',
                value: 'StorefrontClientProps',
                filePath: '/storefront-client.ts',
              },
            ],
            returns: {
              filePath: '/storefront-client.ts',
              description: '',
              name: 'StorefrontClientReturn',
              value: 'StorefrontClientReturn',
            },
            value:
              "export function createStorefrontClient(\n  props: StorefrontClientProps,\n): StorefrontClientReturn {\n  const {\n    storeDomain,\n    privateStorefrontToken,\n    publicStorefrontToken,\n    storefrontApiVersion = SFAPI_VERSION,\n    contentType,\n  } = props;\n\n  if (!storeDomain) {\n    throw new Error(\n      H2_PREFIX_ERROR +\n        `\\`storeDomain\\` is required when creating a new Storefront client.\\nReceived \"${storeDomain}\".`,\n    );\n  }\n\n  if (storefrontApiVersion !== SFAPI_VERSION) {\n    warnOnce(\n      `The Storefront API version that you're using is different than the version this build of Hydrogen React is targeting.` +\n        `\\nYou may run into unexpected errors if these versions don't match. Received verion: \"${storefrontApiVersion}\"; expected version \"${SFAPI_VERSION}\"`,\n    );\n  }\n\n  // only warn if not in a browser environment\n  if (__HYDROGEN_DEV__ && !privateStorefrontToken && !globalThis.document) {\n    warnOnce(\n      `Using a private storefront token is recommended for server environments.` +\n        `\\nRefer to the authentication https://shopify.dev/api/storefront#authentication documentation for more details.`,\n    );\n  }\n\n  // only warn if in a browser environment and you're using the privateStorefrontToken\n  if (__HYDROGEN_DEV__ && privateStorefrontToken && globalThis.document) {\n    warnOnce(\n      'You are attempting to use a private token in an environment where it can be easily accessed by anyone.' +\n        '\\nThis is a security risk; please use the public token and the `publicStorefrontToken` prop',\n    );\n  }\n\n  const isMockShop = (domain: string): boolean => domain.includes('mock.shop');\n  const getShopifyDomain: StorefrontClientReturn['getShopifyDomain'] = (\n    overrideProps,\n  ) => {\n    const domain = overrideProps?.storeDomain ?? storeDomain;\n    return domain.includes('://') ? domain : `https://${domain}`;\n  };\n\n  return {\n    getShopifyDomain,\n    getStorefrontApiUrl(overrideProps): string {\n      const domain = getShopifyDomain(overrideProps);\n      const apiUrl = domain + (domain.endsWith('/') ? 'api' : '/api');\n\n      if (isMockShop(domain)) return apiUrl;\n\n      return `${apiUrl}/${\n        overrideProps?.storefrontApiVersion ?? storefrontApiVersion\n      }/graphql.json`;\n    },\n    getPrivateTokenHeaders(overrideProps): Record<string, string> {\n      if (\n        !privateStorefrontToken &&\n        !overrideProps?.privateStorefrontToken &&\n        !isMockShop(storeDomain)\n      ) {\n        throw new Error(\n          H2_PREFIX_ERROR +\n            'You did not pass in a `privateStorefrontToken` while using `createStorefrontClient()` or `getPrivateTokenHeaders()`',\n        );\n      }\n\n      if (__HYDROGEN_DEV__ && !overrideProps?.buyerIp) {\n        warnOnce(\n          'It is recommended to pass in the `buyerIp` property which improves analytics and data in the admin.',\n        );\n      }\n\n      const finalContentType = overrideProps?.contentType ?? contentType;\n\n      return {\n        // default to json\n        'content-type':\n          finalContentType === 'graphql'\n            ? 'application/graphql'\n            : 'application/json',\n        'X-SDK-Variant': 'hydrogen-react',\n        'X-SDK-Variant-Source': 'react',\n        'X-SDK-Version': storefrontApiVersion,\n        'Shopify-Storefront-Private-Token':\n          overrideProps?.privateStorefrontToken ?? privateStorefrontToken ?? '',\n        ...(overrideProps?.buyerIp\n          ? {'Shopify-Storefront-Buyer-IP': overrideProps.buyerIp}\n          : {}),\n      };\n    },\n    getPublicTokenHeaders(overrideProps): Record<string, string> {\n      if (\n        !publicStorefrontToken &&\n        !overrideProps?.publicStorefrontToken &&\n        !isMockShop(storeDomain)\n      ) {\n        throw new Error(\n          H2_PREFIX_ERROR +\n            'You did not pass in a `publicStorefrontToken` while using `createStorefrontClient()` or `getPublicTokenHeaders()`',\n        );\n      }\n\n      const finalContentType =\n        overrideProps?.contentType ?? contentType ?? 'json';\n\n      return getPublicTokenHeadersRaw(\n        finalContentType,\n        storefrontApiVersion,\n        overrideProps?.publicStorefrontToken ?? publicStorefrontToken ?? '',\n      );\n    },\n  };\n}",
          },
          StorefrontClientProps: {
            filePath: '/storefront-client.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'StorefrontClientProps',
            value:
              '{\n  /** The host name of the domain (eg: `{shop}.myshopify.com`). */\n  storeDomain: string;\n  /** The Storefront API delegate access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) and [delegate access token](https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details. */\n  privateStorefrontToken?: string;\n  /** The Storefront API access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details. */\n  publicStorefrontToken?: string;\n  /** The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.  */\n  storefrontApiVersion?: string;\n  /**\n   * Customizes which `"content-type"` header is added when using `getPrivateTokenHeaders()` and `getPublicTokenHeaders()`. When fetching with a `JSON.stringify()`-ed `body`, use `"json"`. When fetching with a `body` that is a plain string, use `"graphql"`. Defaults to `"json"`\n   *\n   * Can also be customized on a call-by-call basis by passing in `\'contentType\'` to both `getPrivateTokenHeaders({...})` and `getPublicTokenHeaders({...})`, for example: `getPublicTokenHeaders({contentType: \'graphql\'})`\n   */\n  contentType?: \'json\' | \'graphql\';\n}',
            description: '',
            members: [
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'storeDomain',
                value: 'string',
                description:
                  'The host name of the domain (eg: `{shop}.myshopify.com`).',
              },
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'privateStorefrontToken',
                value: 'string',
                description:
                  'The Storefront API delegate access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) and [delegate access token](https://shopify.dev/apps/auth/oauth/delegate-access-tokens) documentation for more details.',
                isOptional: true,
              },
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'publicStorefrontToken',
                value: 'string',
                description:
                  'The Storefront API access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details.',
                isOptional: true,
              },
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'storefrontApiVersion',
                value: 'string',
                description:
                  'The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.',
                isOptional: true,
              },
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'contentType',
                value: '"json" | "graphql"',
                description:
                  'Customizes which `"content-type"` header is added when using `getPrivateTokenHeaders()` and `getPublicTokenHeaders()`. When fetching with a `JSON.stringify()`-ed `body`, use `"json"`. When fetching with a `body` that is a plain string, use `"graphql"`. Defaults to `"json"`\n\nCan also be customized on a call-by-call basis by passing in `\'contentType\'` to both `getPrivateTokenHeaders({...})` and `getPublicTokenHeaders({...})`, for example: `getPublicTokenHeaders({contentType: \'graphql\'})`',
                isOptional: true,
              },
            ],
          },
          StorefrontClientReturn: {
            filePath: '/storefront-client.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'StorefrontClientReturn',
            value:
              "{\n  /**\n   * Creates the fully-qualified URL to your myshopify.com domain.\n   *\n   * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getShopifyDomain({...})`:\n   *\n   * - `storeDomain`\n   */\n  getShopifyDomain: (\n    props?: Partial<Pick<StorefrontClientProps, 'storeDomain'>>,\n  ) => string;\n  /**\n   * Creates the fully-qualified URL to your store's GraphQL endpoint.\n   *\n   * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getStorefrontApiUrl({...})`:\n   *\n   * - `storeDomain`\n   * - `storefrontApiVersion`\n   */\n  getStorefrontApiUrl: (\n    props?: Partial<\n      Pick<StorefrontClientProps, 'storeDomain' | 'storefrontApiVersion'>\n    >,\n  ) => string;\n  /**\n   * Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the private Server-to-Server token which reduces the chance of throttling but must not be exposed to clients. Server-side calls should prefer using this over `getPublicTokenHeaders()`.\n   *\n   * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getPrivateTokenHeaders({...})`:\n   *\n   * - `contentType`\n   * - `privateStorefrontToken`\n   * - `buyerIp`\n   *\n   * Note that `contentType` defaults to what you configured in `createStorefrontClient({...})` and defaults to `'json'`, but a specific call may require using `graphql`. When using `JSON.stringify()` on the `body`, use `'json'`; otherwise, use `'graphql'`.\n   */\n  getPrivateTokenHeaders: (\n    props?: OverrideTokenHeaderProps &\n      Pick<StorefrontClientProps, 'privateStorefrontToken'> & {\n        /**\n         * The client's IP address. Passing this to the Storefront API when using a server-to-server token will help improve your store's analytics data.\n         */\n        buyerIp?: string;\n      },\n  ) => Record<string, string>;\n  /**\n   * Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the public token which increases the chance of throttling but also can be exposed to clients. Server-side calls should prefer using `getPublicTokenHeaders()`.\n   *\n   * By default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getPublicTokenHeaders({...})`:\n   *\n   * - `contentType`\n   * - `publicStorefrontToken`\n   *\n   * Note that `contentType` defaults to what you configured in `createStorefrontClient({...})` and defaults to `'json'`, but a specific call may require using `graphql`. When using `JSON.stringify()` on the `body`, use `'json'`; otherwise, use `'graphql'`.\n   */\n  getPublicTokenHeaders: (\n    props?: OverrideTokenHeaderProps &\n      Pick<StorefrontClientProps, 'publicStorefrontToken'>,\n  ) => Record<string, string>;\n}",
            description: '',
            members: [
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'getShopifyDomain',
                value:
                  '(props?: Partial<Pick<StorefrontClientProps, "storeDomain">>) => string',
                description:
                  'Creates the fully-qualified URL to your myshopify.com domain.\n\nBy default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getShopifyDomain({...})`:\n\n- `storeDomain`',
              },
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'getStorefrontApiUrl',
                value:
                  '(props?: Partial<Pick<StorefrontClientProps, "storeDomain" | "storefrontApiVersion">>) => string',
                description:
                  "Creates the fully-qualified URL to your store's GraphQL endpoint.\n\nBy default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getStorefrontApiUrl({...})`:\n\n- `storeDomain` - `storefrontApiVersion`",
              },
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'getPrivateTokenHeaders',
                value:
                  '(props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "privateStorefrontToken"> & { buyerIp?: string; }) => Record<string, string>',
                description:
                  "Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the private Server-to-Server token which reduces the chance of throttling but must not be exposed to clients. Server-side calls should prefer using this over `getPublicTokenHeaders()`.\n\nBy default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getPrivateTokenHeaders({...})`:\n\n- `contentType` - `privateStorefrontToken` - `buyerIp`\n\nNote that `contentType` defaults to what you configured in `createStorefrontClient({...})` and defaults to `'json'`, but a specific call may require using `graphql`. When using `JSON.stringify()` on the `body`, use `'json'`; otherwise, use `'graphql'`.",
              },
              {
                filePath: '/storefront-client.ts',
                syntaxKind: 'PropertySignature',
                name: 'getPublicTokenHeaders',
                value:
                  '(props?: Partial<Pick<StorefrontClientProps, "contentType">> & Pick<StorefrontClientProps, "publicStorefrontToken">) => Record<string, string>',
                description:
                  "Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This method uses the public token which increases the chance of throttling but also can be exposed to clients. Server-side calls should prefer using `getPublicTokenHeaders()`.\n\nBy default, it will use the config you passed in when calling `createStorefrontClient()`. However, you can override the following settings on each invocation of `getPublicTokenHeaders({...})`:\n\n- `contentType` - `publicStorefrontToken`\n\nNote that `contentType` defaults to what you configured in `createStorefrontClient({...})` and defaults to `'json'`, but a specific call may require using `graphql`. When using `JSON.stringify()` on the `body`, use `'json'`; otherwise, use `'graphql'`.",
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'Storefront Schema',
    category: 'utilities',
    isVisualComponent: false,
    related: [
      {
        name: 'storefrontApiCustomScalars',
        type: 'gear',
        url: '/api/hydrogen-react/utilities/storefrontApiCustomScalars',
      },
      {
        name: 'Storefront API Types',
        type: 'gear',
        url: '/api/hydrogen-react/utilities/storefront-api-types',
      },
    ],
    description:
      "\n    Hydrogen React ships with a pre-generated GraphQL schema for the Storefront API, which can integrate with your IDE and other GraphQL tooling (such as a [GraphQL config file](https://www.graphql-config.com/docs/user/user-usage)) to provide autocompletion and validation for your Storefront API GraphQL queries.\n\nThis schema is generated using the Storefront API's introspection query, and is available at `@shopify/hydrogen-react/storefront.schema.json`.\n\nTo get these features working in your IDE, you may need to install an extension. For example, in VSCode you can install this [GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql).\n  ",
    type: 'utility',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'GraphQL Config File',
            code: 'schema: node_modules/@shopify/hydrogen-react/storefront.schema.json\n',
            language: 'yml',
          },
        ],
        title: '.graphqlrc.yml',
      },
    },
    definitions: [],
  },
  {
    name: 'useCart',
    category: 'hooks',
    isVisualComponent: false,
    related: [
      {
        name: 'CartProvider',
        type: 'components',
        url: '/api/hydrogen-react/components/CartProvider',
      },
    ],
    description: 'Provides access to the cart object.',
    type: 'hook',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {CartProvider, useCart} from '@shopify/hydrogen-react';\n\nexport function App() {\n  &lt;CartProvider\n    onLineAdd={() =&gt; {\n      console.log('a line is being added');\n    }}\n    onLineAddComplete={() =&gt; {\n      console.log('a line has been added');\n    }}\n  &gt;\n    &lt;CartComponent /&gt;\n  &lt;/CartProvider&gt;;\n}\n\nfunction CartComponent() {\n  const {linesAdd, status} = useCart();\n\n  const merchandise = {merchandiseId: '{id-here}'};\n\n  return (\n    &lt;div&gt;\n      Cart Status: {status}\n      &lt;button onClick={() =&gt; linesAdd([merchandise])}&gt;Add Line&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {CartProvider, useCart} from '@shopify/hydrogen-react';\nimport type {CartLineInput} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function App() {\n  &lt;CartProvider\n    onLineAdd={() =&gt; {\n      console.log('a line is being added');\n    }}\n    onLineAddComplete={() =&gt; {\n      console.log('a line has been added');\n    }}\n  &gt;\n    &lt;CartComponent /&gt;\n  &lt;/CartProvider&gt;;\n}\n\nfunction CartComponent() {\n  const {linesAdd, status} = useCart();\n\n  const merchandise: CartLineInput = {merchandiseId: '{id-here}'};\n\n  return (\n    &lt;div&gt;\n      Cart Status: {status}\n      &lt;button onClick={() =&gt; linesAdd([merchandise])}&gt;Add Line&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description:
          '`useCart` hook must be a descendent of a `CartProvider` component.',
        type: 'UseCartDocs',
        typeDefinitions: {
          UseCartDocs: {
            filePath: '/CartProvider.tsx',
            name: 'UseCartDocs',
            description: '',
            params: [],
            returns: {
              filePath: '/CartProvider.tsx',
              description: '',
              name: 'CartWithActionsDocs',
              value: 'CartWithActionsDocs',
            },
            value: 'type UseCartDocs = () => CartWithActionsDocs;',
          },
          CartWithActionsDocs: {
            filePath: '/cart-types.ts',
            name: 'CartWithActionsDocs',
            description: '',
            members: [
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'id',
                value: 'string',
                description:
                  "The cart's ID if it has been created through the Storefront API.",
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'lines',
                value: 'Array<CartLine | ComponentizableCartLine>',
                description: 'The cart lines.',
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'checkoutUrl',
                value: 'string',
                description:
                  'The checkout URL for the cart, if the cart has been created in the Storefront API.',
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'note',
                value: 'string',
                description: "The cart's note.",
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'buyerIdentity',
                value: 'CartBuyerIdentity',
                description: "The cart's buyer identity.",
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'attributes',
                value: 'Attribute[]',
                description: "The cart's attributes.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'discountCodes',
                value: 'CartDiscountCode[]',
                description: 'The discount codes applied to the cart.',
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'cost',
                value: 'CartCost',
                description:
                  'The cost for the cart, including the subtotal, total, taxes, and duties.',
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'totalQuantity',
                value: 'number',
                description:
                  'The total number of items in the cart, across all lines. If there are no lines, then the value is 0.',
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'status',
                value: 'CartStatus',
                description:
                  "The status of the cart. This returns `uninitialized` when the cart is not yet created, `creating` when the cart is being created, `fetching` when an existing cart is being fetched, `updating` when the cart is updating, and `idle` when the cart isn't being created or updated.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'error',
                value: 'unknown',
                description:
                  'If an error occurred on the previous cart action, then `error` will exist and `cart` will be put back into the last valid status it was in.',
                isOptional: true,
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'cartCreate',
                value: '(cart: CartInput) => void',
                description:
                  "A callback that creates a cart. Expects the same input you would provide to the Storefront API's `cartCreate` mutation.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'linesAdd',
                value: '(lines: CartLineInput[]) => void',
                description:
                  "A callback that adds lines to the cart. Expects the same `lines` input that you would provide to the Storefront API's `cartLinesAdd` mutation. If a cart doesn't already exist, then it will create the cart for you.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'linesRemove',
                value: '(lines: string[]) => void',
                description:
                  "A callback that removes lines from the cart. Expects the same `lines` input that you would provide to the Storefront API's `cartLinesRemove` mutation. Only lines that are included in the `lines` parameter will be in the cart afterwards.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'linesUpdate',
                value: '(lines: CartLineUpdateInput[]) => void',
                description:
                  "A callback that updates lines in the cart. Expects the same `lines` input that you would provide to the Storefront API's `cartLinesUpdate` mutation. If a line item is not included in the `lines` parameter, it will still exist in the cart and will not be changed.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'noteUpdate',
                value: '(note: string) => void',
                description:
                  "A callback that updates the note in the cart. Expects the same `note` input that you would provide to the Storefront API's `cartNoteUpdate` mutation.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'buyerIdentityUpdate',
                value: '(buyerIdenity: CartBuyerIdentityInput) => void',
                description:
                  "A callback that updates the buyer identity in the cart. Expects the same `buyerIdentity` input that you would provide to the Storefront API's `cartBuyerIdentityUpdate` mutation.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'cartAttributesUpdate',
                value: '(attributes: AttributeInput[]) => void',
                description:
                  "A callback that updates the cart attributes. Expects the same `attributes` input that you would provide to the Storefront API's `cartAttributesUpdate` mutation.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'discountCodesUpdate',
                value: '(discountCodes: string[]) => void',
                description:
                  "A callback that updates the cart's discount codes. Expects the same `codes` input that you would provide to the Storefront API's `cartDiscountCodesUpdate` mutation.",
              },
              {
                filePath: '/cart-types.ts',
                syntaxKind: 'PropertySignature',
                name: 'cartFragment',
                value: 'string',
                description:
                  'The fragment used to query the cart object for all queries and mutations.',
              },
            ],
            value:
              'export interface CartWithActionsDocs extends CartBase, CartActions {}',
          },
          CartStatus: {
            filePath: '/cart-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'CartStatus',
            value: "CartState['status']",
            description: '',
          },
          CartState: {
            filePath: '/cart-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'CartState',
            value:
              "{status: 'uninitialized'; error?: string} | {status: 'fetching'} | {status: 'creating'} | {status: 'updating'; cart: Cart; lastValidCart: Cart} | {status: 'idle'; cart: Cart; error?: string}",
            description: '',
          },
          Cart: {
            filePath: '/cart-types.ts',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'Cart',
            value: 'PartialDeep<CartBase, {recurseIntoArrays: true}>',
            description: '',
            members: [],
          },
        },
      },
    ],
  },
  {
    name: 'useCartLine',
    category: 'hooks',
    isVisualComponent: false,
    related: [
      {
        name: 'CartLineProvider',
        type: 'component',
        url: '/api/hydrogen-react/components/CartLineProvider',
      },
    ],
    description:
      '\n    The `useCartLine` hook provides access to the [CartLine object](https://shopify.dev/api/storefront/unstable/objects/cartline) from the Storefront API. It must be a descendent of a `CartProvider` component.\n  ',
    type: 'component',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';\n\nexport function CartWrapper({cart}) {\n  const firstCartLine = cart.lines.nodes[0];\n  return (\n    &lt;CartLineProvider line={firstCartLine}&gt;\n      &lt;CartLineQuantity /&gt;\n    &lt;/CartLineProvider&gt;\n  );\n}\n\nfunction CartLineQuantity() {\n  const cartLine = useCartLine();\n\n  return &lt;div&gt;{cartLine.quantity}&lt;/div&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {CartLineProvider, useCartLine} from '@shopify/hydrogen-react';\nimport type {Cart} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function CartWrapper({cart}: {cart: Cart}) {\n  const firstCartLine = cart.lines.nodes[0];\n  return (\n    &lt;CartLineProvider line={firstCartLine}&gt;\n      &lt;CartLineQuantity /&gt;\n    &lt;/CartLineProvider&gt;\n  );\n}\n\nfunction CartLineQuantity() {\n  const cartLine = useCartLine();\n\n  return &lt;div&gt;{cartLine.quantity}&lt;/div&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description:
          '`useCartLine` must be a descendent of a `CartProvider` component.',
        type: 'UseCartLineGeneratedType',
        typeDefinitions: {
          UseCartLineGeneratedType: {
            filePath: '/CartLineProvider.tsx',
            name: 'UseCartLineGeneratedType',
            description:
              'The `useCartLine` hook provides access to the [CartLine object](https://shopify.dev/api/storefront/unstable/objects/cartline) from the Storefront API. It must be a descendent of a `CartProvider` component.',
            params: [],
            returns: {
              filePath: '/CartLineProvider.tsx',
              description: '',
              name: 'CartLinePartialDeep',
              value: 'CartLinePartialDeep',
            },
            value:
              "export function useCartLine(): CartLinePartialDeep {\n  const context = useContext(CartLineContext);\n\n  if (context == null) {\n    throw new Error('Expected a cart line context but none was found');\n  }\n\n  return context;\n}",
          },
          CartLinePartialDeep: {
            filePath: '/CartLineProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'CartLinePartialDeep',
            value: 'CartLinePartialDeep',
            description: '',
          },
        },
      },
    ],
  },
  {
    name: 'useMoney',
    category: 'hooks',
    isVisualComponent: false,
    related: [
      {
        name: 'Money',
        type: 'component',
        url: '/api/hydrogen-react/components/money',
      },
    ],
    description:
      '\n    The `useMoney` hook takes a [MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2) and returns a\n    default-formatted string of the amount with the correct currency indicator, along with some of the parts provided by\n    [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat).\n  ',
    type: 'hook',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import {useMoney, ShopifyProvider} from '@shopify/hydrogen-react';\n\nexport function App() {\n  return (\n    &lt;ShopifyProvider languageIsoCode=\"EN\" countryIsoCode=\"US\"&gt;\n      &lt;UsingMoney /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nfunction UsingMoney() {\n  const myMoney = {amount: '100', currencyCode: 'USD'};\n  const money = useMoney(myMoney);\n  return (\n    &lt;&gt;\n      &lt;div&gt;Localized money: {money.localizedString}&lt;/div&gt;\n      &lt;div&gt;Money without trailing zeros: {money.withoutTrailingZeros}&lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {useMoney, ShopifyProvider} from '@shopify/hydrogen-react';\nimport type {MoneyV2} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function App() {\n  return (\n    // @ts-expect-error intentionally missing the rest of the props\n    &lt;ShopifyProvider countryIsoCode=\"US\" languageIsoCode=\"EN\"&gt;\n      &lt;UsingMoney /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nfunction UsingMoney() {\n  const myMoney = {amount: '100', currencyCode: 'USD'} satisfies MoneyV2;\n  const money = useMoney(myMoney);\n  return (\n    &lt;&gt;\n      &lt;div&gt;Localized money: {money.localizedString}&lt;/div&gt;\n      &lt;div&gt;Money without trailing zeros: {money.withoutTrailingZeros}&lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description:
          '`useMoney` must be a descendent of a `ShopifyProvider` component.',
        type: 'UseMoneyGeneratedType',
        typeDefinitions: {
          UseMoneyGeneratedType: {
            filePath: '/useMoney.tsx',
            name: 'UseMoneyGeneratedType',
            description:
              'The `useMoney` hook takes a [MoneyV2 object](https://shopify.dev/api/storefront/reference/common-objects/moneyv2) and returns a default-formatted string of the amount with the correct currency indicator, along with some of the parts provided by [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat). Uses `locale` from `ShopifyProvider` &nbsp;',
            params: [
              {
                name: 'money',
                description: '',
                value: 'MoneyV2',
                filePath: '/useMoney.tsx',
              },
            ],
            returns: {
              filePath: '/useMoney.tsx',
              description: '',
              name: 'UseMoneyValue',
              value: 'UseMoneyValue',
            },
            value:
              "export function useMoney(money: MoneyV2): UseMoneyValue {\n  const {countryIsoCode, languageIsoCode} = useShop();\n  const locale = languageIsoCode.includes('_')\n    ? languageIsoCode.replace('_', '-')\n    : `${languageIsoCode}-${countryIsoCode}`;\n\n  if (!locale) {\n    throw new Error(\n      `useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work`,\n    );\n  }\n\n  const amount = parseFloat(money.amount);\n\n  const options = useMemo(\n    () => ({\n      style: 'currency',\n      currency: money.currencyCode,\n    }),\n    [money.currencyCode],\n  );\n\n  const defaultFormatter = useLazyFormatter(locale, options);\n\n  const nameFormatter = useLazyFormatter(locale, {\n    ...options,\n    currencyDisplay: 'name',\n  });\n\n  const narrowSymbolFormatter = useLazyFormatter(locale, {\n    ...options,\n    currencyDisplay: 'narrowSymbol',\n  });\n\n  const withoutTrailingZerosFormatter = useLazyFormatter(locale, {\n    ...options,\n    minimumFractionDigits: 0,\n    maximumFractionDigits: 0,\n  });\n\n  const withoutCurrencyFormatter = useLazyFormatter(locale);\n\n  const withoutTrailingZerosOrCurrencyFormatter = useLazyFormatter(locale, {\n    minimumFractionDigits: 0,\n    maximumFractionDigits: 0,\n  });\n\n  const isPartCurrency = (part: Intl.NumberFormatPart): boolean =>\n    part.type === 'currency';\n\n  // By wrapping these properties in functions, we only\n  // create formatters if they are going to be used.\n  const lazyFormatters = useMemo(\n    () => ({\n      original: () => money,\n      currencyCode: () => money.currencyCode,\n\n      localizedString: () => defaultFormatter().format(amount),\n\n      parts: () => defaultFormatter().formatToParts(amount),\n\n      withoutTrailingZeros: () =>\n        amount % 1 === 0\n          ? withoutTrailingZerosFormatter().format(amount)\n          : defaultFormatter().format(amount),\n\n      withoutTrailingZerosAndCurrency: () =>\n        amount % 1 === 0\n          ? withoutTrailingZerosOrCurrencyFormatter().format(amount)\n          : withoutCurrencyFormatter().format(amount),\n\n      currencyName: () =>\n        nameFormatter().formatToParts(amount).find(isPartCurrency)?.value ??\n        money.currencyCode, // e.g. \"US dollars\"\n\n      currencySymbol: () =>\n        defaultFormatter().formatToParts(amount).find(isPartCurrency)?.value ??\n        money.currencyCode, // e.g. \"USD\"\n\n      currencyNarrowSymbol: () =>\n        narrowSymbolFormatter().formatToParts(amount).find(isPartCurrency)\n          ?.value ?? '', // e.g. \"$\"\n\n      amount: () =>\n        defaultFormatter()\n          .formatToParts(amount)\n          .filter((part) =>\n            ['decimal', 'fraction', 'group', 'integer', 'literal'].includes(\n              part.type,\n            ),\n          )\n          .map((part) => part.value)\n          .join(''),\n    }),\n    [\n      money,\n      amount,\n      nameFormatter,\n      defaultFormatter,\n      narrowSymbolFormatter,\n      withoutCurrencyFormatter,\n      withoutTrailingZerosFormatter,\n      withoutTrailingZerosOrCurrencyFormatter,\n    ],\n  );\n\n  // Call functions automatically when the properties are accessed\n  // to keep these functions as an implementation detail.\n  return useMemo(\n    () =>\n      new Proxy(lazyFormatters as unknown as UseMoneyValue, {\n        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call\n        get: (target, key) => Reflect.get(target, key)?.call(null),\n      }),\n    [lazyFormatters],\n  );\n}",
            examples: [
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: 'initialize the money object',
                    title: 'Example',
                  },
                  {
                    code: "const money = useMoney({\namount: '100.00',\ncurrencyCode: 'USD'\n})",
                    title: 'Example',
                  },
                  {
                    code: '&nbsp;',
                    title: 'Example',
                  },
                ],
              },
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: 'basic usage, outputs: $100.00',
                    title: 'Example',
                  },
                  {
                    code: 'money.localizedString',
                    title: 'Example',
                  },
                  {
                    code: '&nbsp;',
                    title: 'Example',
                  },
                ],
              },
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: 'without currency, outputs: 100.00',
                    title: 'Example',
                  },
                  {
                    code: 'money.amount',
                    title: 'Example',
                  },
                  {
                    code: '&nbsp;',
                    title: 'Example',
                  },
                ],
              },
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: 'without trailing zeros, outputs: $100',
                    title: 'Example',
                  },
                  {
                    code: 'money.withoutTrailingZeros',
                    title: 'Example',
                  },
                  {
                    code: '&nbsp;',
                    title: 'Example',
                  },
                ],
              },
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: 'currency name, outputs: US dollars',
                    title: 'Example',
                  },
                  {
                    code: 'money.currencyCode',
                    title: 'Example',
                  },
                  {
                    code: '&nbsp;',
                    title: 'Example',
                  },
                ],
              },
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: 'currency symbol, outputs: $',
                    title: 'Example',
                  },
                  {
                    code: 'money.currencySymbol',
                    title: 'Example',
                  },
                  {
                    code: '&nbsp;',
                    title: 'Example',
                  },
                ],
              },
              {
                title: 'Example',
                description: '',
                tabs: [
                  {
                    code: 'without currency and without trailing zeros, outputs: 100',
                    title: 'Example',
                  },
                  {
                    code: 'money.withoutTrailingZerosAndCurrency',
                    title: 'Example',
                  },
                ],
              },
            ],
          },
          UseMoneyValue: {
            filePath: '/useMoney.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'UseMoneyValue',
            value:
              '{\n  /**\n   * The currency code from the `MoneyV2` object.\n   */\n  currencyCode: CurrencyCode;\n  /**\n   * The name for the currency code, returned by `Intl.NumberFormat`.\n   */\n  currencyName?: string;\n  /**\n   * The currency symbol returned by `Intl.NumberFormat`.\n   */\n  currencySymbol?: string;\n  /**\n   * The currency narrow symbol returned by `Intl.NumberFormat`.\n   */\n  currencyNarrowSymbol?: string;\n  /**\n   * The localized amount, without any currency symbols or non-number types from the `Intl.NumberFormat.formatToParts` parts.\n   */\n  amount: string;\n  /**\n   * All parts returned by `Intl.NumberFormat.formatToParts`.\n   */\n  parts: Intl.NumberFormatPart[];\n  /**\n   * A string returned by `new Intl.NumberFormat` for the amount and currency code,\n   * using the `locale` value in the [`LocalizationProvider` component](https://shopify.dev/api/hydrogen/components/localization/localizationprovider).\n   */\n  localizedString: string;\n  /**\n   * The `MoneyV2` object provided as an argument to the hook.\n   */\n  original: MoneyV2;\n  /**\n   * A string with trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains.\n   * For example, `$640.00` turns into `$640`.\n   * `$640.42` remains `$640.42`.\n   */\n  withoutTrailingZeros: string;\n  /**\n   * A string without currency and without trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains.\n   * For example, `$640.00` turns into `640`.\n   * `$640.42` turns into `640.42`.\n   */\n  withoutTrailingZerosAndCurrency: string;\n}',
            description: '',
            members: [
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'currencyCode',
                value: 'CurrencyCode',
                description: 'The currency code from the `MoneyV2` object.',
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'currencyName',
                value: 'string',
                description:
                  'The name for the currency code, returned by `Intl.NumberFormat`.',
                isOptional: true,
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'currencySymbol',
                value: 'string',
                description:
                  'The currency symbol returned by `Intl.NumberFormat`.',
                isOptional: true,
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'currencyNarrowSymbol',
                value: 'string',
                description:
                  'The currency narrow symbol returned by `Intl.NumberFormat`.',
                isOptional: true,
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'amount',
                value: 'string',
                description:
                  'The localized amount, without any currency symbols or non-number types from the `Intl.NumberFormat.formatToParts` parts.',
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'parts',
                value: 'NumberFormatPart[]',
                description:
                  'All parts returned by `Intl.NumberFormat.formatToParts`.',
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'localizedString',
                value: 'string',
                description:
                  'A string returned by `new Intl.NumberFormat` for the amount and currency code, using the `locale` value in the [`LocalizationProvider` component](https://shopify.dev/api/hydrogen/components/localization/localizationprovider).',
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'original',
                value: 'MoneyV2',
                description:
                  'The `MoneyV2` object provided as an argument to the hook.',
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutTrailingZeros',
                value: 'string',
                description:
                  'A string with trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains. For example, `$640.00` turns into `$640`. `$640.42` remains `$640.42`.',
              },
              {
                filePath: '/useMoney.tsx',
                syntaxKind: 'PropertySignature',
                name: 'withoutTrailingZerosAndCurrency',
                value: 'string',
                description:
                  'A string without currency and without trailing zeros removed from the fractional part, if any exist. If there are no trailing zeros, then the fractional part remains. For example, `$640.00` turns into `640`. `$640.42` turns into `640.42`.',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'useProduct',
    category: 'hooks',
    isVisualComponent: false,
    related: [
      {
        name: 'ProductProvider',
        type: 'component',
        url: '/api/hydrogen-react/components/productprovider',
      },
    ],
    description:
      'Provides access to the product value passed to `<ProductProvider />`. It also includes properties for selecting product variants, options, and selling plans.',
    type: 'hook',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {ProductProvider, useProduct} from \'@shopify/hydrogen-react\';\n\nexport function Product({product}) {\n  return (\n    &lt;ProductProvider data={product} initialVariantId="some-id"&gt;\n      &lt;UsingProduct /&gt;\n    &lt;/ProductProvider&gt;\n  );\n}\n\nfunction UsingProduct() {\n  const {product, variants, setSelectedVariant} = useProduct();\n  return (\n    &lt;&gt;\n      &lt;h1&gt;{product?.title}&lt;/h1&gt;\n      {variants?.map((variant) =&gt; {\n        &lt;button onClick={() =&gt; setSelectedVariant(variant)} key={variant?.id}&gt;\n          {variant?.title}\n        &lt;/button&gt;;\n      })}\n      ;\n    &lt;/&gt;\n  );\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import {ProductProvider, useProduct} from '@shopify/hydrogen-react';\nimport type {Product} from '@shopify/hydrogen-react/storefront-api-types';\n\nexport function Product({product}: {product: Product}) {\n  return (\n    &lt;ProductProvider data={product} initialVariantId=\"some-id\"&gt;\n      &lt;UsingProduct /&gt;\n    &lt;/ProductProvider&gt;\n  );\n}\n\nfunction UsingProduct() {\n  const {product, variants, setSelectedVariant} = useProduct();\n  return (\n    &lt;&gt;\n      &lt;h1&gt;{product?.title}&lt;/h1&gt;\n      {variants?.map((variant) =&gt; {\n        &lt;button onClick={() =&gt; setSelectedVariant(variant)} key={variant?.id}&gt;\n          {variant?.title}\n        &lt;/button&gt;;\n      })}\n      ;\n    &lt;/&gt;\n  );\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description: '',
        type: 'ProductHookValue',
        typeDefinitions: {
          ProductHookValue: {
            filePath: '/ProductProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'ProductHookValue',
            value:
              'PartialDeep<\n  UseProductObjects,\n  {recurseIntoArrays: true}\n> & UseProductFunctions',
            description: '',
          },
          UseProductObjects: {
            filePath: '/ProductProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'UseProductObjects',
            value:
              "{\n  /** The raw product from the Storefront API */\n  product: Product;\n  /** An array of the variant `nodes` from the `VariantConnection`. */\n  variants: ProductVariantType[];\n  variantsConnection?: ProductVariantConnection;\n  /** An array of the product's options and values. */\n  options: OptionWithValues[];\n  /** The selected variant. */\n  selectedVariant?: ProductVariantType | null;\n  selectedOptions: SelectedOptions;\n  /** The selected selling plan. */\n  selectedSellingPlan?: SellingPlanType;\n  /** The selected selling plan allocation. */\n  selectedSellingPlanAllocation?: SellingPlanAllocationType;\n  /** The selling plan groups. */\n  sellingPlanGroups?: (Omit<SellingPlanGroupType, 'sellingPlans'> & {\n    sellingPlans: SellingPlanType[];\n  })[];\n  sellingPlanGroupsConnection?: SellingPlanGroupConnection;\n}",
            description: '',
            members: [
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'product',
                value: 'Product',
                description: 'The raw product from the Storefront API',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variants',
                value: 'ProductVariant[]',
                description:
                  'An array of the variant `nodes` from the `VariantConnection`.',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'variantsConnection',
                value: 'ProductVariantConnection',
                description: '',
                isOptional: true,
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'options',
                value: 'OptionWithValues[]',
                description: "An array of the product's options and values.",
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'selectedVariant',
                value: 'ProductVariant',
                description: 'The selected variant.',
                isOptional: true,
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'selectedOptions',
                value: 'SelectedOptions',
                description: '',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'selectedSellingPlan',
                value: 'SellingPlanType',
                description: 'The selected selling plan.',
                isOptional: true,
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'selectedSellingPlanAllocation',
                value: 'SellingPlanAllocationType',
                description: 'The selected selling plan allocation.',
                isOptional: true,
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'sellingPlanGroups',
                value:
                  '(Omit<SellingPlanGroup, "sellingPlans"> & { sellingPlans: SellingPlan[]; })[]',
                description: 'The selling plan groups.',
                isOptional: true,
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'sellingPlanGroupsConnection',
                value: 'SellingPlanGroupConnection',
                description: '',
                isOptional: true,
              },
            ],
          },
          OptionWithValues: {
            filePath: '/ProductProvider.tsx',
            name: 'OptionWithValues',
            description: '',
            members: [
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'name',
                value: 'string',
                description: '',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'values',
                value: 'string[]',
                description: '',
              },
            ],
            value:
              "export interface OptionWithValues {\n  name: SelectedOptionType['name'];\n  values: SelectedOptionType['value'][];\n}",
          },
          SelectedOptions: {
            filePath: '/ProductProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'SelectedOptions',
            value: '{\n  [key: string]: string;\n}',
            description: '',
            members: [],
          },
          UseProductFunctions: {
            filePath: '/ProductProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'UseProductFunctions',
            value:
              "{\n  /** A callback to set the selected variant to the variant passed as an argument. */\n  setSelectedVariant: (\n    variant: PartialDeep<ProductVariantType, {recurseIntoArrays: true}> | null,\n  ) => void;\n  /** A callback to set the selected option. */\n  setSelectedOption: (\n    name: SelectedOptionType['name'],\n    value: SelectedOptionType['value'],\n  ) => void;\n  /** A callback to set multiple selected options at once. */\n  setSelectedOptions: (options: SelectedOptions) => void;\n  /** A callback to set the selected selling plan to the one passed as an argument. */\n  setSelectedSellingPlan: (\n    sellingPlan: PartialDeep<SellingPlanType, {recurseIntoArrays: true}>,\n  ) => void;\n  /** A callback that returns a boolean indicating if the option is in stock. */\n  isOptionInStock: (\n    name: SelectedOptionType['name'],\n    value: SelectedOptionType['value'],\n  ) => boolean;\n}",
            description: '',
            members: [
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'setSelectedVariant',
                value:
                  '(variant: PartialObjectDeep<ProductVariant, { recurseIntoArrays: true; }>) => void',
                description:
                  'A callback to set the selected variant to the variant passed as an argument.',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'setSelectedOption',
                value: '(name: string, value: string) => void',
                description: 'A callback to set the selected option.',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'setSelectedOptions',
                value: '(options: SelectedOptions) => void',
                description:
                  'A callback to set multiple selected options at once.',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'setSelectedSellingPlan',
                value:
                  '(sellingPlan: PartialObjectDeep<SellingPlan, { recurseIntoArrays: true; }>) => void',
                description:
                  'A callback to set the selected selling plan to the one passed as an argument.',
              },
              {
                filePath: '/ProductProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'isOptionInStock',
                value: '(name: string, value: string) => boolean',
                description:
                  'A callback that returns a boolean indicating if the option is in stock.',
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'useShop',
    category: 'hooks',
    isVisualComponent: false,
    related: [
      {
        name: 'ShopifyProvider',
        type: 'components',
        url: '/api/hydrogen-react/components/ShopifyProvider',
      },
    ],
    description:
      'Provides access to the `shopifyConfig` prop of `<ShopifyProvider/>`.',
    type: 'hook',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: 'import {ShopifyProvider, useShop} from \'@shopify/hydrogen-react\';\n\nexport default function App() {\n  return (\n    &lt;ShopifyProvider\n      storeDomain="my-store"\n      storefrontToken="abc123"\n      storefrontApiVersion="2022-10"\n      countryIsoCode="CA"\n      languageIsoCode="EN"\n    &gt;\n      &lt;UsingUseShop /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nexport function UsingUseShop() {\n  const shop = useShop();\n\n  return (\n    &lt;&gt;\n      &lt;div&gt;{shop.storeDomain}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontToken}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontApiVersion}&lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n',
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: 'import {ShopifyProvider, useShop} from \'@shopify/hydrogen-react\';\n\nexport default function App() {\n  return (\n    &lt;ShopifyProvider\n      storeDomain="my-store"\n      storefrontToken="abc123"\n      storefrontApiVersion="2022-10"\n      countryIsoCode="CA"\n      languageIsoCode="EN"\n    &gt;\n      &lt;UsingUseShop /&gt;\n    &lt;/ShopifyProvider&gt;\n  );\n}\n\nexport function UsingUseShop() {\n  const shop = useShop();\n\n  return (\n    &lt;&gt;\n      &lt;div&gt;{shop.storeDomain}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontToken}&lt;/div&gt;\n      &lt;div&gt;{shop.storefrontApiVersion}&lt;/div&gt;\n    &lt;/&gt;\n  );\n}\n',
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'Props',
        description:
          '`useShop` must be a descendent of a `ShopifyProvider` component.',
        type: 'UseShopGeneratedType',
        typeDefinitions: {
          UseShopGeneratedType: {
            filePath: '/ShopifyProvider.tsx',
            name: 'UseShopGeneratedType',
            description:
              'Provides access to the `shopifyConfig` prop of `<ShopifyProvider/>`. Must be a descendent of `<ShopifyProvider/>`.',
            params: [],
            returns: {
              filePath: '/ShopifyProvider.tsx',
              description: '',
              name: 'ShopifyContextValue',
              value: 'ShopifyContextValue',
            },
            value:
              "export function useShop(): ShopifyContextValue {\n  const shopContext = useContext(ShopifyContext);\n  if (!shopContext) {\n    throw new Error(`'useShop()' must be a descendent of <ShopifyProvider/>`);\n  }\n  return shopContext;\n}",
          },
          ShopifyContextValue: {
            filePath: '/ShopifyProvider.tsx',
            name: 'ShopifyContextValue',
            description: '',
            members: [
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontId',
                value: 'string',
                description: 'The globally-unique identifier for the Shop',
                isOptional: true,
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storeDomain',
                value: 'string',
                description:
                  'The full domain of your Shopify storefront URL (eg: the complete string of `{subdomain}.myshopify.com`).',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontToken',
                value: 'string',
                description:
                  'The Storefront API public access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details.',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontApiVersion',
                value: 'string',
                description:
                  'The Storefront API version. This should almost always be the same as the version Hydrogen React was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'countryIsoCode',
                value: 'CountryCode',
                description:
                  "The code designating a country, which generally follows ISO 3166-1 alpha-2 guidelines. If a territory doesn't have a country code value in the `CountryCode` enum, it might be considered a subdivision of another country. For example, the territories associated with Spain are represented by the country code `ES`, and the territories associated with the United States of America are represented by the country code `US`.",
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'languageIsoCode',
                value: 'LanguageCode',
                description: '`ISO 369` language codes supported by Shopify.',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'getStorefrontApiUrl',
                value: '(props?: GetStorefrontApiUrlProps) => string',
                description:
                  "Creates the fully-qualified URL to your store's GraphQL endpoint.\n\nBy default, it will use the config you passed in when creating `<ShopifyProvider/>`. However, you can override the following settings on each invocation of `getStorefrontApiUrl({...})`:\n\n- `storeDomain` - `storefrontApiVersion`",
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'getPublicTokenHeaders',
                value:
                  '(props: GetPublicTokenHeadersProps) => Record<string, string>',
                description:
                  'Returns an object that contains headers that are needed for each query to Storefront API GraphQL endpoint. This uses the public Storefront API token.\n\nBy default, it will use the config you passed in when creating `<ShopifyProvider/>`. However, you can override the following settings on each invocation of `getPublicTokenHeaders({...})`:\n\n- `contentType` - `storefrontToken`',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'getShopifyDomain',
                value: '(props?: GetShopifyDomainProps) => string',
                description:
                  'Creates the fully-qualified URL to your myshopify.com domain.\n\nBy default, it will use the config you passed in when calling `<ShopifyProvider/>`. However, you can override the following settings on each invocation of `getShopifyDomain({...})`:\n\n- `storeDomain`',
              },
            ],
            value:
              'export interface ShopifyContextValue\n  extends ShopifyProviderBase,\n    ShopifyContextReturn {}',
          },
          GetStorefrontApiUrlProps: {
            filePath: '/ShopifyProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'GetStorefrontApiUrlProps',
            value:
              '{\n  /** The host name of the domain (eg: `{shop}.myshopify.com`). */\n  storeDomain?: string;\n  /** The Storefront API version. This should almost always be the same as the version Hydrogen-UI was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details. */\n  storefrontApiVersion?: string;\n}',
            description: '',
            members: [
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storeDomain',
                value: 'string',
                description:
                  'The host name of the domain (eg: `{shop}.myshopify.com`).',
                isOptional: true,
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontApiVersion',
                value: 'string',
                description:
                  'The Storefront API version. This should almost always be the same as the version Hydrogen-UI was built for. Learn more about Shopify [API versioning](https://shopify.dev/api/usage/versioning) for more details.',
                isOptional: true,
              },
            ],
          },
          GetPublicTokenHeadersProps: {
            filePath: '/ShopifyProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'GetPublicTokenHeadersProps',
            value:
              '{\n  /**\n   * Customizes which `"content-type"` header is added when using `getPrivateTokenHeaders()` and `getPublicTokenHeaders()`. When fetching with a `JSON.stringify()`-ed `body`, use `"json"`. When fetching with a `body` that is a plain string, use `"graphql"`. Defaults to `"json"`\n   */\n  contentType: \'json\' | \'graphql\';\n  /** The Storefront API access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details. */\n  storefrontToken?: string;\n}',
            description: '',
            members: [
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'contentType',
                value: '"json" | "graphql"',
                description:
                  'Customizes which `"content-type"` header is added when using `getPrivateTokenHeaders()` and `getPublicTokenHeaders()`. When fetching with a `JSON.stringify()`-ed `body`, use `"json"`. When fetching with a `body` that is a plain string, use `"graphql"`. Defaults to `"json"`',
              },
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storefrontToken',
                value: 'string',
                description:
                  'The Storefront API access token. Refer to the [authentication](https://shopify.dev/api/storefront#authentication) documentation for more details.',
                isOptional: true,
              },
            ],
          },
          GetShopifyDomainProps: {
            filePath: '/ShopifyProvider.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'GetShopifyDomainProps',
            value: '{storeDomain?: string}',
            description: '',
            members: [
              {
                filePath: '/ShopifyProvider.tsx',
                syntaxKind: 'PropertySignature',
                name: 'storeDomain',
                value: 'string',
                description: '',
                isOptional: true,
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'useShopifyCookies',
    category: 'hooks',
    isVisualComponent: false,
    related: [
      {
        subtitle: 'Utility',
        name: 'sendShopifyAnalytics',
        url: '/api/hydrogen-react/utilities/sendShopifyAnalytics',
        type: 'gear',
      },
      {
        subtitle: 'Utility',
        name: 'getClientBrowserParameters',
        url: '/api/hydrogen-react/utilities/getclientbrowserparameters',
        type: 'gear',
      },
      {
        subtitle: 'Utility',
        name: 'getShopifyCookies',
        url: '/api/hydrogen-react/utilities/getShopifyCookies',
        type: 'gear',
      },
    ],
    description:
      'Sets Shopify user and session cookies and refreshes the expiry time.',
    type: 'hooks',
    defaultExample: {
      description: 'I am the default example',
      codeblock: {
        tabs: [
          {
            title: 'JavaScript',
            code: "import * as React from 'react';\nimport {useShopifyCookies} from '@shopify/hydrogen-react';\n\nexport default function App({Component, pageProps}) {\n  useShopifyCookies({hasUserConsent: false});\n\n  return &lt;Component {...pageProps} /&gt;;\n}\n",
            language: 'jsx',
          },
          {
            title: 'TypeScript',
            code: "import * as React from 'react';\nimport {useShopifyCookies} from '@shopify/hydrogen-react';\n\nexport default function App({Component, pageProps}) {\n  useShopifyCookies({hasUserConsent: false});\n\n  return &lt;Component {...pageProps} /&gt;;\n}\n",
            language: 'tsx',
          },
        ],
        title: 'Example code',
      },
    },
    definitions: [
      {
        title: 'useShopifyCookies',
        description:
          'Manages Shopify cookies. If `hasUserConsent` option is false, Shopify cookies will be removed.',
        type: 'UseShopifyCookiesGeneratedType',
        typeDefinitions: {
          UseShopifyCookiesGeneratedType: {
            filePath: '/useShopifyCookies.tsx',
            name: 'UseShopifyCookiesGeneratedType',
            description: '',
            params: [
              {
                name: 'options',
                description: '',
                value: 'UseShopifyCookiesOptions',
                isOptional: true,
                filePath: '/useShopifyCookies.tsx',
              },
            ],
            returns: {
              filePath: '/useShopifyCookies.tsx',
              description: '',
              name: 'void',
              value: 'void',
            },
            value:
              "export function useShopifyCookies(options?: UseShopifyCookiesOptions): void {\n  const {hasUserConsent = false, domain = ''} = options || {};\n  useEffect(() => {\n    const cookies = getShopifyCookies(document.cookie);\n\n    /**\n     * Set user and session cookies and refresh the expiry time\n     */\n    if (hasUserConsent) {\n      setCookie(\n        SHOPIFY_Y,\n        cookies[SHOPIFY_Y] || buildUUID(),\n        longTermLength,\n        domain,\n      );\n      setCookie(\n        SHOPIFY_S,\n        cookies[SHOPIFY_S] || buildUUID(),\n        shortTermLength,\n        domain,\n      );\n    } else {\n      setCookie(SHOPIFY_Y, '', 0, domain);\n      setCookie(SHOPIFY_S, '', 0, domain);\n    }\n  });\n}",
          },
          UseShopifyCookiesOptions: {
            filePath: '/useShopifyCookies.tsx',
            syntaxKind: 'TypeAliasDeclaration',
            name: 'UseShopifyCookiesOptions',
            value:
              '{\n  /**\n   * If set to `false`, Shopify cookies will be removed.\n   * If set to `true`, Shopify unique user token cookie will have cookie expiry of 1 year.\n   * Defaults to false.\n   **/\n  hasUserConsent?: boolean;\n  /**\n   * The domain scope of the cookie. Defaults to empty string.\n   **/\n  domain?: string;\n}',
            description: '',
            members: [
              {
                filePath: '/useShopifyCookies.tsx',
                syntaxKind: 'PropertySignature',
                name: 'hasUserConsent',
                value: 'boolean',
                description:
                  'If set to `false`, Shopify cookies will be removed. If set to `true`, Shopify unique user token cookie will have cookie expiry of 1 year. Defaults to false.',
                isOptional: true,
              },
              {
                filePath: '/useShopifyCookies.tsx',
                syntaxKind: 'PropertySignature',
                name: 'domain',
                value: 'string',
                description:
                  'The domain scope of the cookie. Defaults to empty string.',
                isOptional: true,
              },
            ],
          },
        },
      },
    ],
  },
];
