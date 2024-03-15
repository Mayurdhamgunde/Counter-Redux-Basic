import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return <p className="fw-bolder lh-lg fs-3 mb-4">Counter current value {counter}</p>;
};

export default DisplayCounter;
