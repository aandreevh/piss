import React from 'react';
import { render } from 'react-dom';
import { useLocation, useParams } from 'react-router-dom';

interface Param {
  auth: string;
}

export default function OauthComponent() {
  const params = useParams<{ id: string }>().id;

  return <h1 className="error">Fuck this shit {params}</h1>

}