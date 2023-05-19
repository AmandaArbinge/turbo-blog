DPC Turbo certification

Part 1: Github
What is a monorepo and what pros and cons does it have?

Monorepo is a way of working that your entire project in one repo, both frontend, backend. There is a lot of files to keep track of, I can imagine this becoming a problem when having a bigger project than this. The advantage is to have all of your code in your view.

What is a PR and what are the characteristics of a good PR you think? Answer:

A PR is a Pull request, is changes to your bransch that you want to merge into the main bransch. A good pull request has a descriptive name and comment. It is catogorized and doesnt include an overwhelming amounts of code. And it has clean code! 👍

Part 2: UI Components
How does TailwindCSS work in general. Basic concepts?

Tailwind is a form of writing css without having a seperate styling file where you can write the styling into your classes. Tailwind has a utility classes, where it has a preset of already made classes like 'text-sm', it then scans your code for classnames generating styling in a css file.

Why are there two tailwind.config.js files in our monorepo? Answer:

Probably because we have 2 parts of the code for components, both ui/web and containers.

In typescript there are something called utility types. For example, please explain what Record and Omit does. Answer:

Utility types provides a solution to the problem of changing types, one can be declared as one type return another type. Record creates like an object with two different types like a key value pair. Omit can remove one type from object.

What is Atomic Design? And how does it apply to frontend development?

Atomic design is a principle of building basic blocks for components preferably reusable ones.

In this example we send data as props to the component (posts). What are alternative ways to do this? What is "prop drilling" and why is it bad?

Prop drilling is a concept where the props between multiple parent child dynamics, this becomes tedious. Alternatively, useContext can be used and in our case redux toolkit could have keepen track of the variable being passed from one component to the next.
What improvment or feature could you add to this component?

Part 3: NextJS
Explain the different modes of building in NextJs, SSR, SSG, ISR et

SSR (server side rendering)
Server side rendering is the process of pre-rendering the page on the server. The key thing to note here is the server builds and renders a new page for every request made.

SSG (static site generation)
Static side generation the page is pre-rendered at compile time. That means that the user won’t have to wait for the page to load at the browser; the page will simply be rendered. The one big difference is that SSG does all of its rendering before the user requests a page.

ISR(Incremental Static Regeneration)
SSG might cause you to rebuild the entire site very frequently for changes that are contained in a single page. ISR allows you to rebuild only the updated pages after the site is built.

Explain the getStaticProps, getStaticPaths and getServerSideProps functions.

getStaticProp-
Next.js will pre-render this page at build time using the props returned by getStaticProps.

getStaticPaths-
When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.

getServerSideProps- Using a getServerSideProps function put specific requirements on the server that hosts the web app. Why?

getSeverSideProps is rendered on each request using the data returned by getServerSideProps. This is quite a lot of work for the server, this is in turn put requirements on the server.

In this task we solve this by creating a file called [id].tsx. What is an alternative way and when would you use that?
[...slug] can be used instead of [id], slug should be used when specific parameters are used.

There are two ways (at least) to do this. Either using the Link component or programmatically using the router. What are pros and cons of either? Bonus: What do you get automatically when using Link that you have to do manually using the router. (hint: it increases perceived performance)

Router.push push to the location without creating <a> tag which makes the links not detectable by web crawlers. Link does create an <a> tag. 

Part 4: Redux Toolkit
When do you need a global state manager like RTK?
To keep state of variable between different parts of your app like when you like something on a page and want to save that liked item throughout the entire application.

When do you not need it?
When you want to keep track on a variable between different pages/part of your app.

What could be used instead?
Usecontext hook, this manages state globally.

What is a 'slice' in RTK? And why is it a nice concept?
It's a function that deals with everything you need for each slice, with actions and reducers it's available in this specific slice function. The other benefit of using createSlice is our files structure. You can put all Redux-related logic for the slice into a single file.

Part 5: RTK Query
What is RTK Query usued for?

RTK Query is for simplifying fetching and caching data. Without the need for writing the logic for this by hand as this is included in createAPi and fetchBaseQuery.

Where does the 'wrapper' come from and what does it provide? What data does the context include?
I dont completely understand this part, but after reading about it. Wrapper creates a server-side redux store and dispatches its payload to the created store.

Part 6: RTK Query
MSW intercept network requests, what are other ways to mock data? What is the main advantage of using MSW?

MSW mocks by intercepting requests on the network level. The mock can be reused for testing, development, and debugging. One of the alternate ways would be to use another service for mock api like mockapi.io, postman and mirage.js. These don’t work by intercepting the network request.
