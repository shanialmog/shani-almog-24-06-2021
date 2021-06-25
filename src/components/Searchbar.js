import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const Searchbar = () => {
    return (
        <div className='center'>
            <Autocomplete
                style={{ width: 300 }}
                freeSolo
                disableClearable
                options={cities.map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    )
}

const cities = [
    'Ramat-Gan',
    'Tel-Aviv',
    'Jerusalem',
    'Haifa'
]

export default Searchbar