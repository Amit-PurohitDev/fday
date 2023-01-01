import { SearchWrapper, Input } from '../style/SearchSt';
import expAsset from '../constants';
import { useState } from 'react';

const Search = () => {
    const [ st, setSt ] = useState(false);

    const onFocus = () => {
        setSt(!st);
    };

    return(
        <SearchWrapper state={st}>
            <img src={ st ? expAsset.icons.ActiveSearch : expAsset.icons.Search } alt="search" />
            <Input onBlur={onFocus} onFocus={onFocus} placeholder="Search..."/>
        </SearchWrapper>
    )
}

export default Search;