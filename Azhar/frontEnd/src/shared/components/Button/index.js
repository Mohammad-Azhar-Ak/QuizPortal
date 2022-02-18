import { Button } from '@mui/material'

const CustomButton = ({ label, type, handleClick, value }) => {
    return (
        <Button
            type={type}
            variant="contained"
            color="primary"
            className="CustomButton"
            value={value}
            onClick={handleClick}
        >
            {label}
        </Button>
    )
}
export default CustomButton