import React, { useState } from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import { useStyles } from './style';

interface FormProps {
  onFormSubmitted: (username: string, password: string, name: string) => void;
}

export default function MessageForm(props: FormProps) {
  const [text, setText] = useState('');
  
  const { onFormSubmitted } = props;
  const onSubmit = () => {
  };
  const classes = useStyles();
  return (
    <>
    <FormControl>
    
      <TextField
        className={classes.item}
        value={text}
        multiline
        rows={2}
        rowsMax={5}
        onChange={event => setText(event.target.value)}
        label="Message"
      />
    <Button onClick={onSubmit} className={classes.submitButton}>Send</Button>
    </FormControl>
    </>
  );
}
