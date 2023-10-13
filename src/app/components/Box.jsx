import { useState } from "react";

export function Box(props) {
  const { id, img, setCards, chosen, cards, index, setSaveid, saveid } = props;
  const [status, setStatus] = useState(false);
  function findCart(id) {
    if (saveid == id) {
      let newCards = cards.map((card, ind) => {
        if (ind == index) {
          card.chosen = true;
          setSaveid(id);
        } else {
        }
        return card;
      });
      setCards(newCards);
      ///
      alert("same");
      let unguessedCards = cards.filter(({ id: cardId }) => cardId !== id);
      setCards(unguessedCards);
      setSaveid(-1);
    } else if (saveid === -1) {
      let newCards = cards.map((card, ind) => {
        if (ind == index) {
          card.chosen = true;
          setSaveid(id);
        } else {
        }
        return card;
      });
      setCards(newCards);
      setSaveid(id);
    } else {
      let newCards = cards.map((card, ind) => {
        if (ind == index) {
          card.chosen = true;
          setSaveid(id);
        } else {
        }
        return card;
      });
      setCards(newCards);

      //
      setTimeout(function ()){  
      setSaveid(-1);
      let notguess = cards.map((card) => {
       if (card.id !== 3333) {
      card.chosen = false;
      }
      return card;
      });
         setCards(notguess);
      },3000);
      }



     
  }

  return (
    <div>
      {chosen ? (
        <div onClick={() => findCart()}>
          <img src={img} className="w-80 h-96" />
        </div>
      ) : (
        <div>
          {status ? (
            <div></div>
          ) : (
            <div className="w-80 h-96 bg-black" onClick={() => findCart(id)}>
              <img className="w-80 h-96  " src="onepiece.jpg" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
