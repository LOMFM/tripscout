import { useState } from "react";

interface SearchBoxProps {
    placeholder: string;
    onSearch: (v: string) => void
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, placeholder }: SearchBoxProps) => {
    const [value, setValue] = useState<string>('');
    
    const onChangeValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    };

    const onKeyHandle = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.code === 'Enter') {
            onSearch(value);
            setValue('');
        }
    }

    return (
        <div className="search-bar">
            <div className=""></div>
            <input type="text" value={value} onChange={onChangeValue} onKeyUp={onKeyHandle} placeholder={placeholder}/>
        </div>
    )
}
