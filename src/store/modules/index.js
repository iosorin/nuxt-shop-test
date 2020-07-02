/**
 * Automatically imports all the modules and exports as a single module object
 */
const modules = {};
const requireModule = require.context('.', false, /\.module\.js$/);

requireModule.keys().forEach((filename) => {
    const moduleName = filename
        .replace(/(\.\/|\.module\.js)/g, '')
        .replace(/^\w/, c => c.toUpperCase());

    modules[moduleName] = requireModule(filename).default || requireModule(filename);
});

export default modules;
