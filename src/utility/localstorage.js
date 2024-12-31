// Read Book LocalStorage:
const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-book');
    if (storedReadBook) {
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBook = (id) => {
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(bookId => bookId.id === id);

    if (!exists) {
        storedReadBooks.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedReadBooks));
    }

    return storedReadBooks;
}


// Wishlist LocalStorage:
const getStoredWishlist = () => {
    const storedWishlists = localStorage.getItem('book-wishlist');
    if(storedWishlists){
        return JSON.parse(storedWishlists);
    }
    return [];
}
const saveWishlist = (id) =>{
    const storedWishlists = getStoredWishlist();
    const exists = storedWishlists.find(bookWishlist => bookWishlist.id === id);
    if(!exists){
        storedWishlists.push(id);
        localStorage.setItem('book-wishlist', JSON.stringify(storedWishlists));
    }
    return storedWishlists;

}

export { getStoredReadBook, saveReadBook, getStoredWishlist, saveWishlist };