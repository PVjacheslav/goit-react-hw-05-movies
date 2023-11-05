import { useState } from "react"
import { Button, Input, SearchForm } from "./Forma.styled";

const Forma = ({ searchMovies }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = evt => {
        setQuery(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        searchMovies(query.toLowerCase());
    };

    return (
    <SearchForm onSubmit={handleSubmit}>
        <Input
            type="text"
            name="query"
            autoFocus
            value={query}
            onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>
    </SearchForm>
  );
}

export default Forma;