import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [password, setPassword] = useState('');
  const [workType, setWorkType] = useState('');  // 작업 유형 상태 추가

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://13.209.79.37/mail/month-report', {  // IP 주소로 요청
        title, 
        body, 
        password,
        workType  // 작업 유형 데이터도 함께 전송
      });

      // 요청 성공 로직
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
      <input
        type="text"
        placeholder="작업 유형"
        value={workType}
        onChange={(e) => setWorkType(e.target.value)}
      />
      <button type="submit">보내기</button>
    </form>
  );
};

export default EmailForm;
