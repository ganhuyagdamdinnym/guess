import { useState } from "react";

export function Box(props) {
  const {
    id,
    img,
    setCards,
    chosen,
    cards,
    index,
    setSaveid,
    saveid,
    clicked,
    setClicked,
    beforeclick,
    setBeforeclick,
  } = props;
  const [status, setStatus] = useState(false);
  function clickedCount() {
    console.log(clicked);
  }
  function findCart(id) {
    setClicked(clicked + 1);
    setBeforeclick(index);
    console.log("ghsafg", index);
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
      setTimeout(() => {
        //alert("Зураг таарсан");
        let unguessedCards = cards.filter(({ id: cardId }) => cardId !== id);
        setCards(unguessedCards);
        setSaveid(-1);
      }, 1000);
    } else if (saveid === -1) {
      setClicked(clicked + 1);
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
    } else if (index == beforeclick) {
      setClicked(clicked);
      //alert("jjj");
    } else {
      setClicked(clicked + 1);
      let newCards = cards.map((card, ind) => {
        if (ind == index) {
          card.chosen = true;
          setSaveid(id);
        }
        return card;
      });
      setCards(newCards);
      setTimeout(() => {
        setSaveid(-1);
        let notguess = cards.map((card) => {
          if (card.id !== 3333) {
            card.chosen = false;
          }
          return card;
        });
        setCards(notguess);
      }, 1000);
    }
  }

  return (
    <div>
      {chosen ? (
        <div
          className="w-64 h-56 border-black  border-2 rounded-xl "
          onClick={() => findCart()}
        >
          <img src={img} className="w-64 h-52 rounded-xl" />
        </div>
      ) : (
        <div>
          {status ? (
            <div></div>
          ) : (
            <div
              className="w-64 h-56 bg-black rounded-xl"
              onClick={() => findCart(id)}
            >
              <img className="w-64 h-56  rounded-xl" src="ritter.jpeg" />
            </div>
          )}
        </div>
      )}
      <button onClick={() => clickedCount()}>click</button>
    </div>
  );
}
