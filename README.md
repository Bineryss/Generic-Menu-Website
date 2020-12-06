# Generic Menu Website

## What is this about?

peronaly I hate menu cards at a resturant. There allways to big, I cant find anything in it, there allways to few and when I get to order I forgot hlf of what I wanted to order

So this React based project should fix all the above problemws with a modern and mobile optimised approach.

This project should make it easy for resturant owners to setup a simple online menu card.

## How to add new items to the menu?

Who needs a Database if you can load everything in the ram... sounds reasonable

Thanks to its simple datastructure even non programmer can add new Items to the menu

A menu item is structured as simply as possible:

```
{
    id: number,
    title: string,
    price: nnumber,
    description: string,
    category: number
    images: [
        string, ....
    ]
}
```

-   id: must be a unique number
-   title: name of the dish
-   price: well price of the dish... duh
-   description: a short description of the dish
-   category: which category is the dish in
-   images: an array of strings with the path to the images, one images is needed more are optional

### Future changes

-   choose between side dishes in the main dish
-   proper backend (maybe.. probably not)

## Disclaimer

This is a fun project and will probably be discontinued in the next few weeks
