import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = () => {
  return (
    <div id="pagination" className="section-p1">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </a>
    </div>
  );
};

export default Pagination;
