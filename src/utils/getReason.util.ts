import { reasonsToLove } from "../constants/constants";
import handleLocalStorageUtil from "./handleLocalStorage.util";

const getReasonToLove = () => {
  const reasonsToLoveInLocalStorage = handleLocalStorageUtil.getReasonsToLove();

  if (reasonsToLoveInLocalStorage.length === 0) {
    handleLocalStorageUtil.updateReasonsToLove(reasonsToLove);
  }

  let editableReasonsToLove = handleLocalStorageUtil.getReasonsToLove();

  const index = Math.floor(Math.random() * editableReasonsToLove.length);

  const reasonToLove = editableReasonsToLove[index];

  editableReasonsToLove = editableReasonsToLove.filter(
    (_reason, arrayPosition) => index !== arrayPosition
  );

  handleLocalStorageUtil.updateReasonsToLove(editableReasonsToLove);

  return reasonToLove;
};

export default getReasonToLove;
