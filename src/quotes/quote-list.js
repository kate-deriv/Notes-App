import QuoteItem from "./quote-item";
import classes from "./quote-list.module.css";

const QuoteList = (props) => {
  return (
    <>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
