import Spinner from "react-bootstrap/Spinner";
const LoadingSpinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-ceter w-100 mb-5">
        <Spinner animation="border" variant="secondary" />
    </div>
  );
};

export default LoadingSpinner;
