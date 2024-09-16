import ListItem from "./ListItem";


export default function ToDo() {
    return (
        <div>
            <h1>This is my ToDolist!:</h1>
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNqZTYzcHJ2dmQ5ODk1OWpvYm90cHV5YjdhMHZkYTZodjQyZDQzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ufnwz3wDUli7GU0/giphy.webp" alt="gif"/>
            <ol>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
            </ol>
        </div>
    )
}
