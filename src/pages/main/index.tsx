import MainLayout from '../../layouts/main';
import React, { useState } from "react";
import Modal from '../../components/modal';

const MainPage = () => {

  const [modal, setModal] = useState(true)

  return (
    <MainLayout>
      <h1>Main Page</h1>
      <Modal isOpen={modal} setModal={setModal} >
        <div>Stepan</div>
        <p>2323</p>
      </Modal>
    </MainLayout>
  );
};

export default MainPage;
