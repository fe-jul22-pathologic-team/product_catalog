import '../BackToTop.scss';

export const BackToTop = () => {
  const vector = require('./vector.png');
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className="footer__scroll_button scroll_button">
      <p className="scroll_button__text">Back to top</p>
      <button className="scroll_button__button" onClick={scrollToTop}>
        <img src={vector} alt="vector" />
      </button>
    </div>
  );
}
