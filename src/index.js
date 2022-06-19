import View from "./View/View";
import Model from "./Model";
import Controller from "./Controller";

const model = new Model();
const view = new View(model);
const controller = new Controller(view, model);
