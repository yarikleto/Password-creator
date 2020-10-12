import View from "./View";
import Model from "./Model";
import Controller from "./Controller";

const view = new View();
const model = new Model();
const controller = new Controller({ view, model });
