export default function CoreConcept({title, image, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }


  //// You can also do this:
// function CoreConcept(props) {
//   const {title, image, description} = props; <-- Spread here the props
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }

//// You can also do this:
// function CoreConcept({concept}) {
//   // Use concept.title, concept.description etc.
//   // Or destructure the concept object: const { title, description, image } = concept;

//   return (
//     <>...</>
//   );
// }
//// <CoreConcept concept={CORE_CONCEPTS[0]} /> //by calling <CoreConcept/> and passing parameter