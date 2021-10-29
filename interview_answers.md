# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    A functional component is essentially a function in a different file that we can call so we can have a cleaner main file that doesn't require us to write all the functions within one long file. A class component however, creates a render function so we have to extend from React in the top of that component. Without render, these class components won't load. However, class components can then use stateful logic, such as checking when the component mounts or renders, making correct updates as necessary. Functional components cannot do this, they essentially are fed data to do or show something. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    componentWillMount is called right before mounting, and before rendering. componentWillUpdate is called when new state is set or when new props are added, and is called to update before the rerender. From what I've seen, it seems these two have been replaced with componentDidMount and componentDidUpdate, which is what we currently use. The former is used to set that initial state provided to it before rendering and the update does the same with new info and state before that rerender. 

3. Define stateful logic.

    Stateful logic revolves around the use of logic values that are set, updated, etc., in various operations. We can initiate starting points for stateful logic, create specific instructions on what will make it update, and have that updated state reinstated within the same, or different, operations. It's useful in web applications due to how we can listen to user input and use that state information to do unique things, like set names, addresses, etc. 

4. What are the three step of creating a successful test? What is done in each phase?

    The three A's are arrange, act, and assert. Arrange is when we set up the test, which could be rendering the app, or loading in data, whatever is required to actually allow something to be tested on. Act is the phase where we DO something, maybe we search for an input field to type in, or a button to click, and then do something with those fields or objects. We alter something, activate something, or create something in the test to see if what we are doing will create the expected result. Finally, assert is the phase where we actually check to see if we get the results we want. If we click on a button, does our pop up appear? If we type a name, does that name show up somewhere? This final step can highlight what errors we may have with our app based on what, if anything, happens. 
