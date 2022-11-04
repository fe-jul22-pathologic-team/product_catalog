import { Main } from "./Main";
import './HomePage.scss';
import { NewModels } from "./NewModels";
import { Categories } from "./Categories";

const banner_img = require('../../img/banner-main(mobile).png');

export const HomePage: React.FC = () => {
  return (
    <section className="homePage">
      <h1 className="homePage__title">
        Welcome to Nice Gadgets store!
      </h1>

      <div className="homePage__banner banner">
        <img 
          src={banner_img} 
          alt="banner"
          className="banner__image"
        />
        <div className="banner__dots">
          <div className="banner__dot banner__dot--selected"></div>
          <div className="banner__dot"></div>
          <div className="banner__dot"></div>
        </div>
      </div>

      <div className="homePage__newModels">
        <NewModels />
      </div>

      <div className="homePage__categories">
        <Categories />
      </div>
        <Main />
    </section>      
  );
}
