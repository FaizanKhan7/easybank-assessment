import { Button } from "react-bootstrap";
import "./btn.css";

function Btn({ style }) {
  return (
    <Button variant="primary" className="p-2 px-4 btn" style={style}>
      Request Invite
    </Button>
  );
}

export default Btn;
