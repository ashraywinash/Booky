import { generateUniqueId } from "./hash.js";


export let productss = [
    {   
        name:'Harry Potter',
        price:22,
        pages:120,
        rating:4.5,
        pic:'https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_1333535796/responsivegrid_19882/image_copy_959293594.coreimg.100.1285.png/1693924396564/4-hp-grandpre-refresh-gobletfire-sm.png'
    },
    {   
        name:'Atomic Habits',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://miro.medium.com/v2/resize:fit:1200/1*tQszPBlBdi522xW1DnhwgQ.jpeg'
    },
    {   
        name:'A Monk who sold his ferrari',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/61M1roonGiL._AC_UF1000,1000_QL80_.jpg'
    },
    {   
        name:'Bunch OF Books',
        price:22,
        pages:120,
        rating:4.5,
        pic:'https://assets.vogue.com/photos/619e4ddd2c019c99789bcd08/master/w_1600%2Cc_limit/00_story.jpg'
    },
    {   
        name:'Rich Dad Poor Dad',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/51AHZGhzZEL.jpg'
    },
    {   
        name:'Concepts Of Physics Vol-1',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/41ijdEFWfmL._AC_UF1000,1000_QL80_.jpg'
    },
    {   
        name:'Concepts Of Physics Vol-2',
        price:22,
        pages:120,
        rating:4.5,
        pic:'https://5.imimg.com/data5/AL/VI/MY-54836353/concepts-of-physics-by-hc-verma-volume-2-500x500.jpg'
    },
    {   
        name:'Bhagvad Gita',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/91msEbTletL._AC_UF1000,1000_QL80_.jpg'
    },
    {   
        name:'Ramayana',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/91odtfOhJ-L._AC_UF1000,1000_QL80_.jpg'
    },

    {   
        name:'Harry Potter',
        price:22,
        pages:120,
        rating:4.5,
        pic:'https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_1333535796/responsivegrid_19882/image_copy_959293594.coreimg.100.1285.png/1693924396564/4-hp-grandpre-refresh-gobletfire-sm.png'
    },
    {   
        name:'Atomic Habits',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://miro.medium.com/v2/resize:fit:1200/1*tQszPBlBdi522xW1DnhwgQ.jpeg'
    },
    {   
        name:'A Monk who sold his ferrari',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/61M1roonGiL._AC_UF1000,1000_QL80_.jpg'
    },
    {   
        name:'Bunch OF Books',
        price:22,
        pages:120,
        rating:4.5,
        pic:'https://assets.vogue.com/photos/619e4ddd2c019c99789bcd08/master/w_1600%2Cc_limit/00_story.jpg'
    },
    {   
        name:'Rich Dad Poor Dad',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/51AHZGhzZEL.jpg'
    },
    {   
        name:'Concepts Of Physics Vol-1',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/41ijdEFWfmL._AC_UF1000,1000_QL80_.jpg'
    },
    {   
        name:'Concepts Of Physics Vol-2',
        price:22,
        pages:120,
        rating:4.5,
        pic:'https://5.imimg.com/data5/AL/VI/MY-54836353/concepts-of-physics-by-hc-verma-volume-2-500x500.jpg'
    },
    {   
        name:'Bhagvad Gita',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/91msEbTletL._AC_UF1000,1000_QL80_.jpg'
    },
    {   
        name:'Ramayana',
        price:100,
        pages:1000,
        rating:4.5,
        pic:'https://m.media-amazon.com/images/I/91odtfOhJ-L._AC_UF1000,1000_QL80_.jpg'
    }

]

function addIdToItems(prods){
    prods.forEach(element => {
        element.id = generateUniqueId(element.name)
    });
    return prods;
}

export const products = addIdToItems(productss)







