import ClipLoader from "react-spinners/ClipLoader";
const cssOverride = {
  display: "block",
  margin: "100px auto",
};
// eslint-disable-next-line react/prop-types
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      color="#4338ca"
      cssOverride={cssOverride}
      size={150}
    />
  );
};

export default Spinner;
