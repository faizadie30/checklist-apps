import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../app/Auth/AuthSlice';
import { getDataChecklist } from '../../app/Checklist/Checklist';

function Checklist() {
  const { token } = useSelector(authSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      dispatch(getDataChecklist(token));
    }
  }, [token]);
  return (
    <Layout menu="checklist">
      <div className="py-5">checklist</div>
    </Layout>
  );
}

export default Checklist;
