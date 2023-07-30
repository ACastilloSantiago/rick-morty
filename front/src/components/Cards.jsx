import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {
        characters.map((Pj) => {
          // console.log(Pj);
          return (
            <div>
              <Card
                id={Pj.id}
                key={Pj.id}
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
}
