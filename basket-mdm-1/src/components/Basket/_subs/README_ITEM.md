# Composant Item

## Description

Composant qui génère le descriptif d'un produit dans le panier

## Entries

```javascript

props: {
  size: {
    type: Object,
    default: null,
    description: Object of values related to a product in basket
  }
}

item: {
  name: {
    description: "the name of the product",
    type: string
  },
  qty: {
    description: "number of this product in the basket"
    type: number
  },
  reference: {
    description: "reference of this product"
    type: String
  },
  images: {
    description: "images of the product"
    type: Array
  },
  price: {
    description: "price objects"
    type: Object
  }
}

```

## Outputs

updateItemQuantity on button clicks
