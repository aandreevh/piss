import React, { useState } from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import { useStyles } from './style';

interface FormProps {
  onFormSubmitted: (username: string, password: string, name: string) => void;
}

export default function MyFormn(props: FormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const { onFormSubmitted } = props;
  const onSubmit = () => {
    onFormSubmitted(username, password, name);
  };
  const classes = useStyles();
  return (
    <>
    <FormControl>
      <TextField
        className={classes.item}
        value={name}
        onChange={event => setName(event.target.value)}
        label="Name"
      />
      <TextField
        className={classes.item}
        value={username}
        onChange={event => setUsername(event.target.value)}
        label="Username"
      />
      <TextField
        className={classes.item}
        value={password}
        onChange={event => setPassword(event.target.value)}
        label="Password"
        type="password"
      />
    <Button onClick={onSubmit} className={classes.submitButton}>Submit form</Button>
    </FormControl>
    </>
  );
}
