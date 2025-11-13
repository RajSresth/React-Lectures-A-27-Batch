/* <h1>Hello World</h1> 

const heading = React.createElement('h1',{},"Hello World"); // React Element
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading);



const paragraph = React.createElement('p',{},"Paragraph Tag");
const root2 = ReactDOM.createRoot(document.getElementById("chombu"));
root2.render(paragraph)*/

/**
 * <div id="parent">
 *     <div class="child1">
 *              <h1>Heading Tag-1</h1>
 *      </div>
 *     <div class="child2">
 *              <h2>Heading Tag-2</h2>
 *      </div>
 * </div>
 */
// React Element or Object
const div = React.createElement(
                                'div',
                                {id:"parent"},
                                [
                                    React.createElement('div',{className:"child1"},React.createElement('h1',{},'Heading Tag-1')),
                                    React.createElement('div',{className:"child2"},React.createElement('h1',{},'Heading Tag-1'))
                                ]
                            );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);



