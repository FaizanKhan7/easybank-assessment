import { Card } from "react-bootstrap";
import "./articleCard.css";

function ArticleCard({ cardPhoto, photoBy, cardTitle, cardContent }) {
  return (
    <div>
      <Card
        style={{
          width: "16rem",
          boxShadow: "0 8px 12px rgba(0,0,0,0.03)",
          margin: "35px auto",
        }}
      >
        <Card.Img
          src={cardPhoto}
          style={{ width: "16rem", height: "12rem", margin: "0" }}
        />
        <Card.Body
          style={{
            backgroundColor: "#fff",
            width: "16rem",
            padding: "20px ",
          }}
        >
          <small style={{ color: "hsl(233, 8%, 62%)" }}>{photoBy}</small>
          <Card.Title style={{ marginTop: "5px" }}>{cardTitle}</Card.Title>
          <Card.Text>{cardContent}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ArticleCard;
