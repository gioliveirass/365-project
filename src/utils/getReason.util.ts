import { reasonsToLove } from "../constants/constants";

const getReasonToLove = () => {
  return reasonsToLove[Math.floor(Math.random() * reasonsToLove.length)];
};

export default getReasonToLove;
