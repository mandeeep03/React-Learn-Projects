const customRender = function (reactElement, container) {
    // const domElement = document.createElement(element.type) 
    // domElement.innerHTML = element.children;
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // mainContainer.appendChild(domElement) 

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement); // Add to DOM


}


const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank',
    },
    children:"click me"
}
const mainContainer = document.querySelector('.root')
customRender(reactElement, mainContainer);

