import css from './Button.module.css';

const Button = ({ onClickLoadMore, children }) => {
  return (
    <button className={css.Button} type="button" onClick={onClickLoadMore}>
      {children}
    </button>
  );
};

export default Button;
