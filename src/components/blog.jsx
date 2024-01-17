import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useSearchParams } from "react-router-dom"

export default function Blog() {
    const {data,error,loading} = useFetch("https://rickandmortyapi.com/api/character")

    let [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e) =>{
        setSearchParams({filter: e.target.value});
    }



    if (loading) return (<h1>Buscando a morty que se perdio</h1>)
    if (error) return (<h1>morty cuidado que te caes</h1>)

    console.log(data,error,loading)
    return (
        <>
            <h1>blog- elegite a morty o muere</h1>
            <input type="text" name="filter" onChange={handleChange} className="form-control my-3" alt="buscador" value={searchParams.get("filter") || ""} />
            <ul className="list-group">
                {
                    data.results.map(personaje=>{
                        return(
                            <Link className="list-group-item"
                            key={personaje.id}
                            to={`/blog/${personaje.id}`}
                            >{personaje.name}</Link>
                        )
                        })
                }
            </ul>
        </>
    )
}