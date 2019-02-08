1. In your own words, describe actions, reducers and the store and their        role in Redux. What does each piece do? Why is the store known as a          single source of truth' in a redux application?

Ans. Actions are payloads of information the sends data to your store. They       are the only source of information for the store. 
     An action is an object with up to two properties. Actions tell reducers how to update the state.
     Reducers are where we can update our state.  Reducers are pure functions. Reducers take two arguments, Current state and the action object. Reducers will not update state directly, but it will always return a new object.
     The store contains our state for our app. Store is a single JavaScript object that represents every change that’s made in your app.
     Single source of truth means it is making your components controllable. Store is the only place you would change data. If you had a redux store that had items you want to show, and you want to change the items, you don’t change the data anywhere else other than store.

2. What is the difference between Application state and Component state?        When would be a good time to use one over the other?

Ans. Application state is global. All components in the component tree can        access.
     Component state is local. It is local to a single component and cannot be seen outside of this component. Component state should be used on smaller apps where it is not necessary to have it accessed by many other components.

3. Describe redux-thunk, what does it allow us to do? How does it change our    action-creators?

Ans. Redux Thunk is a middleware that gives us the ability to handle              asynchronous operations inside our action creators. It changes               the action creators to be able to perform async API calls.