export const Product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'ProductName',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'ProductPrice',
            type: 'string',
            title: 'Product Price'
        },
        {
            name: 'ProductImage',
            type: 'image',
            title: 'Product Image'
        }
    ]
}