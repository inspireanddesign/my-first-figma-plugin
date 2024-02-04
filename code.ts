figma.showUI(__html__);

figma.ui.resize(500,500);

figma.ui.onmessage = pluginMessage => {

    const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode;
    const defaultVariant = postComponentSet.defaultVariant as ComponentNode;

    defaultVariant.createInstance();

    console.log(postComponentSet);
    console.log(postComponentSet.children);
    console.log(postComponentSet.name);

    console.log(pluginMessage.name);
    console.log(pluginMessage.username);
    console.log(pluginMessage.description);
    console.log(pluginMessage.darkModeState);
    console.log(pluginMessage.imageVariant);

    if (pluginMessage.darkModeState === true) {
        console.log("Bienvenue dans le coté obscure");
    } else {
        console.log("vous etes du coté de la lumiere");
    }

    figma.closePlugin();
}