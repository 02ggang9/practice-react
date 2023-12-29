import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://13.209.79.37/month-report', {
        title, 
        body, 
        password
      });

      // 여기에 성공적으로 요청을 보냈을 때의 로직을 작성하세요.
      console.log(response.data);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="본문"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">보내기</button>
    </form>
  );
};

export default EmailForm;
