import { useState } from 'react'
import { searchCities } from '../utils/API'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const Searchbar = ({history}) => {
    const [options, setOptions] = useState([])

    const onSearchChange = async (e) => {
        const data = await searchCities(e.target.value)
        setOptions(data)
    }

    const onCitySelect = (e, value) => {
        console.log(value.Key)
        history.push(`/city/${value.Key}`)
    }


    return (
        <div className='center'>
            <Autocomplete
                style={{ width: 300 }}
                freeSolo
                disableClearable
                options={options}
                getOptionLabel={(option) => option.LocalizedName}
                onChange={onCitySelect}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search city"
                        margin="normal"
                        variant="outlined"
                        onChange={onSearchChange}
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    )
}

export default Searchbar