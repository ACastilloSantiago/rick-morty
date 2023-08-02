import Card from "./Card";

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      {
        characters.map((Pj) => {
          // console.log(Pj);
          return (
            <div key={Pj.id}>
              <Card
                id={Pj.id}
                name={Pj.name}
                status={Pj.status}
                species={Pj.species}
                gender={Pj.gender}
                origin={Pj.origin}
                image={Pj.image}
                onClose={onClose}
              />
            </div>
          );
        })

        /* <Card
        id={props.id}
        name={props.name}
        status={props.status}
        species={props.species}
        gender={props.gender}
        origin={props.origin.name}
        image={props.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      /> */
      }
    </div>
  );
};
export default Cards;
