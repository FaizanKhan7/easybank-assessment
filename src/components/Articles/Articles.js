import ArticleCard from "../ArticleCards/ArticleCard";
import Currency from "../../images/image-currency.jpg";
import Restaurant from "../../images/image-restaurant.jpg";
import Plane from "../../images/image-plane.jpg";
import Confetti from "../../images/image-confetti.jpg";
import "./articles.css";

function Articles() {
  return (
    <div className="mainArticleWrapper">
      <div className="articleWrapper">
        <h1 className="text-center text-md-left p-md-4 px-md-5">
          Latest Articles
        </h1>
        <div className="d-md-flex flex-md-wrap justify-content-around latestCardsWrapper">
          <ArticleCard
            cardPhoto={Currency}
            photoBy={"By Claire Robinson"}
            cardTitle={"Receive money in any currency with no fees"}
            cardContent={
              "The world is getting smaller and we’re becoming more mobile. So why should you beforced to only receive money in a single"
            }
          />
          <ArticleCard
            cardPhoto={Restaurant}
            photoBy={"By Wilson Hutton"}
            cardTitle={"Treat yourself without worrying about money"}
            cardContent={
              "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you"
            }
          />
          <ArticleCard
            cardPhoto={Plane}
            photoBy={"By Wilson Hutton"}
            cardTitle={"Take your Easybank card wherever you go"}
            cardContent={
              "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you"
            }
          />
          <ArticleCard
            cardPhoto={Confetti}
            photoBy={"By Claire Robinson"}
            cardTitle={"Our invite-only Beta accounts are now live!"}
            cardContent={
              "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
