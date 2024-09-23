import { Link, useSearchParams } from "react-router-dom";

export default function Animals() {

    const [searchParams] = useSearchParams()

    console.log(searchParams)

    const animals = [
        "Pigeon",
        "Frog",
        "Cat",
        "Honeybadger",
        "Monkey",
        "Panda",
        "Elephant",
        "Dog",
        "Lion",
        "Tiger",
        "Eagle",
        "Guinea Pig",
        "Possum",
      ];

    //   to find the value of sort in our query string.
      const sort = searchParams.get('sort')

    if (sort == 'asc') {
        // works very well on most strings - 
        animals.sort()
    } else if (sort == 'desc') {
        animals.sort().reverse()
    }
    
    return (
        <div>
            <Link to='/animals'>Don't sort</Link>
            <br />
            <Link to='/animals?sort=asc'>sort by asc</Link>
            <br />
            <Link to='/animals?sort=desc'>sort by desc</Link>

            <ul>
                {animals.map(animal => (
                    <li key={animal}>{animal}</li>
                ))}
            </ul>
        </div>
    )
}

// ?sort=asc


['Berry', 'Cherry', 'Apple']