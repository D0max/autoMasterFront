import React from 'react';
import AuthPage from "./pages/AuthPage";

const Layout = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return (
      <AuthPage/>
    )
  }

  return (
    <div>
      <h1>KORINA I LOVE U</h1>
      Карина моя Жана, как дела, прикалываюсь, не бойся ни кто не увидит это сообщение кроме тебя, у тебя есть только пароли так что ни кто этого не увидит)))
      <p>А пароли скоро почищу потому что аккаунты тестовые и тут будет грандиозный проект</p>
      <p>Моя ты какашка</p>
    </div>
  );
};

export default Layout
