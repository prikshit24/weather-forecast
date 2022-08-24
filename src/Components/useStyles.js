import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    formControl: {
        "& .MuiInputBase-root": {
            color: "#F9B854",
            border: 0,
            minWidth: "100%",
            padding:0,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        "& .MuiSelect-select.MuiSelect-select": {
            paddingRight: "0px",
            border: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: 0,
        },
    },
    select: {
        width: "100%",
        fontSize: "22px !important",
        border: 0,
        "&:focus": {
            backgroundColor: "transparent"
        },
        color: '#fff',
        margin:'15px 0px',
        padding:'0px 15px',
        position:'relative',
        
    },
    selectIcon: {
        color: "#fff !important",
    },
    paper: {
        borderRadius: 12,
        borderColor: 'white',
        marginTop: 8,
        border: 0,
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        "& li": {
            fontWeight: 200,
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: "12px"
        },
        "& li.Mui-selected": {
            color: "white",
            background: "#F9B854"
        },
        "& li.Mui-selected:hover": {
            background: "#F9B854"
        }
    }
}));