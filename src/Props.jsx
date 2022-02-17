import { Fragment } from "react/cjs/react.production.min";
import { Comentaris } from "./components/Comentaris";


function Props() {

    const usuaris = [
        {nom: "Salva", edat: 50, img: "https://picsum.photos/120", comentari: "Lorem piscum pizza de pollo con piña"},
        {nom: "David", edat: 46, img: "https://picsum.photos/120", comentari: "Lorem piscum pizza extra de mozzarella de xoriço de pamplona"},
        {nom: "Nacho", edat: 39, img: "https://picsum.photos/120", comentari: "Lorem piscum falafels de mongetes i arroç"}
    ];

    return (
        <Fragment>
            <div className="container">
                <h1>Exemple de Props</h1>    
                <div className="row">
                {
                    usuaris.map((item, index) => (
                        <Comentaris {...item} key={index} />
                    ))
                } 
                </div>
            </div>     
        </Fragment>
    );
}

export default Props;