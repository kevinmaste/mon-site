import React, { useState } from 'react'
import './ContactForm.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  email: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  message: {
    '& > *': {
      marginBottom: theme.spacing(2),
      backgroundColor: '#3b4353',
      color: 'white',
      '&:hover': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: '#3b4353',
        color: 'white',
      },
      '&.MuiFilledInput-underline:before': {
        borderBottom: '2px solid #6f7b9b',
      },
      '&.MuiFilledInput-underline:after': {
        borderBottom: '2px solid #258b9e',
      },
    },
  },
  submit: {
    '&': {
      backgroundColor: '#39b175',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#6de9ab',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const ContactForm = () => {
  const [status, setStatus] = useState('')
  const [emailText, setEmailText] = useState('')
  const [messageText, setMessageText] = useState('')

  const classes = useStyles()

  const refresh =()=>{
    setEmailText('')
    setMessageText('')
  }

  const submitForm = (ev) => {
    ev.preventDefault()
    if (emailText===undefined || messageText===undefined){
      alert("Error you can't sign the message")
    }
    axios({
      method: 'POST',
      url: 'https://send-app-m.herokuapp.com/send',
      data:{
        name:emailText,
        objet:'Message reçu',
        message:messageText
      }
    })
        .then((response)=>{
          if (response.data.msg === 'success'){
            setStatus('SUCCESS')
            refresh()
          }else if (response.data.msg === 'fail'){
            setStatus("ERROR")
          }
        })
  }

  const handleEmailChange = (event) => {
    const input = String(event.target.value)
    setEmailText(input)
  }

  const handleMessageChange = (event) => {
    const input = String(event.target.value)
    setMessageText(input)
  }

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submitForm}
        method="POST"
      >
        <TextField
          className={classes.email}
          type="email"
          name="email"
          label="Email"
          value={emailText}
          onChange={handleEmailChange}
          variant="filled"
        />
        <TextField
          className={classes.message}
          type="text"
          name="message"
          label="Message"
          value={messageText}
          onChange={handleMessageChange}
          multiline
          rows="5"
          variant="filled"
        />
        {status === 'SUCCESS' ? (
          <p className="email-success">Thanks!</p>
        ) : (
          <Button className={classes.submit} type="submit" variant="contained">
            Submit
          </Button>
        )}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  )
}

export default ContactForm
