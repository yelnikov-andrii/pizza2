import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';
import { url } from '../../data';

export const Activation = () => {
  const { activationToken } = useParams();
  const [isActivated, setIsActivated] = React.useState(false);
  const [checking, setChecking] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setChecking(true);
    axios.get(`${url}/activation/${activationToken}`)
      .then(response => {
        console.log(response);
        dispatch(setUser(response.data.user));
        localStorage.setItem('accessToken', response.data.accessToken);
        setIsActivated(true);
      })
      .catch((e) => {
        console.log(e);
        setIsActivated(false);
      })
      .finally(() => {
        setChecking(false);
        setChecked(true);
      })
  }, []);

  if (checking) {
    return (
      <Container className='activation'>
        <h2>
          Loading...
        </h2>
      </Container>
    )
  } else {
    return (
      <Container className='activation'>
        {checked && isActivated ? (
          <h4>
            User was activated
          </h4>
        ) : (
          <h4>
            User has already activated or your link is not correct
          </h4>
        )}
      </Container>
    );
  }
};

