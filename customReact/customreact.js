function customdom (reactElement, mainContiner)
{
    const domEle = document.createElement (reactElement.type);
    domEle.innerHTML = reactElement.children

    domEle.setAttribute('href', reactElement.props.href);
    domEle.setAttribute('target',reactElement.props.target);

    for(prop in reactElement.props)
    {
        if(prop === 'children') continue
        {
            domEle.setAttribute(prop, reactElement.props[prop]);
        }
    }

    mainContiner.appendChild(domEle);
    console.log ("custom element created");
}

const mainContiner = document.getElementById('root');

const reactElement = {
    type: 'a',
    props :
    {
        href:"https://google.com",
        target:"_blank"
    },
    children: "Click here"
}

customdom(reactElement,mainContiner)