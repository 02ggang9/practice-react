import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/mail', { title, body, password });
      // 성공적으로 보냈다는 메시지 표시
    } catch (error) {
      // 에러 처리
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
