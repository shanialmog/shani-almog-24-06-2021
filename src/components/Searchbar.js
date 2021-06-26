import { useState } from 'react'
import { searchCities } from '../utils/API'
import Alert from '@material-ui/lab/Alert'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const Searchbar = ({ history }) => {
    const [options, setOptions] = useState([])
    const [error, setError] = useState(null)

    const onSearchChange = async (e) => {
        setError(null)
        try {
            const data = await searchCities(e.target.value)
            setOptions(data)
        } catch (e) {
            console.error(e)
            setError('Something went wrong')
        }
    }

    const onCitySelect = (e, value) => {
        console.log(value.Key)
        history.push(`/city/${value.Key}`)
    }


    return (
        <div>
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
            {
                error &&
                <div className='searchbar-alert'>
                    <Alert severity="error">{error}</Alert>
                </div>
            }
        </div>
    )
}

export default Searchbar