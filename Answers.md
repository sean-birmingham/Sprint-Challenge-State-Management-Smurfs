1. What problem does the context API help solve?

Context API provides a way to share values between components without having to explicitly pass a prop through every level of the state tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are packets of information that describe events that have occurred in the UI. They are simply objects that are dispatched to the reducers, and tell the reducers how to update the state tree
- Reducers are pure functions. They take take in the current state tree and an action as arguments
- The store holds the state tree (data for your application). The state tree is then given to the View (UI) and the component will receive it and usually pass down to other components
- Store is known as a 'single source of truth because it brings actions and reducers together

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and Component state local. Redux is a good example of why application state should be used over component state. Component state lives within that specific component and can only be updated and passed down to its children via props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that provides the ability to handle asynchronous operations inside out action-creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I really like Redux because it's great to use when making large applications.
