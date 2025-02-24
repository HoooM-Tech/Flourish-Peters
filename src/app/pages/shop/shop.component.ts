import { Component } from '@angular/core';

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  author: string;
  type: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  activeTab: string = "featured";
  searchQuery: string = "";
  selectedAuthor: string = "any";
  selectedSort: string = "newest";

  tabs: string[] = ["featured", "books", "music"];

  bookBannerImage =
    "assets/shop/book-banner.png";
  musicBannerImage =
    "assets/shop/music-banner.png";

  // Preview products for featured page
  previewBooks: Product[] = [
    {
      id: "1",
      image: "assets/shop/pray.png",
      title: "- New Pray As You Go!",
      price: 10000,
      author: "Dr. Flourish Peters",
      type: "Hard Cover"
    },
    {
      id: "2",
      image: "assets/shop/genesis.png",
      title: "The Revelation Gen...",
      price: 10000,
      author: "Dr. Flourish Peters",
      type: "Hard Cover"
    },
  ];

  previewMusic: Product[] = [
    {
      id: "3",
      image: "assets/shop/jesusanthem.png",
      title: "I Have Life",
      price: 10000,
      author: "Dr. Flourish Peters & Noble...",
      type: "Music"
    },
    {
      id: "4",
      image: "assets/shop/lifemusic.png",
      title: "Jesus Anthem",
      price: 10000,
      author: "Dr. Flourish Peters",
      type: "Music"
    },
  ];

  // Full product lists
  bookProducts: Product[] = [
    ...this.previewBooks,
    // Add more books
    {
      id: "5",
      image: "assets/shop/pray.png",
      title: "The Revelation Gen...",
      price: 10000,
      author: "Dr. Flourish Peters",
      type: "Hard Cover"
    },
    // Add more books as needed
  ];

  musicProducts: Product[] = [
    ...this.previewMusic,
    // Add more music
    {
      id: "6",
      image: "assets/shop/lifemusic.png",
      title: "I Have Life",
      price: 10000,
      author: "Dr. Flourish Peters",
      type: "Music"
    },
    // Add more music as needed
  ];

  get filteredProducts(): Product[] {
    let products =
      this.activeTab === "books" ? this.bookProducts : this.musicProducts;
    return this.filterAndSortProducts(products);
  }

  filterAndSortProducts(products: Product[]): Product[] {
    let filtered = [...products];

    if (this.searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          product.author.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    }

    if (this.selectedAuthor !== "any") {
      filtered = filtered.filter(
        (product) => product.author !== "Unknown Author",
      );
    }

    filtered.sort((a, b) => {
      switch (this.selectedSort) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }

  clearFilters(): void {
    this.searchQuery = "";
    this.selectedAuthor = "any";
    this.selectedSort = "newest";
  }


}