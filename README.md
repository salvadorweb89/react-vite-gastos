# react-vite-gastos
A simple React Vite project to manage a personal monthly budget and bills.


### Technology:

- Docker container based on official Node 18 Docker Image, to keep isolated all project files and dependencies.
- Vite 4 as build tool.
- ReactJS 18 as JS Framework.
- NormalizeCSS and custom CSS for styles.
- LocalStorage to implement data persistence.
- Hosted and deployed in Netlitfy.


### Features

- Allows define a monthly budget and verifies if given value is valid.
- Allows main CRUD operations over 'bill' entity. This operations are made through swipeable list of elements.
- Implements up to 8 components to split code and functionality related to each component.
- Uses React useState and useEffect Hooks to manage State and spread Ojects reactivity through application.
- Uses (React Swipeable List)[https://github.com/marekrozmus/react-swipeable-list] to implement a swipeable list of elements.
- Uses (React Circular Progressbar)[https://github.com/kevinsqi/react-circular-progressbar] to implement a circular progressbar.
