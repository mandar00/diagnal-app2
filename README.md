<a id="readme-top"></a>




 
# DIAGNAL MOVIES LIST APP

## A movie app with infintie scroll and client side search ablity

### APPLICATION FLOW
#### Ctrl + click on nodes in the flow chart will redirect you to the code segment

```mermaid
flowchart TB
    id1[(Data Store)]-->MoviesController
    subgraph Theme 
    theme
    end
    subgraph Components [App]
    Routes -->MoviesController
    MoviesController --> SearchController
    MoviesController --> MoviesRenderer
    end
    subgraph SearchController
      direction TB
      onSearch
      onSearch --> updateFilteredData
      onSearch --> updateSearchingState
      SearchHeader
    end
    subgraph MoviesRenderer
      direction TB
      onScroll 
      onScroll-->updateMovieData
      MoviesCard
    end
    subgraph Redux
    Reducer-->SliceReducer
    SliceReducer--> MoviesListSlice
    MoviesListSlice--> updateMovieData
    MoviesListSlice--> updateFilteredData
    MoviesListSlice--> updateSearchingState
    Reducer-->id1[(Data Store)]
    end
    theme--> Components


    click theme "https://github.com/mandar00/diagnal-app/blob/main/src/styles/Theme/index.ts" _blank
    click Route "https://github.com/mandar00/diagnal-app/blob/main/src/views/Routes/routes.tsx" _blank
    click MoviesController "https://github.com/mandar00/diagnal-app/blob/main/src/pages/MovieList/index.tsx" _blank
    click SearchController "https://github.com/mandar00/diagnal-app/blob/main/src/pages/MovieList/controllers/SearchController.tsx" _blank
    click MoviesRenderer "https://github.com/mandar00/diagnal-app/blob/main/src/pages/MovieList/controllers/MovieListRenderer.tsx" _blank
    click onSearch "https://github.com/mandar00/diagnal-app/blob/main/src/pages/MovieList/controllers/SearchController.tsx#L31" _blank
    click onScroll "https://github.com/mandar00/diagnal-app/blob/main/src/pages/MovieList/controllers/MovieListRenderer.tsx#L50" _blank
    click SearchHeader "https://github.com/mandar00/diagnal-app/blob/main/src/components/SearchHeader/index.tsx" _blank
    click MoviesCard "https://github.com/mandar00/diagnal-app/blob/main/src/components/MovieCard/index.tsx" _blank
    click updateMovieData "https://github.com/mandar00/diagnal-app/blob/main/src/store/slice/MovieListSlice.tsx#L29" _blank
    click updateFilteredData "https://github.com/mandar00/diagnal-app/blob/main/src/store/slice/MovieListSlice.tsx#L40" _blank
    click updateSearchingState "https://github.com/mandar00/diagnal-app/blob/main/src/store/slice/MovieListSlice.tsx#L47" _blank
```


### Built With

- [![React][React.js]][React-url]
- [![Typescript][Typescript]][Typescript-url]
- [![Typescript][styled-components]][styled-components-url]
- [![Typescript][redux-toolkit]][redux-toolkit-url]
- [![React][MUI]][MUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[![Product Name Screen Shot][App-screenshot]](https://diagnal-app-sigma.vercel.app/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mandar00/diagnal-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your BASE_URL in `.env.developmnt` and `.env.production`
   ```js
   const BASE_URL = "ENTER YOUR API";
   ```

### Start

- Run project locally
  ```sh
  npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[Typescript]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Typescript-url]: https://www.typescriptlang.org/
[React.js]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB
[React-url]: https://reactjs.org/
[styled-components]: https://img.shields.io/badge/styled%20components-20232A?style=for-the-badge&logo=styled-components&logoColor=61DAFB
[styled-components-url]: https://styled-components.com/
[redux-toolkit]: https://img.shields.io/badge/redux%20toolkit-20232A?style=for-the-badge&logo=redux&logoColor=61DAFB
[redux-toolkit-url]: https://redux-toolkit.js.org/
[MUI]: https://img.shields.io/badge/MUI-20232A?style=for-the-badge&logo=mui&logoColor=61DAFB
[MUI-url]: https://mui.com/
[App-screenshot]: src/assets/images/Screenshot%20from%202024-10-10%2002-32-34.png
