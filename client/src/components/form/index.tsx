import React, { useCallback, useState } from 'react';
import { Button, FormControl, FormHelperText, IconButton, Input, InputLabel, TextField } from '@material-ui/core';
import { useStyles } from './style';
import { Send } from '@material-ui/icons';

interface FormProps {
  onFormSubmitted: (text: string) => void;
  enabled: boolean;
}

export default function MessageForm(props: FormProps) {
  const [text, setText] = useState('');
  const { onFormSubmitted, enabled } = props;

  const onSubmit = () => {
    const textToSend = text;
    onFormSubmitted(textToSend);
    setText('');
  };
  const classes = useStyles();
  return (
    <>
    <FormControl className={classes.form}>
      <TextField
        className={classes.inputField}
        value={text}
        multiline
        rows={2}
        rowsMax={5}
        onChange={event => setText(event.target.value)}
        
      />
    <IconButton onClick={onSubmit} disabled={!enabled} className={classes.submitButton}><Send></Send></IconButton>
    </FormControl>
    </>
  );
}
