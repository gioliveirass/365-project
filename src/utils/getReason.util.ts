import { reasonsToLove } from "../constants/constants";

const getReasonToLove = () => {
  const index = Math.floor(Math.random() * reasonsToLove.length);
  const reasonToLove = reasonsToLove[index];
  return reasonToLove;
};

export default getReasonToLove;
