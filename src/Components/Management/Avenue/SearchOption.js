import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const CustomizedRadios = (props) => {


    const useStyles = makeStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        icon: {
            borderRadius: '50%',
            width: 16,
            height: 16,
            boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
            backgroundColor: '#f5f8fa',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
            '$root.Mui-focusVisible &': {
                outline: '2px auto rgba(19,124,189,.6)',
                outlineOffset: 2,
            },
            'input:hover ~ &': {
                backgroundColor: 'rgb(235, 232, 51)',
            },
            'input:disabled ~ &': {
                boxShadow: 'none',
                background: 'rgba(206,217,224,.5)',
            },
        },
        checkedIcon: {
            backgroundColor: 'rgb(235, 232, 51)',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
            '&:before': {
                display: 'block',
                width: 16,
                height: 16,
                backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
                content: '""',
            },
            'input:hover ~ &': {
                backgroundColor: 'rgb(235, 200, 51)',
            },
        },
    });


    const handleChange = (event) => {

        props.handleSelect(event.target.value)


    };


    const StyledRadio = (props) => {
        const classes = useStyles();


        return (
            <Radio
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
                icon={<span className={classes.icon}/>}
                {...props}
            />
        );
    }


    return (
        <FormControl component="fieldset">
            <RadioGroup row defaultValue="Id" aria-label="gender" name="customized-radios" onChange={handleChange}>
                <FormControlLabel value="Id" control={<StyledRadio/>} label="Id"/>
                <FormControlLabel value="Lugar" control={<StyledRadio/>} label="Lugar"/>
                <FormControlLabel value="Hora de apertura" control={<StyledRadio/>} label="Hora de apertura"/>
                <FormControlLabel value="Hora de cerrado" control={<StyledRadio/>} label="Hora de cerrado"/>

            </RadioGroup>
        </FormControl>
    );

}
export default CustomizedRadios
