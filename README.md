
# Music List App
This repository contains React components for a simple music list application. It includes a Navbar component and a Card component.

# Navbar Component
The Navbar component displays the title of the application and a favorite counter. It takes a prop dataValue which is an array of music items. It renders the title "music" along with an icon, and a favorite counter showing the number of items marked as favorite.
Currently, two official plugins are available:

# Card Component
The Card component displays individual music items with their artist, song, and image. It also includes a button to add the item to favorites. It takes props value, setValue, and index.

# Props
value: An object representing a music item with properties artist, song, imgSrc, and addToFav.
setValue: A function to handle changes in the parent component when the favorite button is clicked.
index: The index of the music item in the list.

# This app using two pluggins.
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
