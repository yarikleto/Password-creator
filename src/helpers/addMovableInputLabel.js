import { COLORS } from '../constants';

export const addMovableInputLabel = (
  inputNode,
  { focusColor = COLORS.dark, focusoutColor = COLORS.gray } = {}
) => {
  const label = inputNode.previousElementSibling;

  const focusLabel = () => {
    label.classList.add("movable-span");
    label.style.color = focusColor;
  }

  if (inputNode.value) focusLabel();
  inputNode.addEventListener("focus", focusLabel);
  inputNode.addEventListener("focusout", () => {
    label.style.color = focusoutColor;
    if (!inputNode.value) label.classList.remove("movable-span");
  });
}