import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CharacterContext } from "../App";

export default function BlogCharacter() {
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`
    const {data, loading, error} = useFetch(
        url
    );

    const {characterList} = useContext(CharacterContext);

    if (loading) return (<h1>Buscando a morty que se perdio</h1>)
    if (error) return (<h1>morty cuidado que te caes</h1>)

    return (
        <div className="card">
            <img src={characterList[params.id-1].image} alt={characterList[params.id-1].name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{characterList[params.id-1].name}</h5>
                <p className="card-text">{characterList[params.id-1].species}</p>
            </div>
            <Link className="btn btn-outline-primary" to="/blog">Blog</Link>
        </div>
    )
    
}