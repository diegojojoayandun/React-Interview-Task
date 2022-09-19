import { useState, useEffect } from "react";
import getReactRepositories from "../helpers/getItem";



const Repositories = () => {

    const [item, setItem] = useState([]);

    const updateitem = () => {
        getReactRepositories()
        .then((newItem) => {
            setItem(newItem.items);
        })

    }

    useEffect(() => {
        updateitem();
    }, []);

  return (
    <div>
        { item.map(({ forks, name, stargazers_count, html_url }) => (<ul>
           <li>Name: { name } - Stars 🌟: { stargazers_count } - Forks: { forks } - URL: { html_url }</li>
        </ul>

        ))}
    </div>
  )
}

export default Repositories